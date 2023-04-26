convert pictures to video
```bash
ffmpeg -framerate 60 -i %06d.png -c:v libx264 -r 30 output.mp4
```