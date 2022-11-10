import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import io, { Socket } from 'socket.io-client';
import './App.css';
import MessageInput from './components/message-input.component';
import Messages from './components/messages.component';

function App() {
		// useState allow us to keep track of the variable socket
		// and setSocket is the update function
	const [socket, setSocket] = useState<Socket>()
		// [] added to say at messages variable initialize is a empty array
	const [messages, setMessages] = useState<string[]>([])
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `${count}`;
	})

	const	send = (value: string) => {
		console.log({value});
		socket?.emit("message", value);
	}
		// useEffect(<function>, <dependency>) runs on every render
		// [setSocket] dependency will make useEffect runs only on the first render and any time dependency value changes
	useEffect(() => {
			// passing the chat.gateway.url
		const newSocket = io('http://localhost:4141');
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
	})

	return (
		<>
			<div>
				<p>You clicked {count} times </p>
				<button onClick={() => setCount(count + 1)}>
					Click me
				</button>
			</div>
			{" "}
			<MessageInput send={send} />
			<Messages messages={messages} />
			<div>
				<p>Message: {messages} </p>
			</div>
		</>
	)
}

export default App;
