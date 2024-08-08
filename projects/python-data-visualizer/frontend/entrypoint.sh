#!/bin/sh

# May need to run this on the server: chmod +x ./projects/go-chat-app/frontend/entrypoint.sh

# Run production by default
if [ "$NODE_ENV" = "development" ]; then
  echo "Running in development mode"
  npm run dev
else
  echo "Running in production mode"
  npm run build
  npm run start
fi
