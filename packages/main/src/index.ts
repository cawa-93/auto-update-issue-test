import {app} from 'electron';

app
  .whenReady()
  .then(() => import('electron-updater'))
  .then(module => {
    console.log({module});
    app.exit(0);
  })
  .catch(e => {
    console.error('Failed check and install updates:', e);
    app.exit(1);
  });
