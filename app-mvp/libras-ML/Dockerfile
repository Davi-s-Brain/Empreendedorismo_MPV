FROM node:14-bullseye-slim

WORKDIR /app

# Install build dependencies for mozjpeg and other native modules
# python3, make, g++ are usually needed for node-gyp
# autoconf, automake, libtool, nasm are needed for mozjpeg
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    autoconf \
    automake \
    libtool \
    nasm \
    libpng-dev \
    libvips-dev \
    && rm -rf /var/lib/apt/lists/*

COPY package.json ./
# Copy yarn.lock if it exists, otherwise ignore error
COPY yarn.lock* ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 8000

CMD ["npm", "run", "develop", "--", "-H", "0.0.0.0"]
