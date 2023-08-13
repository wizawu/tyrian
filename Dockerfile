FROM adoptopenjdk/openjdk11-openj9:x86_64-ubuntu-jdk-11.0.20_8_openj9-0.40.0 as jdk
FROM gradle:7.6.0-jdk11-jammy as gradle
FROM node:18.13.0-buster-slim

COPY --from=jdk /opt/java/openjdk /opt/openjdk
COPY --from=gradle /opt/gradle /opt/gradle
RUN npm install -g tyrian@latest && npm cache clean --force
ENV PATH=$PATH:/opt/gradle/bin:/opt/openjdk/bin
