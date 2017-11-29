import path from 'path';
import gaze from 'gaze';
import replace from 'replace';
import Promise from 'bluebird';

/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
async function copy({ watch } = {}) {
  const ncp = Promise.promisify(require('ncp'));

  await Promise.all([
    ncp('tools/npm-dependencies/public', 'build/public'),
    ncp('tools/npm-dependencies/content', 'build/content'),
    ncp('package.json', 'build/package.json'),
  ]);

  replace({
    regex: '"start".*',
    replacement: '"start": "node server.js"',
    paths: ['build/package.json'],
    recursive: false,
    silent: false,
  });

  if (watch) {
    const watcher = await new Promise((resolve, reject) => {
      gaze('tools/npm-dependencies/content/**/*.*', (err, val) => err ? reject(err) : resolve(val));
    });
    watcher.on('changed', async (file) => {
      const relPath = file.substr(path.join(__dirname, '../tools/npm-dependencies/content/').length);
      await ncp(`tools/npm-dependencies/content/${relPath}`, `build/content/${relPath}`);
    });
  }
}

export default copy;
