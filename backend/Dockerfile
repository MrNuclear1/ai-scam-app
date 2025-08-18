# Use Node.js 18 Alpine image for optimal performance
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better Docker cache utilization
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application source
COPY src/ ./src/

# Expose port
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3001/api/health || exit 1

# Start the application
CMD ["npm", "start"]