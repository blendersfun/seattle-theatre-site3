#!/bin/bash

echo 'Starting DB Initialization Script'

shopt -s expand_aliases # Allow aliases in non-interactive script.

alias mysql_cmd='mysql \
    --user=seattle-theatre \
    --password=seattle-theatre \
    --database=seattle-theatre'

TABLE_COUNT=`mysql_cmd --execute='show tables; select found_rows();'`

if [[ $TABLE_COUNT == *0* ]]
then
    echo 'No tables found. Running DB init scripts'

    mysql_cmd < /home/mysql/setup/create_tables.sql
    mysql_cmd < /home/mysql/setup/snapshot.sql
else
    echo 'Tables already exist. Skipping DB init scripts'
fi
