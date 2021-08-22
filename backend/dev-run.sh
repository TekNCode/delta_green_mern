#!/bin/bash

docker run -it --rm\
    -p 3000:3000 \
    -v $(pwd)/app:/usr/src/app \
    --name delta_green_backend \
    delta_green_backend \
    /bin/bash