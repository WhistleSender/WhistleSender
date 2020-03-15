#!/bin/bash
gm mogrify -compress JPEG2000 -quality 80 -format jpg ../archive/*.jpeg
gm mogrify -compress JPEG2000 -quality 80 -format jpg ../archive/*.webp
gm mogrify -compress JPEG2000 -quality 80 -format jpg ../archive/*.png
rm ../archive/*.jpeg
rm ../archive/*.webp
rm ../archive/*.png