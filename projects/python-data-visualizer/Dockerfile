# Build the Next.js application
FROM node:lts AS builder

WORKDIR /app

COPY frontend ./

RUN npm install

# This sets ENV vars conditionally
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh
RUN /app/entrypoint.sh

RUN npm run build

# Serve the static files with Flask
FROM python:3

WORKDIR /app

COPY backend /app
COPY --from=builder /app/out /app/static

RUN pip install -r /app/requirements.txt

EXPOSE 5000

CMD ["python", "-u", "app.py"]
