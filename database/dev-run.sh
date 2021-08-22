#!/bin/bash

docker run -it \
    -p 27017:27017 \
    -v $(pwd)/mongodata:/data/db \
    --name delta_green_database \
    -d mongo