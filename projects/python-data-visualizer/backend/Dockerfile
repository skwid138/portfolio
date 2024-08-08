FROM python:3

WORKDIR /app

ADD . /app

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Make sure the script file is executable - this may be needed on GCP as I manually changed the file locally
# RUN chmod +x /app/app.py

EXPOSE 5000

CMD ["python", "-u", "app.py"]
