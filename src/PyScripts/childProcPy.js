/* eslint-disable max-len */
import getPyOptions from './pyoptions';
import fs from 'fs';

// @param reqID is the request accessID for which a PDF copy is to be exported
function exportReqToPDF(reqID) {

  if (!reqID) {
    return null;
  }

  let scriptName = 'pdfwriter.py';

  const pyOpts = getPyOptions();

  const pythonExec = pyOpts.pythonPath;
  const scriptPath = pyOpts.scriptPath + scriptName;

  const spawn = require('child_process').spawn;
  const scriptExec = spawn(pythonExec, [scriptPath, reqID]);

  scriptExec.on('close', (code) => {
    console.log("PDF Export Done. Process quit with code : " + code);
  });

  scriptExec.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });
}

function exportDBToCSV() {

  let scriptName = 'csvwriter.py';

  const pyOpts = getPyOptions();

  const pythonExec = pyOpts.pythonPath;
  const scriptPath = pyOpts.scriptPath + scriptName;

  const spawn = require('child_process').spawn;
  const scriptExec = spawn(pythonExec, [scriptPath]);

  scriptExec.on('close', (code) => {
    console.log("CSV export done. Process quit with code : " + code);
  });

  scriptExec.stderr.on('data', (data) => {
    console.log(`CSV Module stderr: ${data}`);
  });
}

function locateFilePath(reqID, isCSV) {

  let filePath = '';
  if (isCSV) {
    let files = fs.readdirSync('ExportedCSVs/', { encoding : 'utf8' });

    for (let x = 0; x < files.length; x++) {
      console.log("LOOP2");
      if (files[x] === 'dataexport.csv') {
        return `ExportedCSVs/${files[x]}`;
      }
    }

    return null;

  } else {
    let files = fs.readdirSync('ExportedPDFs/', { encoding : 'utf8'});

    for (let x = 0; x < files.length ; x++) {
      if (files[x] === `${reqID}_destination.pdf`) {
        filePath = `ExportedPDFs/${files[x]}`;
        return filePath;
      }
    }

    return null;
  }
}

module.exports = {
  exportReqToPDF,
  exportDBToCSV,
  locateFilePath,
};
