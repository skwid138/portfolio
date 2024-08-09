# Use the official Node.js image
FROM node:lts

# Set the working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application on port 3000
EXPOSE 3000

# Add entrypoint script
COPY entrypoint.sh /entrypoint.sh

## TODO: The above copy can be removed and the path below can be updated to /app/entrypoint.sh to simplify this - May be a good idea to make the script executable too
# Set the entrypoint to conditionally setup for prod or dev
ENTRYPOINT ["/entrypoint.sh"]
