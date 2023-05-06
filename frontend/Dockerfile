# Build step #1: build the React front end
FROM node:lts-alpine as build-step
WORKDIR /app
COPY package.json /app
COPY . /app
RUN npm install
RUN npm run build
EXPOSE 5000 
CMD ["npm", "start"]

# Build step #2: build an Caddy container
FROM caddy:alpine
EXPOSE 80
EXPOSE 443
COPY --from=build-step /app/build /usr/share/caddy