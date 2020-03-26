FROM node:10.16 AS build
WORKDIR /home/kamil/WebLedgerFrontend
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
