import { Request, Response } from "express";
import createMessageService from "../services/createMessage.services";
import { IMessageRequest } from "../interfaces/message.interface";
import listAllMessagesService from "../services/listAllMessages.services";



const createMessageController = async (req: Request, res: Response) => {
  const messageContent: IMessageRequest = req.body;
  console.log(req)
  const createdMessage = await createMessageService(messageContent);

  return res.status(201).json(createdMessage);
};

const listAllMessagesController = async (req: Request, res: Response) => {
  const messages = await listAllMessagesService();

  return res.status(200).json(messages);
};

export {
    createMessageController,
    listAllMessagesController,
  };