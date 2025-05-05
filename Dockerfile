# Use official Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install

# Copy all app files
COPY . .

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
