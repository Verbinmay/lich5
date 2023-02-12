import { Request, Response, Router } from "express";
import { usersServer } from "../domain/user-service";
import {
  inputValidationMiddleware,
  loginOrEmailValidation,
  passwordValidation,
} from "../middleware/input-validation-middleware";

export const authRouter = Router({});

authRouter.post(
  "/login",
  loginOrEmailValidation,
  passwordValidation,
  inputValidationMiddleware,
  async (req: Request, res: Response) => {
    const postedAuth = await usersServer.checkAuth(
      req.body.loginOrEmail,
      req.body.password
    );
    if (postedAuth) {
      res.send(204);
    } else {
      res.send(401);
    }
  }
);
