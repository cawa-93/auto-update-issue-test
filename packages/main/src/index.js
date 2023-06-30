import {app} from 'electron';

import * as lodash from 'lodash';

app
  .whenReady()
  .then(async () => {
    console.log('resolve', require.resolve('lodash'));
    console.log('cjs', require('lodash'));
    console.log('lodash', lodash);
    console.log('mjs', await import('lodash'));
    app.exit(0);
  })
  .catch(e => {
    console.error(e);
    app.exit(1);
  });
