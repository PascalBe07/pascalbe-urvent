## Running as web-app locally using docker

### Requirements
- docker
- git

### Steps
* clone the source code with git clone **https://github.com/PascalBe07/pascalbe-urvent.git**
* cd to app folder with **cd pascalbe-urvent\app\urvent**
* build a docker image with **docker build -t pascalbe-urvent .**
* run a docker container instance with **docker run -d -p 8080:8100 pascalbe-urvent**
* open a browser of your choice and navigate to **localhost:8080/ionic-lab**

### Notes
* the image build might take a while to pull the node base image and to install the ionic dependencies
* it might take a short while until the webpage is available on your host after starting the docker container
