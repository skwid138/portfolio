FROM node:20

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

# Set the entrypoint to conditionally setup for prod or dev
ENTRYPOINT ["entrypoint.sh"]
