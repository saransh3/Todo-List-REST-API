# Use the official Node.js image as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the app's code into the container
COPY . .

# Expose the app's port (default is 3000)
EXPOSE 3000

# Command to start the app
CMD ["node", "index.js"]
