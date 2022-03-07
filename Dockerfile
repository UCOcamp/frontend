FROM node:16-alpine

COPY . .

RUN npm install

WORKDIR /usr/src/app

RUN npm run build

CMD ["npm", "run", "dev"]
