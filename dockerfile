# Stage build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage production
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy dependencies (prod)
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
# Copy build output & public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY next.config.ts ./next.config.ts 

EXPOSE 3000

# Jalankan Next.js
CMD ["npm", "run", "start"]
