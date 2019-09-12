FROM node

LABEL version="1.0.0"
LABEL author="Jayakumar Jayaraman"
LABEL desc="React dockerisation"

WORKDIR /app
ENV PATH="/app/node_modules/.bin:$PATH"
COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts

CMD ["npm", "start"]