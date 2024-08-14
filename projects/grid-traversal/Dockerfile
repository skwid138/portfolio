FROM node:lts

WORKDIR /app

RUN git clone https://github.com/skwid138/maestro-ai-programming-puzzle.git .

# Install dependencies
RUN npm install

# Build the production files
RUN npm run build

# Copy only the dist folder to the host machine
CMD ["cp", "-R", "dist", "/dist"]
