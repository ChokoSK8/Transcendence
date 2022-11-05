#!/bin/bash

#UUPDATING NODE TO V18
curl -o /usr/local/bin/n https://raw.githubusercontent.com/visionmedia/n/master/bin/n
chmod +x /usr/local/bin/n
n stable

mkdir -p /home/Projects/NestFirst
cd /home/Projects/NestFirst
npm i -g @nestjs/cli
npm install
npx prisma migrate deploy
