FROM node:20

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma
RUN npm install
RUN npx prisma generate

CMD ["npm", "run", "dev"]
