FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Clean install dependencies
RUN rm -rf node_modules package-lock.json && \
    npm cache clean --force && \
    npm install --production --no-optional

# Copy source code
COPY . .

EXPOSE 3001

CMD ["npm", "start"]
