FROM debian:11

COPY ./.ssh/id_rsa /root/.ssh/id_rsa

RUN apt update && apt install -y npm nodejs vim procps git ssh

COPY ./script.sh /home

EXPOSE 3000

WORKDIR /home

ENTRYPOINT [ "./script.sh" ]
