### Build and Run

```
1c install
1c build main.ts
1c run main.js
```

### Test

```
# curl --data '{ "name": "1c" }' http://127.0.0.1:4567/
{"id":"3ba27b9c-25f0-4e9c-92ba-d384e3b80583"}
# curl http://127.0.0.1:4567/3ba27b9c-25f0-4e9c-92ba-d384e3b80583
{"name": "1c"}
```
