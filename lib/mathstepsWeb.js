// To build a version of mathsteps that will run in a browser
// do the following:
// 1) sudo npm install -g browserify
// 2) Place this file into the main directory of the
//  mathsteps project.
// 3) browserify mathstepsWeb.js > mathsteps.js

(function() {
  const mathsteps = require('mathsteps');
  
  const solveEquation = function(equationString) {
    const result = {};
    try {
      const steps = mathsteps.solveEquation(equationString, false);
      if (steps.length != 0) {
        result.steps = steps;
      }
      else {
        result.error = "Unable to solve equation";
      }
    }
    catch (e) {
      result.error = e.message;
    }
    return result;
  }
  
  var MS = {};
  window.MS = MS;
  MS.solveEquation = solveEquation;
})();
