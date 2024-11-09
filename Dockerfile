FROM nginx:stable-alpine
COPY ./app/* /usr/share/nginx/html
COPY ./conf/nginx/* /etc/nginx/conf.d/
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
