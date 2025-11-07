# frontend/Dockerfile
# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm  install --silent
COPY . .
ARG REACT_APP_API_URL
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=${REACT_APP_API_URL:-http://localhost:4000}
RUN npm run build

# Production stage
FROM nginx:1.25-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
