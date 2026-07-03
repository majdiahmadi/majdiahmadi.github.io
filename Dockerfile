# Build stage
FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY docs/ ./docs/
RUN npm run docs:build

# Serve stage
FROM nginx:alpine
COPY --from=build /app/docs/.vitepress/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
