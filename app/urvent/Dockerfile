# Use alpine image because it is the smallest
FROM node:latest

# Copy the ionic project content to docker image
COPY . /

# Install all the dependencies
RUN npm install

# Serve the app on startup
ENTRYPOINT npm run serve:ci

# Expose the port on which the ionic app is served
EXPOSE 8100
