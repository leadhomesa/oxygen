#!/bin/bash

# Init
set -euxo pipefail

docker run -v $(pwd):/app -w /app node:alpine npm run ci
