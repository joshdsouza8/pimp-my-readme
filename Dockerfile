FROM node:14.17.6
WORKDIR /app
COPY package.json /app
RUN npm install
ENV PORT 3000
COPY . /app
CMD ["npm", "start"]
