#!/usr/bin/env bash

npm run build &&
rsync -rvz build/ badgerweb:/var/www/kanec.uk/htdocs/ &&
rsync -rvz static_assets badgerweb:/var/www/kanec.uk/htdocs/
