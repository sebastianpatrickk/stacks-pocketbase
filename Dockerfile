FROM alpine:3.21

ARG PB_VERSION=0.36.6

RUN apk add --no-cache unzip ca-certificates

# Download and unzip PocketBase Linux binary.
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/ \
    && rm /tmp/pb.zip \
    && chmod +x /pb/pocketbase

# Include local migrations if present.
COPY ./pb_migrations /pb/pb_migrations

COPY ./docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

WORKDIR /pb

EXPOSE 8080

# Persistent PocketBase data directory (must be mounted in Dockploy).
VOLUME ["/pb/pb_data"]

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
