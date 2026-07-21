"use strict";

// Intentionally vulnerable fixture for security scanner validation.
function runUserCode(userInput) {
  // Vulnerability: direct eval of untrusted input (CWE-95).
  return eval(userInput);
}

module.exports = { runUserCode };
