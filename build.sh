docker build -t kjarosz/webledgerfrontend .
docker run \
  --name kjarosz/webledgerfrontend \
  -p 4200:4200 \
  --rm \
  -d \
  kjarosz/webledgerfrontend
