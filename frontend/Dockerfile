<<<<<<< HEAD
# Stage 1: Dependencies
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Stage 2: Builder (THIS IS THE CRITICAL STAGE)
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# ✅ This generates .next and public directories
=======
# Multi-stage build for Next.js application

# Stage 1: Dependencies
FROM node:18-alpine AS deps
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Stage 2: Build
FROM node:18-alpine AS builder
WORKDIR /app

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules

# Copy source code
COPY . .

# Set environment variable
ENV NEXT_TELEMETRY_DISABLED 1

# Build application
>>>>>>> 709b45a7cf509acfdc0ee4f7a1c02c4e4e25c484
RUN npm run build

# Stage 3: Production
FROM node:18-alpine AS production
WORKDIR /app

# Create non-root user
<<<<<<< HEAD
RUN addgroup -g 1001 -S nodejs && adduser -S nextuser -u 1001

# Copy only necessary files from builder stage
COPY --from=builder --chown=nextuser:nodejs /app/.next ./.next
COPY --from=builder --chown=nextuser:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextuser:nodejs /app/package.json ./package.json

# Only copy public if it exists in your source
# If you don't have a public folder, REMOVE this line
COPY --from=builder --chown=nextuser:nodejs /app/public ./public

USER nextuser
EXPOSE 3000
CMD ["npm", "start"]
=======
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextuser -u 1001

# Copy built application
COPY --from=builder --chown=nextuser:nodejs /app/public ./public
COPY --from=builder --chown=nextuser:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextuser:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextuser

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the application
ENV PORT 3000
CMD ["node", "server.js"]
>>>>>>> 709b45a7cf509acfdc0ee4f7a1c02c4e4e25c484
