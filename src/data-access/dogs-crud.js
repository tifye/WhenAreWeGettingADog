const { db } = require("./db-connection");

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

module.exports = {
  createDog,
};
