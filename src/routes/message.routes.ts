import { Router } from "express";
import { createMessageController, listAllMessagesController } from "../controllers/message.controllers";


const messageRoutes = Router();

messageRoutes.post(
  "/",
  createMessageController
);

messageRoutes.get("/list", listAllMessagesController);

export default messageRoutes;