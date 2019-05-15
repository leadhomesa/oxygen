#!/bin/bash

# Init
set -euxo pipefail

docker run -v $(pwd):/app node:alpine npm install && npm run lint && npx semantic-release
