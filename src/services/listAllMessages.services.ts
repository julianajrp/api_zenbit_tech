import AppDataSource from "../data-source";
import { IMessage } from "../interfaces/message.interface";
import Message from "../entities/message.entity";
import { messageListResponseSerializer } from "../serializers/message.serializers";

const listAllMessagesService = async (): Promise<IMessage[]> => {
  const messageRepository = AppDataSource.getRepository(Message);

  const messageList = await messageRepository.find();

  const validatedMessageList = await messageListResponseSerializer.validate(
    messageList,
    {
      stripUnknown: true,
    }
  );

  return validatedMessageList;
};
export default listAllMessagesService;
