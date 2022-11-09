FROM	node:19-alpine3.15

COPY	.vimrc /root/

RUN	apk --no-cache add npm vim zsh curl git emacs

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$PATH:/home/node/.npm-global/bin

# root only for dev
USER root

# zsh only for dev
ARG OH_MY_ZSH_THEME=cloud
RUN set -eux; \
		sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"; \
		sed -i "s/\(^ZSH_THEME=\).*/\1$OH_MY_ZSH_THEME/" ~/.zshrc;

EXPOSE	3000

RUN	mkdir /home/Projects

#RUN	cd /home/Projects ; npm i create-react-app ; npx create-react-app react-websocket --template typescript

WORKDIR	/home/Projects/react-websocket

CMD	["npm", "start"]
