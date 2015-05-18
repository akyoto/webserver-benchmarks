#Command
```bash
ab -kc 10 -t 30 http://localhost:5000/
```
Install via `sudo apt-get install apache2-utils` on Ubuntu.

#Note
The `raw` version doesn't contain routing. This is intentional. You can modify it to include routing if you want.

#Versions
Software      | Version
------------- | -------------
io.js:        | 2.0.2
node.js:      | 0.12.3
express:      | 4.12.4
restify:      | 3.0.2
V8:           | 4.2.77.20
Linux:        | 3.19.0-17-generic (x86_64)

#Grouped by engine

##io.js
Framework     | Requests
------------- | -------------
Raw:          | 17288 req/s
Express:      | 12124 req/s
Restify:      | 11282 req/s

##node.js
Framework     | Requests
------------- | -------------
Raw:          | 14926 req/s
Express:      | 11006 req/s
Restify:      |  9298 req/s

#Grouped by framework

##Raw
Engine        | Requests
------------- | -------------
io.js:        | 17288 req/s
node.js:      | 14926 req/s

##Express
Engine        | Requests
------------- | -------------
io.js:        | 12124 req/s
node.js:      | 11006 req/s

##Restify
Engine        | Requests
------------- | -------------
io.js:        | 11282 req/s
node.js:      |  9298 req/s