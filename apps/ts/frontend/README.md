# Running the app

Run dev server
```shell
$(bazel info workspace)/tools/pnpm install
npm run start
```

It will install all the npm dependencies and then run bazel target `start` with ibazel (hence the watch mode).