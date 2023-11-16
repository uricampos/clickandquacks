# Create image based on the official Node image from dockerhub
FROM node:lts-alpine
 
# Create app directory
WORKDIR /usr/app
 
# Copy dependency definitions
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
 
# Install dependencies
RUN npm i
 
# Get all the code needed to run the app
COPY . .
 
# Expose the port the app runs in
EXPOSE 5173
 
# Serve the app
CMD ["npm", "run", "dev"]
