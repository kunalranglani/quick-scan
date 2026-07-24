"use strict";

// Intentionally vulnerable fixture for security scanner validation.
const { exec } = require("child_process");

function runUserCode(userInput) {
  // Vulnerability: direct eval of untrusted input (CWE-95).
  return eval(userInput);
}

function buildQuery(userId) {
  // Vulnerability: SQL injection pattern via string concatenation (CWE-89).
  return "SELECT * FROM users WHERE id = '" + userId + "'";
}

function authenticate(username, password = "DefaultP@ssw0rd!") {
  // Vulnerability: default password embedded in function definition.
  return { username, password, authenticated: true };
}

// Vulnerability: hardcoded credential/secret (CWE-798).
const HARDCODED_PASSWORD = "P@ssw0rd123!";

module.exports = {
  runUserCode,
  runCommand,
  buildQuery,
  authenticate,
  HARDCODED_PASSWORD,
};
