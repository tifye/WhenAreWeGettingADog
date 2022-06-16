const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('database.db');

const setupQuery = async () => {
  try {
    await db.run(`
    CREATE TABLE IF NOT EXISTS Dogs (
      dogId INTEGER PRIMARY KEY AUTOINCREMENT,
      breed TEXT NULL,
      breedInfoLink TEXT NULL,
      imageLink TEXT NULL,
      description TEXT NULL
    )
    `)
  } catch (e) {
    console.error(e);
    process.exit();
  }

  console.log('Setup query done.');
};

module.exports = {
  db,
  setupQuery,
};