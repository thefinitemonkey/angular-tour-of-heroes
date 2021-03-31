# Stage 0 to build and compile the frontend
FROM node:10-alpine as builder

# install and cacah app dependencies
WORKDIR /angular-frontend

COPY package*.json /angular-frontend/

RUN npm install

COPY ./ /angular-frontend/

ARG configuration=production

RUN if [ "$configuration" = "test" ]; then npm install puppeteer; fi

RUN npm run build -- --output-path=./dist/out --configuration $configuration


# Stage 1 builds only compiled app with Nginx, ready for production
FROM nginx:latest

COPY --from=builder /angular-frontend/dist/out/ /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf


#FROM nginx:alpine
#LABEL author="Doug Brown"
#COPY ./dist/angular-tour-of-heroes /usr/share/nginx/html
#RUN npm install --only=prod
#EXPOSE 80 443
#ENTRYPOINT ["nginx", "-g", "daemon off;"]