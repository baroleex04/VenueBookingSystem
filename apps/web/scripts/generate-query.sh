#!/bin/bash

# Define username and password for basic authentication
username="users"
password="users"

# Encode username and password for authorization header
credentials=$(echo -n "$username:$password" | base64)
authorization_header="Authorization: Basic $credentials"

# Send GET request with basic authentication header and save response to fessior.yaml
curl -X GET \
  -H "$authorization_header" \
  http://localhost:3001/swagger/yaml > src/booking.yaml

echo "Response saved to booking.yaml"

exit 0