# Portfolio

## Local Setup

...To Be Continued

## Host Setup

Make `setup_docker_nginx.sh` executable by running `chmod +x setup_docker_nginx.sh`
Run the setup script `./setup_docker_nginx.sh`

This script will install Docker on your Linux host and set up an Nginx server running inside a Docker container. It may be modified to include additional services or configurations in the future.

### Steps to flesh out, improve, and include in the shell script for easy redeployment
- File permissions for certbot and nginx directories (add to script)
- Starting temporary nginx for cert auth (add to script)
- Manually creating certs before running main nginx container (add to script)
- Google Cloud DNS setup and namecheap updates


### TODO:
- Create READMEs for each project
- Create backends for each type of project (Node.js and Express, Python, Django and Flask, Go, etc.)
- Setup CI/CD pipeline
- Outline tech used and how it's setup for the root/host of this portfolio project
- Update GitHub repo topics as new technology is added

## Deployment

~ *Temporary* ~

- Connect to the Google Compute Engine Instance: `gcloud compute ssh --zone <shhh this is a secret>`
- Switch to root user `sudo su -`
- Navigate to the repo root `cd /var/www/portfolio`
- Pull the latest changes from the [main branch](https://github.com/skwid138/portfolio/tree/main) `git pull origin/main`
- Start and rebuild containers as needed `docker compose up -d --build`
