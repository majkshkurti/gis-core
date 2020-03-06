docker build --rm -t gis-app .
docker run -p 3000:3000 --pid=host gis-app
