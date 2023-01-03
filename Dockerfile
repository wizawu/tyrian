FROM azul/zulu-openjdk:11.0.17 as jdk
FROM gradle:7.6.0-jdk11-jammy as gradle
FROM node:16.18.1-buster-slim

COPY --from=jdk /usr/lib/jvm/zulu11-ca-amd64 /opt/openjdk
COPY --from=gradle /opt/gradle /opt/gradle
RUN npm install -g tyrian@latest && npm cache clean --force
ENV PATH=$PATH:/opt/gradle/bin:/opt/openjdk/bin
