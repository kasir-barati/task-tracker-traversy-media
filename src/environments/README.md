# Some good notes I learned from doc

- We have multiple env, production, staging, development, ...
- All places we import `environment.ts`.
- In `angular.json` we configure to replace the appropriate values in the `environment.ts` with `fileReplacements` config. We do that by `--configuration` flag in `ng`. e.x.

  ```cmd
  ng build --configuration production
  ```

  That `production` comes from `angular.json`.

- The other part that took my 2 hour valuable time was using .env in my project, Eventually I ends up to this [gist](https://gist.github.com/kasir-barati/f3168e18c1dd64e24a7308c4764dc8eb). BTW I guess I have no more option. If you know a better solution please share it with me.
