# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
COPY prisma ./prisma/

RUN yarn install

RUN npx prisma generate
COPY . .

RUN yarn build

# Stage 2: Production
FROM node:20-alpine AS runner

WORKDIR /app


COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma ./prisma


EXPOSE 3000

# Command to run the application
CMD ["sh", "-c", "yarn db:deploy && yarn start"]