#!/bin/bash
sed -i -e "s/\/mnt\/nfs\/homes\/abrun\/data\/pgData/\/home\/user42\/data\/pgData/g" srcs/docker-compose.yml
