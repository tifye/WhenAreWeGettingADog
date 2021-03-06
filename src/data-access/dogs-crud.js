const { db } = require("./db-connection");

const getAllDogs = async () => {
  return new Promise((resolve, reject) => {
    const query = `
    SELECT * FROM Dogs
    `;
    db.all(query, (error, rows) => {
      if (error) reject(error);
      resolve(rows);
    });
  });
};

const createDog = async (dog) => {
  return new Promise((resolve, reject) => {
    const query = `
    INSERT INTO Dogs (breed, breedInfoLink, imageLink, description)
    VALUES (?, ?, ?, ?);
    `;
    const values = [dog.breed, dog.breedInfoLink, dog.imageLink, dog.description];
    db.run(query, values, (error) => {
      if (error) reject(error);
      resolve();
    });
  });
};

const removeDog = async (dogId) => {
  return new Promise((resolve, reject) => {
    const query = `
    DELETE FROM Dogs
    WHERE dogId = ?
    `;
    const values = [dogId];
    db.run(query, values, (error) => {
      if (error) reject(error);
      resolve();
    });
  });
};

module.exports = {
  createDog,
  getAllDogs,
  removeDog,
};
