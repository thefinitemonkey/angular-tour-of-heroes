FROM nginx:alpine
LABEL author="Doug Brown"
COPY ./dist/angular-tour-of-heroes /usr/share/nginx/html
EXPOSE 80 443
ENTRYPOINT ["nginx", "-g", "daemon off;"]