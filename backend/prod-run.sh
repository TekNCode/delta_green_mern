#!/bin/bash

docker run -it \
    -p 5000:5000 \
    -v $(pwd)/app:/usr/src/app \
    --name delta_green_backend \
    -d delta_green_backend