# yavmdb

## Description
VueJS project of 2nd year of CS M.Sc.

## Rapport
The rapport is in the rapport.pdf file in the root of the project.

## Project setup

### File to create

.env
```
VUE_APP_AUTH_KEY_V3 = 33da563807ef7bb066ebb41b281c9a3e
```

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