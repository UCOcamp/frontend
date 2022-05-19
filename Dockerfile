FROM node:16-alpine as ucocamp-front
RUN npm i -g npm@8.5.5

WORKDIR /usr/src/app
COPY ./package.json .
COPY ./package-lock.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]
