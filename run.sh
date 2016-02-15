#!/bin/bash
SERVERS=(Node Koa Aero Express Restify Koala Hapi)
CONCURRENCY=10

for port in {5000..5006}
do
	echo -e "\e[33m${SERVERS[$port - 5000]}:\e[0m"
	ab -kc $CONCURRENCY -t 2 -q http://localhost:$port/ | grep "Requests per second" | tr -s ' ' | cut -d ' ' -f 4
	ab -kc $CONCURRENCY -t 2 -q http://localhost:$port/test | grep "Requests per second" | tr -s ' ' | cut -d ' ' -f 4
done