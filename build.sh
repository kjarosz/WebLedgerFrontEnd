docker build -t kjarosz/webledgerfrontend .
docker run --name webledgerfrontend --network=webledger -p 4200:4200 --rm -d kjarosz/webledgerfrontend
