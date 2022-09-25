FROM nginx:stable-alpine

COPY /nginx.conf /etc/nginx/nginx.conf

RUN chgrp -R root /var/cache/nginx /var/run /var/log/nginx && \
    chmod -R 770 /var/cache/nginx /var/run /var/log/nginx

COPY /build /usr/share/nginx/html

EXPOSE 8080
USER 101
CMD ["nginx", "-g", "daemon off;"]