FROM node:12.13.1

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.6.0/wait /wait

RUN chmod +x /wait

WORKDIR /var/app/current/api

EXPOSE 3051

# Start the application
CMD /wait && npm install && npm run start
