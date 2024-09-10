FROM node

WORKDIR /application

COPY package*.json ./

ENV DATABASE_URL=postgresql://postgres.xannracpgbygwgtfnqnb:fxwkQpBxf4Ouyzxc@aws-0-eu-central-1.pooler.supabase.com:6543/postgres

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]