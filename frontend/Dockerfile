# ----------------------------
# Stage 1: Build React App
# ----------------------------
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci --silent

# Copy source code
COPY . .

# Build argument for API URL
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=${REACT_APP_API_URL:-http://localhost:4000}

# Build React app
RUN npm run build

# ----------------------------
# Stage 2: Production with Nginx
# ----------------------------
FROM nginx:1.25-alpine

# Copy build files to nginx html
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
