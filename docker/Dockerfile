FROM ghcr.io/graalvm/nodejs:java11-21.3.0

RUN npm install -g tyrian@latest && npm cache clean --force
ENV PATH=$PATH:/usr/lib64/graalvm/graalvm21-ce-java11/languages/nodejs/bin
