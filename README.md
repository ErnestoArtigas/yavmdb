# yavmdb

## Description
VueJS project of 2nd year of CS M.Sc.

## Project setup

### Access through the hosted version
https://yavmdb.ernart.com

For hosting and testing in your computer, you need the .env file to paste in the root of the project.

### Launching from the Dockerfile
```
docker build . -t yavmdb
docker run --name=yavmdb -d -p 8080:8080 yavmdb
```

### Compiling from sources
```
npm install

# Compiles and Hot-reloads for development
npm run serve

Compiles and minifies for production
npm run build
```

### Launching the linter
```
npm run lint
```