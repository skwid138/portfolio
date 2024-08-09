#!/bin/sh

# Run production by default
if [ "$NODE_ENV" = "development" ]; then
  echo "Running in development mode"
  npm run dev
else
  echo "Running in production mode"
  npm run build
fi
