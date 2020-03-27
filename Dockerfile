FROM node:current-slim
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
EXPOSE 4200
COPY . .
CMD [ "npm", "start" ]
