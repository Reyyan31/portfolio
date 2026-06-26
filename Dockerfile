# --- Stage 1: Build Environment ---
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests first (better layer caching)
COPY package*.json ./

# Clean install — exact versions from lockfile
RUN npm ci

# Copy full source
COPY . .

# Build Next.js in standalone mode
RUN npm run build

# --- Stage 2: Runtime Environment ---
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Only copy what's needed to run — nothing else
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]