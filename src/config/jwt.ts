import jwt from "jsonwebtoken";
import { envs } from "./envs";

const JWT_SEED = envs.JWT_SECRET;

export const JwtAdapter = {
  generateToken: async (
    payload: any,
    duration: string = "2h"
  ): Promise<string | null> => {
    return new Promise((resolve) => {
      jwt.sign(payload, JWT_SEED, { expiresIn: duration }, (err, token) => {
        if (err) {
          return null;
        }
        resolve(`${token}`);
      });
    });
  },
  verifyToken: (token: string) => {},
};
