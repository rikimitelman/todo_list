FROM node:20.9.0
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY  . /app/
ENTRYPOINT [ "npm", "run", "start" ]