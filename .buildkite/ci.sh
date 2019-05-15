#!/bin/bash

# Init
set -euxo pipefail

docker build --build-arg GH_TOKEN=${GH_TOKEN} NPM_TOKEN=${NPM_TOKEN}.