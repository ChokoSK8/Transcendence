YML	= srcs/docker-compose.yml

all:	clean
	docker-compose -f $(YML) build
	docker-compose -f $(YML) up

relauch:
	docker-compose -f $(YML) up

down:
	docker-compose -f $(YML) down

re: fclean all

clean:
	docker-compose -f $(YML) rm $(docker ps -a)

fclean:	clean
	docker-compose -f $(YML) down --rmi all -v

.PHONY: all re down clean fclean
