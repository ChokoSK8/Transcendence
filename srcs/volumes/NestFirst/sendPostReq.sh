#!/bin/bash

if [ $1 == "POST" ]
then
	curl -X POST http://localhost:3000/auth/$2 -d '{ "email": "abrun@student.42.fr", "password": "abpass" }' -H "Content-Type: application/json"
else
	curl -X GET http://localhost:3000/users/me -d '{ $2 }' -H "Content-Type: application/json"
fi
