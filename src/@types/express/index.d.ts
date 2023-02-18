import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      message: {
        name: string;
        email: boolean;
        message: string;
      };
    }
  }
}

export {};
