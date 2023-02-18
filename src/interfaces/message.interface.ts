export interface IMessage {
    name: string;
    email: string;
    message: string;

  }
  
  export interface IMessageRequest {
    name: string;
    email: string;
    message: string;

  }
  export interface IMessageResponse {
    id: number;
    name: string;
    email: string;
    message: string;
    createdAt: Date;
  }