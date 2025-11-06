# backend/Dockerfile
FROM node:20-alpine AS base
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --only=production --silent
COPY . .

ENV NODE_ENV=production
EXPOSE 4000
CMD ["node", "src/index.js"]
