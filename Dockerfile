# docker build -t eu.gcr.io/dev-production/is-webhooks-endpoint .
# docker run  -p 3000:3000 --rm --env-file=.env  eu.gcr.io/dev-production/is-webhooks-endpoint:latest
FROM node:10 AS builder

WORKDIR /app

COPY . /app
RUN yarn --pure-lockfile

FROM node:10-alpine
WORKDIR /app
COPY --from=builder /app /app
COPY . /app

EXPOSE 8080

CMD ["yarn", "start"]
