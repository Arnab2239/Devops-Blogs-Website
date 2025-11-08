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
RUN npm run build

# Stage 3: Production
FROM node:18-alpine AS production
WORKDIR /app

# Create non-root user
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