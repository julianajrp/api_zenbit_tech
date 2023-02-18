import * as yup from "yup";
import { SchemaOf } from "yup";
import { IMessageRequest } from "../interfaces/message.interface";



const messageSerializer: SchemaOf<IMessageRequest> = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().max(50).required(),
    message: yup.string().max(1000).required(),
  });
  
const messageResponseSerializer = yup.object().shape({
    id: yup.number().required(),
    name: yup.string().max(50).required(),
    email: yup.string().email().required(),
    message: yup.string().max(1000).required(),
    createdAt: yup.date().required(),
  });

  const messageListResponseSerializer = yup.array(messageResponseSerializer);

export {
  messageSerializer,
  messageResponseSerializer,
  messageListResponseSerializer,
};
