FROM nginx:stable-alpine
COPY ./app/* /usr/share/nginx/html
COPY ./conf/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
