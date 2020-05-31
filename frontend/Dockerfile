# build environment
FROM node:lts-alpine as brainwriter-frontend-build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install --silent
COPY . /app
RUN npm run-script build



# production environment
FROM nginx:stable-alpine
COPY --from=brainwriter-frontend-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
