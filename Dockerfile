FROM node:12.16.3-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 8080
CMD [ "node", "app.js" ]