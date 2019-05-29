FROM python:3.6-alpine

RUN apk add --no-cache bash postgresql postgresql-client postgresql-dev gcc python3-dev musl-dev openssl-dev libffi-dev

ENV PYTHONUNBUFFERED 1
ENV PROJECT_HOME=/code

RUN mkdir $PROJECT_HOME
WORKDIR $PROJECT_HOME

COPY . $PROJECT_HOME
RUN pip install -r requirements.txt

EXPOSE 8000

ADD ./docker-entrypoint.sh /
RUN chmod 755 /docker-entrypoint.sh
CMD ["/docker-entrypoint.sh"]