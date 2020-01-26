const fs = require('fs');

const check = (file) => {
  const promise = new Promise((resolve, reject) => {
    fs.stat(file, (err, status) => {
      if (err) {
        reject(err);
      } else {
        resolve(`${file} updated at ${status.mtime}`);
      }
    });
  });
  return promise;
};

const main = async () => {
  const dir = process.argv[2];
  console.log(dir);
  return new Promise((resolve, reject) => {
    fs.readdir(dir, function(err, files){
      if (err) {
        console.log('*** ERROR [readdir]:', err.message);
        reject(err);
      } else {
        console.log('>>> READ DIR OK');
        const promises = files.map((file) => {
          console.log(' ', `${dir}/${file}`);
          return check(`${dir}/${file}`);
        });
        console.log('>>> CHECK PROMISE ALL');
        Promise.all(promises).then((message) => {
          console.log(message);
          resolve();
        }).catch((errAll) => {
          console.log('*** ERROR [promise all]:', errAll.message);
          reject(errAll);
        });
      }
    });
  });
};

main().then(() => {
  process.exit(0);
}).catch((err) => {
  console.log(err);
  process.exit(0);
});
