FROM node:20-alpine3.17 AS base
WORKDIR /app

RUN corepack enable
RUN apk add --no-cache libc6-compat

COPY . .

FROM base as builder
WORKDIR /app

COPY --from=base ./app/package.json ./app/pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

RUN pnpm build

RUN rm -rf node_modules && pnpm recursive exec -- rm -rf ./node_modules ./src
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm fetch

RUN pnpm install --offline --frozen-lockfile --ignore-scripts --prod

FROM node:20-alpine3.17 as runner
WORKDIR /app

RUN apk add --no-cache libc6-compat

ENV NODE_ENV=production

RUN apk add tzdata
ENV TZ Asia/Bangkok

COPY --from=builder ./app/package.json ./
COPY --from=builder ./app/node_modules/ ./node_modules/
COPY --from=builder ./app/dist/ ./dist

CMD ["node", "dist/App.js"]
