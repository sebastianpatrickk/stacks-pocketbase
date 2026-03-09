#!/bin/sh
set -eu

PB_ARGS="serve --http=0.0.0.0:8080"

# Optional encryption key for settings and app secrets.
if [ -n "${PB_ENCRYPTION_KEY:-}" ]; then
  PB_ARGS="$PB_ARGS --encryptionEnv=PB_ENCRYPTION_KEY"
fi

exec /pb/pocketbase $PB_ARGS "$@"
