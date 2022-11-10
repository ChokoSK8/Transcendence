import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';
export declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect, OnModuleInit {
    server: Server;
    users: number;
    onModuleInit(): void;
    handleConnection(): Promise<void>;
    handleDisconnect(): Promise<void>;
    handleChat(msg: string): void;
}
