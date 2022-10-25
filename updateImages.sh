#!/bin/bash
docker tag back-end:latest chokosk8/nestjs:back-end
docker push chokosk8/nestjs:back-end
docker tag debian:11 chokosk8/nestjs:debian
docker push chokosk8/nestjs:debian
