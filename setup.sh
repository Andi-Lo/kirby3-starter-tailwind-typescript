#!/bin/bash
# https://gist.github.com/Andi-Lo/7bb70f2de8f8c86dcaec6e3e5fb9f0f1

TARGET_FOLDER='./www/kirby'
OWNER='getkirby'
REPOSITORY='kirby'

mkdir -p $TARGET_FOLDER

echo "Querying Github for latest Kirby version..."
URL=$( curl -sLo /dev/null -w '%{url_effective}' https://github.com/$OWNER/$REPOSITORY/releases/latest )
echo "Found latest kirby version: $VERSION"
VERSION=$( echo $URL | grep -E -o "(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(\.(0|[1-9]\d*))?")

echo "Downloading kirby..."
curl -LO https://github.com/$OWNER/$REPOSITORY/archive/refs/tags/$VERSION.tar.gz
echo "Extrating to $TARGET_FOLDER"
tar -xzf $VERSION.tar.gz -C $TARGET_FOLDER --strip-components=1
echo "Cleaning up... $VERSION.tar.gz"
rm -d -r -f $VERSION.tar.gz
echo "Success"