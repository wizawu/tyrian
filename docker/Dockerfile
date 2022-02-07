FROM gradle:6.9.2-jdk11 as intermedia
FROM ghcr.io/graalvm/nodejs:java11-21.3.0

COPY --from=intermedia /opt/gradle /opt/gradle
RUN npm install -g tyrian@latest && npm cache clean --force
ENV PATH=$PATH:/opt/gradle/bin:/usr/lib64/graalvm/graalvm21-ce-java11/languages/nodejs/bin
