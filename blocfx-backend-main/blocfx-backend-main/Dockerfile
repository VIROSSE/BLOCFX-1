FROM node:16

LABEL version=1.0
LABEL maintainer="SoftwareShip"

COPY . ./app

WORKDIR /app

RUN yarn global add @nestjs/cli && yarn install
RUN yarn build

RUN useradd -ms /bin/bash sysops && \
  chown -R sysops:sysops /app

USER sysops

EXPOSE 3000

CMD ["node", "dist/src/main.js"]
