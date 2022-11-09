import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Socket, io } from 'socket.io-client';
import './App.css';
import MessageInput from './components/message-input.component';
import Messages from './components/messages.component';

function App() {
		// useState allow us to keep track of the variable socket
		// and setSocket is the update function
	const [socket, setSocket] = useState<Socket>()
		// [] added to say at messages variable initialize is a empty array
	const [messages, setMessages] = useState<string[]>([])

	const	send = (value: string) => {
		console.log({value});
		socket?.emit("message", value);
	}
		// useEffect(<function>, <dependency>) runs on every render
		// [setSocket] dependency will make useEffect runs only on the first render and any time dependency value changes
	useEffect(() => {
			// passing the chat.gateway.url
		const newSocket = io('back-end:3001');
		console.log({newSocket});
		console.log({"msg": "hello"});
		setSocket(newSocket);
	}, [])

	const	messageListener = (message: string) => {
			// ...messages means we are getting all the elements of messages[]
		setMessages([...messages, message]);
	}

	useEffect(() => {
			// the socket will listen the event 'message'
			// and trigger messageListener function
		socket?.on("message", messageListener);
			// it's a cleaner function
		return () => {
			socket?.off("message", messageListener);
		}
	}, [messageListener])

	return (
		<>
			{" "}
			<MessageInput send={send} />
			<Messages messages={messages} />
		</>
	)
}

export default App;
