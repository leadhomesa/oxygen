FROM node:10-alpine as build

RUN apk add --no-cache git

# Install
WORKDIR /app
COPY . .
RUN npm i

# Tests
RUN npm lint

# Release
RUN npx semantic-release