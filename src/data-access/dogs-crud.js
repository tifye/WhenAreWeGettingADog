const { db } = require("./db-connection");

const createDog = async (dog) => {
<<<<<<< HEAD
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
=======
>>>>>>> parent of 7fe98b1 (doglist)
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
<<<<<<< HEAD
  getAllDogs,
  removeDog,
=======
>>>>>>> parent of 7fe98b1 (doglist)
};
