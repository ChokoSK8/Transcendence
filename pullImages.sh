#!/bin/bash
docker login -u chokosk8 -p $dockerPwd
docker pull chokosk8/nestjs:debian
docker pull chokosk8/nestjs:back-end
