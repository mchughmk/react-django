FROM node:latest

WORKDIR /code
COPY . /code

RUN apt-get update
RUN npm install webpack -g
RUN npm install
CMD webpack