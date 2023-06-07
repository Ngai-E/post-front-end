#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM --platform=linux/amd64 nginx:alpine
COPY --from=node /app/dist/post-frontend /usr/share/nginx/html
