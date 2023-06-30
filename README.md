Steps to reproduce:
1. Clone this repo
2. install all dependencies `npm ci`
3. Run `npm run compile` to bundle code by vite and compile app installer by `electron-builder`.
4. Run compiled installer and install app.
5. Run installed app from cli. You should see error `ERR_MODULE_NOT_FOUND`
