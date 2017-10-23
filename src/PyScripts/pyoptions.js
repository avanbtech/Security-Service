
function getPyOptions(reqID) {
  // Setup options for script
  return {
    mode: 'text',

    // TODO: REPLACE THIS PATH WITH ACTUAL SERVER'S PYTHON 3.XX PATH
    // Path to python3 on the machine (USE which python3 TO FIND OUT THAT PATH)
    pythonPath: '/c/Users/Aria/AppData/Local/Programs/Python/Python36-32/python',
    pythonOptions: ['-u'],

    // TODO: REPLACE THIS PATH WITH SCRIPT FOLDER IN PROJECT DIRECTORY
    // Path to the scripts
    scriptPath: 'D:\Desktop\University\Fall 2017\CMPT 373\373project\CMPT373-Gamma\src\PyScripts',


    // Pass the data in a comma-delimited array here (in python it is 1 indexed array)
    args: [reqID],
  };
}

export default getPyOptions;
