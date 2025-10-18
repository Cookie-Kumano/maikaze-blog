# syntax=docker/dockerfile:1

# Stage 1: Base image.
## Start with a base image containing NodeJS so we can build Docusaurus.
FROM node:22-slim AS base
## Disable colour output from yarn to make logs easier to read.
ENV FORCE_COLOR=0
## Enable corepack.
RUN corepack enable
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus

# Stage 2a: Development mode.
FROM base AS dev
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus
## Expose the port that Docusaurus will run on.
EXPOSE 3000
## Run the development server.
CMD [ -d "node_modules" ] && npm run start -- --host 0.0.0.0 --poll 1000 || npm install && npm run start -- --host 0.0.0.0 --poll 1000

# Stage 2b: Production build mode
FROM base AS prod
WORKDIR /opt/docusaurus
COPY package*.json ./
RUN npm ci
COPY . /opt/docusaurus/
RUN npm run build

# Stage 3b: Serve with Nginx
FROM nginx:alpine AS prod-server
RUN rm -rf /usr/share/nginx/html/*
COPY --from=prod /opt/docusaurus/build /usr/share/nginx/html/
EXPOSE 80 
# Run Nginx as Foreground
CMD ["nginx", "-g", "daemon off;"]
