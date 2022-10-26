#!/bin/bash
sed -i -e "s/\/home\/user42\/data\/pgData/\/mnt\/nfs\/homes\/abrun\/data\/pgData/g" srcs/docker-compose.yml
sed -i -e "s/\/home\/user42\/Projects\/NestFirst/\/mnt/nfs\/homes\/abrun\/Projects\/NestFirst/g" srcs/docker-compose.yml
