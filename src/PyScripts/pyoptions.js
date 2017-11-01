
function getPyOptions(reqID) {
  // Setup options for script
  return {
    mode: 'text',

    // TODO: REPLACE THIS PATH WITH ACTUAL SERVER'S PYTHON 3.XX PATH
    // Path to python3 on the machine (USE which python3 TO FIND OUT THAT PATH)
    pythonPath: '/usr/bin/python3',
    pythonOptions: ['-u'],

    // TODO: REPLACE THIS PATH WITH SCRIPT FOLDER IN PROJECT DIRECTORY
    // Path to the scripts
    scriptPath: '/home/cmpt433/Desktop/cmpt373/src/PyScripts',


    // Pass the data in a comma-delimited array here (in python it is 1 indexed array)
    args: [reqID],
  };
}

export default getPyOptions;
