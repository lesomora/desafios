FROM node:15

WORKDIR /usr/src/app

RUN npm install express --save && npm install mysql --save

RUN mkdir /datadir

COPY index.js .

EXPOSE 3000

CMD ["ln -s /usr/src/app/* /datadir","node","index.js"]