#!/bin/bash

## On locally installed docker image of ubuntu:latest sudo was not installed
#docker compose -f docker-compose.local.yaml  up -d
#docker exec -it 6252352524b5 bash

## make sure you're root
#su -
## update
#apt-get update
## install sudo
#apt-get install sudo

# Update and upgrade the system
sudo apt-get update -y
sudo apt-get upgrade -y

# Install prerequisites
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
## during install 2 for America and 37 for chicago

# Add Docker’s official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
#Warning: apt-key is deprecated. Manage keyring files in trusted.gpg.d instead (see apt-key(8)).

# Add Docker’s official repository to APT sources
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# Update the package database with Docker packages from the newly added repo
sudo apt-get update -y

# Install Docker
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

# Start and enable Docker
sudo systemctl start docker
sudo systemctl enable docker

# If using sysvinit start and enable (this is the case on locally installed docker image of ubuntu:latest)
#sudo service docker start
#sudo service docker on

# Verify Docker installation
docker --version

## TODO: I can move this step into root compose
# Pull the latest Nginx image
sudo docker pull nginx:latest

# Run Nginx in a Docker container
sudo docker run --name nginx-container -p 80:80 -d nginx

# Optional: Set up a Docker network if needed
# sudo docker network create my_network

# Optional: Connect Nginx container to the custom network
# sudo docker network connect my_network nginx-container

echo "Docker and Nginx have been installed and set up."
