#!/bin/bash

chmod 600 /root/.ssh/id_rsa
ssh-keyscan -t rsa github.com > /root/.ssh/known_hosts
ssh -T git@github.com
git clone git@github.com:ChokoSK8/NestFirst.git

cd NestFirst
npm i -g @nestjs/cli
npm install

tail -f /dev/null
