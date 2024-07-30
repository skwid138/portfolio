#!/bin/bash

# Update and install Docker
sudo apt update
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce

# Start Docker service
sudo systemctl start docker

# Create Docker network
docker network create portfolio_network

# Create necessary directories
#mkdir -p ~/nginx/conf.d

# Create Nginx configuration files
cat > /etc/nginx/conf.d/default.conf <<EOL
server {
    listen 80;
    server_name your_domain_or_IP;

    location / {
        proxy_pass http://app_container:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOL

# Create Docker Compose file
cat > ~/docker-compose.yml <<EOL
version: '3'

services:
  nginx:
    image: nginx:latest
    container_name: nginx
    volumes:
      - ~/nginx/conf.d:/etc/nginx/conf.d
    ports:
      - "80:80"
    networks:
      - portfolio_network

  #app:
    #image: your_app_image
    #container_name: app_container
    #networks:
      - portfolio_network

networks:
  portfolio_network:
    external: true
EOL

# Start Docker Compose
docker compose up -d
