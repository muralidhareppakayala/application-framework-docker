FROM node:10.16.3-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4200 4200
# install packages
RUN npm ci
RUN npm install -g @angular/cli

# start app
CMD ng serve --host 0.0.0.0