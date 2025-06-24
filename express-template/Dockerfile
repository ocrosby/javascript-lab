# Use official Node.js LTS base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy the rest of the application
COPY . .

# Expose port (default to 3000)
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]

