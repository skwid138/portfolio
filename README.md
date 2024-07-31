# Portfolio

## Local Setup


## Host Setup

Make `setup_docker_nginx.sh` executable by running `chmod +x setup_docker_nginx.sh`
Run the setup script `./setup_docker_nginx.sh`

This script will install Docker on your Linux host and set up an Nginx server running inside a Docker container. It may be modified to include additional services or configurations in the future.

Steps to flesh out or improve
- File permissions for certbot and nginx directories
- Starting temporary nginx for cert auth
- Manually creating certs before running main nginx container
- Google Cloud DNS setup and namecheap updates
