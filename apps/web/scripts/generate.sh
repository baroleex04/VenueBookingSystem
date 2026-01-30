#!/bin/bash

# Delete booking.yaml file if it exists
if [ -f booking.yaml ]; then
  rm src/booking.yaml
fi

# Delete the generated folder and its contents if it exists
if [ -d src/generated ]; then
  rm -rf src/generated
fi

# Your main script logic goes here
./scripts/generate-query.sh

# Generate code from the booking.yaml file
yarn codegen