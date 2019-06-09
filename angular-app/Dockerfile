FROM nginx:alpine

WORKDIR /usr/share/nginx/html
COPY dist/angular-app/ .
RUN chown -R nginx /usr/share/nginx/html