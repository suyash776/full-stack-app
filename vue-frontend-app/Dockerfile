FROM node:16

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install --production

# COPY . .

# EXPOSE 3000
# CMD ["npm", "run", "dev"]
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install --production

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]