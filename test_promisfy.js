const fs = require('fs');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
readdir('./').then((files) => {
  console.log(files);
}).catch((err) => {
  console.log('*** ERROR', err);
});

const main = async () => {
  try {
    const files = await readdir('./');
    const db = {};
    /*
    files.forEach((file) => {
      const model = sequelize['import'](path.join(__dirname, file));
      db[model.name] = model;
    });

    Object.keys(db).forEach((modelName) => {
      if (db[modelName].associate) {
        db[modelName].associate(db);
      }
    });
    */
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
};

main();
