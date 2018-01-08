# Use alpine image because it is the smallest
FROM node:alpine

# Create separate folder to serve the web app
CMD mkdir ionic-web-app

# Copy the ionic project content to docker image
COPY . /

# Install all the dependencies
CMD npm install

# Serve the app on startup
ENTRYPOINT npm run serve:ci

# Expose the port on which the ionic app is served
EXPOSE 8100
