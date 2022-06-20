# Task Tracker Traversy Media

- [Brad repo](https://github.com/bradtraversy/angular-crash-2021)
- [Brad YouTube Angular crash course which I watched](https://www.youtube.com/watch?v=3dHNOWTI7H8)

## Run in dev env:

- You can always add more data to your mock backend with editing `db.json` directly

1. `pnpm i`
2. `pnpm start:mock-server`
3. `pnpm start`

## Dockerized app

- A multi-stage Docker build
  - Smaller container
  - Automated works
- Here is the steps you should take if you wanted to create image by hand
  1. `docker build . -t task-tracker:<version>`
- Here is the steps if you wanna create a container from it:
  1. Update the network section in the `docker-compose.yml` to put it in the right network
  2. `docker-compose up -d`
- Here is the steps to start app in dev env:
  1. `pnpm i`
  2. `pnpm start:dev`
  - To stop app in dev env issue this command in your terminal: `pnpm stop:dev`

### Worthy details about dockerized app for prod env:

- We serve our Angular app with Nginx that's why I mapped port `4200` to port `80`.
- We assume that on the server our app will connects to a real backend

### Golden notes about dockerized app for dev env:

- First I just tried to stick to the `localhost` in Angular app and our fake backend. But it did not pan out. Why? TBH I'm not quite sure but maybe [this stackoverflow Q&A helps](https://stackoverflow.com/a/26553296/8784518). Please feel free to tell me if you know the answer.
- The same problem happened with our `mock-server` and I changed the `localhost` to `0.0.0.0`
- Do not worry about this section in `dev.docker-compose.yml` because AFAIK - based on experience not documentation - this command will be executed in the `WORKDIR`/`working_dir`:
  <pre>
  command:
    sh -c '(npm run start:mock-server &) && npm start'
  </pre>
