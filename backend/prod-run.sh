#!/bin/bash

docker run -it \
    -p 3000:3000 \
    -v $(pwd)/app:/usr/src/app \
    --name delta_green_backend \
    -d delta_green_backend