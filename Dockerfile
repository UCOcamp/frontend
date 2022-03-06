FROM node:16-alpine

COPY package*.json ./

RUN npm i -g next react react-dom

COPY . .

RUN npm install

WORKDIR /usr/src/app

RUN npm run build

CMD ["npm", "run", "dev"]
