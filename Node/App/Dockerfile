FROM node:15

WORKDIR /usr/src/app

RUN npm install express --save && npm install mysql --save

RUN mkdir /datadir && ln -s /usr/src/app/* /datadir

COPY index.js .

EXPOSE 3000

CMD ["node","index.js"]