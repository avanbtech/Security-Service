import PythonShell from 'python-shell';

function saveToPDF(req) {
  // Grab all the data from the form in a string
  const jsonData = JSON.stringify(req.body);

  // CODE TO RUN A PYTHON SCRIPT
  // Setup options for script
  const options = {
    mode: 'text',

    // Path to python3 on the machine
    pythonPath: '/Library/Frameworks/Python.framework/Versions/3.6/Resources/Python.app/Contents/MacOS/Python',
    pythonOptions: ['-u'],

    // Path to the scripts
    scriptPath: '/Users/sankait/Desktop',

    // Pass the data in a comma-delimited array here (in python it is 1 indexed array)
    args: [jsonData],
  };

  // @Args: script to run, options (set above), callback function
  PythonShell.run('1.py', options, function (err, res) {
    if (err) throw err;
    // Print statements in the script are returned as an array of strings (i.e res)
    console.log("FIN");
  });
}

export default saveToPDF;
