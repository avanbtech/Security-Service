/* eslint-disable max-len */
import getPyOptions from './pyoptions';

// @param type is the type of export format, pdf for single request pdf export, csv for db data export to csv
// @param reqID is the request accessID for which a PDF copy is to be exported, doesn't matter if type is csv
function exportDataTo(reqID, type) {

  let scriptName = '';

  if(type === 'csv') {
    scriptName = 'csvwriter.py';
  } else {
    scriptName = 'pdfwriter.py';
  }

  const pyOpts = getPyOptions();

  const pythonExec = pyOpts.pythonPath;
  const scriptPath = pyOpts.scriptPath + scriptName;

  const spawn = require('child_process').spawn;
  const scriptExec = spawn(pythonExec, [scriptPath, reqID]);

  scriptExec.on('close', (code) => {
    console.log("Process quit with code : " + code);
  });

  scriptExec.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });
}

export default (exportDataTo);
