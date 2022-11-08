import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
export declare class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
    server: any;
    users: number;
    handleConnection(): Promise<void>;
    handleDisconnect(): Promise<void>;
    handleChat(client: any, msg: any): string;
}
