#!/usr/bin/env bash

docker build -t gis-app .
docker run -p 3000:3000 --init gis-app
