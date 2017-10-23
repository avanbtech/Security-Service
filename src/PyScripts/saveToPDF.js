import PythonShell from 'python-shell';

function saveToPDF(reqID) {

  // CODE TO RUN A PYTHON SCRIPT
  // Setup options for script
  const options = {
    mode: 'text',

    // TODO: REPLACE THIS PATH WITH ACTUAL SERVER'S PYTHON 3.XX PATH
    // Path to python3 on the machine (USE which python3 TO FIND OUT THAT PATH)
    pythonPath: '/Library/Frameworks/Python.framework/Versions/3.6/bin/python3',
    pythonOptions: ['-u'],

    // TODO: REPLACE THIS PATH WITH SCRIPT FOLDER IN PROJECT DIRECTORY
    // Path to the scripts
    scriptPath: '/Users/sankait/Projects/CMPT373-Gamma/src/PyScripts',

    // Pass the data in a comma-delimited array here (in python it is 1 indexed array)
    args: [reqID],
  };

  // @Args: script to run, options (set above), callback function
  PythonShell.run('pdfwriter.py', options, function (err, res) {
    if (err) {
      // TODO: ERRORS SUPRESSED ON PURPOSE
       console.log(err);
    } else {
      // Print statements in the script are returned as an array of strings (i.e res)
      console.log(res);
    }

  });
}

export default saveToPDF;
