#!/bin/bash

# Init
set -euxo pipefail

# Installs
npm install

# Scripts
npm run lint

# Deploy
npx semantic-release