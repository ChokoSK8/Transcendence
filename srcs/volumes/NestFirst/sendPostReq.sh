#!/bin/bash

	curl -X POST http://localhost:3000/auth/signup -d '{ "email": "charlo@student.42.fr", "password": "chpass" }' -H "Content-Type: application/json"
echo ""
