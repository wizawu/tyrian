FROM gradle:6.9.3-jdk11-focal as intermedia
FROM node:16.18.1-buster-slim

COPY --from=intermedia /opt/gradle /opt/gradle
COPY --from=intermedia /opt/java/openjdk /opt/openjdk
RUN npm install -g tyrian@latest && npm cache clean --force
ENV PATH=$PATH:/opt/gradle/bin:/opt/openjdk/bin
