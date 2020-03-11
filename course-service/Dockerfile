# BUILD########
FROM adoptopenjdk:8-jdk-hotspot AS build
ENV APP_HOME=/usr/app/
WORKDIR $APP_HOME
COPY build.gradle settings.gradle gradlew $APP_HOME
COPY gradle $APP_HOME/gradle
RUN apt-get update
RUN apt-get install -y dos2unix
RUN dos2unix gradlew
RUN ./gradlew clean build || return 0 
COPY . .
RUN dos2unix gradlew
RUN ./gradlew clean build


# RUN##############
FROM openjdk:8-jdk-alpine
ENV ARTIFACT_NAME=course-service-1.0.0.jar
ENV APP_HOME=/usr/app/
WORKDIR $APP_HOME

VOLUME /tmp

# Add Spring Boot app.jar to Container
#ADD "$APP_HOME/build/libs/$ARTIFACT_NAME" app.jar
COPY --from=build $APP_HOME/build/libs/$ARTIFACT_NAME .

ENV JAVA_OPTS=""

# Fire up our Spring Boot app by default
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar $ARTIFACT_NAME" ]
#CMD ["java","-jar",$APP_HOME/build/libs/$ARTIFACT_NAME]
