#!/bin/bash

docker run -it --rm\
    -p 4000:4000 \
    -v $(pwd)/client_web:/usr/src/app \
    --name delta_green_client_web \
    delta_green_client_web \
    /bin/bash