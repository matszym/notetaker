FROM node:argon

RUN useradd --user-group --create-home --shell /bin/false nodejs
RUN mkdir -p /home/nodejs/app

ENV HOME=/home/nodejs
ENV NODE_ENV=development

RUN chown -R nodejs:nodejs /home/nodejs/app
USER nodejs

RUN npm config set save=true
RUN npm config set save-exact=true

WORKDIR /home/nodejs/app