#!/bin/bash

# Init
set -euxo pipefail

docker build -t oxygen .
docker run -e GH_TOKEN=${GH_TOKEN} -e NPM_TOKEN=${NPM_TOKEN} -e GIT_BRANCH={BUILDKITE_BRANCH} oxygen