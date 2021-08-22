#  Dockerfile for Node Express Backend
#FROM node:10.16-alpine
FROM node:10.16

# Create App Directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy app source code
COPY ./app/ .

RUN npm install
ENV PORT=3000

# Exports
EXPOSE 3000

CMD ["npm","start"]