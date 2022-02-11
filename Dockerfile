FROM node:16-alpine

WORKDIR /app/src

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "production"]