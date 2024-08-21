## To run the fullstack app as a single stack

```
# go to the front end directory and build the docker image
cd vue-frontend-app
docker build -t vue-frontend-app .

# go to the back end directory and build the docker image
# this should build the postgres db as well
cd express-backend
docker build -t express-backend-api .

# now go back to the root (full-stack-app folder) where the docker-compose.yaml file is and run
docker-compose up


```

