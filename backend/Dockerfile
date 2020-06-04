# build environment
FROM node:lts-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

ENV DB_HOST="brainwriter-db"
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
RUN npm install --silent
COPY . /app
CMD ["npm", "run-script", "babel-node"]
