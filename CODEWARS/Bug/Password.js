/** @format */

function validate(username, password) {
  var database = new Database();

  // Sanitize the input
  username = sanitizeInput(username);
  password = sanitizeInput(password);

  return database.login(username, password);
}
