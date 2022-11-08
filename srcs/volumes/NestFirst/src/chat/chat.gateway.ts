import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';

	// WebSocketGateway allows us to use the socket.io functionnality
@WebSocketGateway()

	// OnGateways are here to handle connection and disconnection
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect, OnModuleInit {

		// WebSocketServer gives us access to the server instance which trigger events and send data to connected clients
	@WebSocketServer() server: Server;

	users: number = 0;

	onModuleInit() {
		this.server.on('connection', (socket) => {
			socket.emit('chat', 'Hey i\'m new');
			console.log(socket.id);
			console.log('connected');
		});
	}

	async handleConnection() {
		this.users++;

			// Notify clients of users number
		this.server.emit('users', this.users);
	}

	async handleDisconnect() {
		this.users--;

			// Notify clients of users number
		this.server.emit('users', this.users);
	}

		// SubscribeMessage catch the 'chat' events
	@SubscribeMessage('chat')

		// client is a reference to the socket instance which send the msg
	handleChat(@MessageBody() body): string {
		console.log({body});
		return (body);
	}
}
