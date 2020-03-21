#!/bin/bash
# for i in ../archive/*.mp4;
# do name=`echo "$i" | cut -d'.' -f1`
#     echo "$name"
#     ffmpeg -i "$i" -vcodec h264 -acodec mp3 "$i"
# done
gm mogrify -compress JPEG2000 -quality 80 -format jpg ../archive/*.jpeg
gm mogrify -compress JPEG2000 -quality 80 -format jpg ../archive/*.webp
gm mogrify -compress JPEG2000 -quality 80 -format jpg ../archive/*.png
rm ../archive/*.jpeg
rm ../archive/*.webp
rm ../archive/*.png