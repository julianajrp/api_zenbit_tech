import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
  } from "typeorm";
  
  @Entity("message")
  class Message {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 50 })
    name: string;
 
  
    @Column({ length: 100, unique: true })
    email: string;
  
    @CreateDateColumn()
    createdAt: Date;

     
    @Column({ length: 320 })
    message: string;
  }
  
  export default Message;
  