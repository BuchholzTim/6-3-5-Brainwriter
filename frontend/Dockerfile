# build environment
FROM node:14-alpine as brainwriter-frontend-build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

ENV REACT_APP_BACKEND_IP="http://localhost:"
ENV REACT_APP_BACKEND_PORT="3001"
ENV REACT_APP_PRODUCTION_BUILD=true
ENV REACT_APP_SAFARI=false

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn install
COPY . /app
RUN yarn build

# production environment
FROM nginx:1.19.6-alpine
COPY --from=brainwriter-frontend-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
