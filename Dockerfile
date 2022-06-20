FROM node:18.2.0-alpine3.15 as build_stage

WORKDIR /usr/src/app

RUN npm i -g pnpm

COPY package*.json ./

RUN pnpm i

COPY . .

RUN pnpm build

FROM nginx:1.22.0-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build_stage /usr/src/app/dist/task-tracker-traversy-media /usr/share/nginx/html
