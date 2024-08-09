FROM python:3

WORKDIR /app

COPY . .

RUN pip install -r /app/requirements.txt

EXPOSE 5000

CMD ["python", "-u", "app.py"]
