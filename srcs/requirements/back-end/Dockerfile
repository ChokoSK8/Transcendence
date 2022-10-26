FROM debian:11

RUN apt update && apt install -y npm nodejs vim procps curl

COPY ./script.sh /home

EXPOSE 3000

WORKDIR /home

ENTRYPOINT [ "./script.sh" ]
