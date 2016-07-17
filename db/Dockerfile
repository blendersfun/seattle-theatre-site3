FROM mysql:5

ENV MYSQL_ROOT_PASSWORD=password1 \
    MYSQL_DATABASE=seattle-theatre \
    MYSQL_USER=seattle-theatre \
    MYSQL_PASSWORD=seattle-theatre

RUN mkdir -p /home/mysql
COPY docker-entrypoint-initdb.d /docker-entrypoint-initdb.d
RUN chmod -R +x /docker-entrypoint-initdb.d
COPY setup /home/mysql/setup
