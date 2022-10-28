#!/bin/bash
curl http://localhost:3000/users/me -H "Authorization: Bearer $1"
