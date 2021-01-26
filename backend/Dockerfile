# build environment
FROM node:14-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

ENV DB_HOST="brainwriter-database"
ENV DB_NAME="brainwriter"
ENV DB_USERNAME="brainwriter"
ENV DB_PASSWORD="brainwriter"
ENV DB_DIALECT="postgres"
ENV DB_PORT="5432"

ENV SERVER_PORT="3001"
ENV CORS_ENABLE="true"
ENV CORS_USE_WHITELIST="false"
ENV CORS_WHITELIST=""

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn install
COPY . /app
CMD ["yarn", "babel-node"]
