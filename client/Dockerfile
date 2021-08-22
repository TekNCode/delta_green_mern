# Name the node stage "builder"
FROM node:10.16 AS builder

ENV PORT=4000

# Exports
EXPOSE 4000

WORKDIR /usr/src/app

COPY client_web/ /usr/src/app/

RUN yarn install && yarn build

RUN npm run

# RUN npm run build

# # nginx state for serving content
# FROM nginx:alpine

# # Set working directory to nginx asset directory
# WORKDIR /usr/share/nginx/html

# # Remove default nginx static assets
# RUN rm -rf ./*

# # Copy static assets from builder stage
# COPY --from=builder /app/build .
# # Containers run nginx with global directives and daemon off
# ENTRYPOINT ["nginx", "-g", "daemon off;"]

