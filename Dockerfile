FROM node:10-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 9031
ENTRYPOINT ["node"]
CMD ["server.js"]