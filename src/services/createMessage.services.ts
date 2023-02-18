import AppDataSource from "../data-source";
import Message from '../entities/message.entity'
import { messageResponseSerializer } from "../serializers/message.serializers";
import { IMessage } from "../interfaces/message.interface";
import { IMessageRequest } from "../interfaces/message.interface";

const createMessageService = async (
messageData: IMessageRequest,
): Promise<IMessage> => {
  const messageRepository = AppDataSource.getRepository(Message);


  const newMessage = messageRepository.create({ ...messageData});
  await messageRepository.save(newMessage);

  const validatedMessage = await messageResponseSerializer.validate(newMessage, {
    stripUnknown: true,
  });

  return validatedMessage;
};
export default createMessageService;
