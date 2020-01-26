const express = require('express');
const router = express.Router();
const fs = require('fs').promises;

/* GET users listing. */
router.get('/:filename', async (req, res, next) => {
	console.log('NAME>>>', req.params.filename);

	// ファイルのパス
	const file = `./public/tmp/${req.params.filename}`;
	console.log('file >>> ', file);

	// ファイルを作る
	await fs.writeFile(file, Date.now());

	// ファイルをダウンロードさせる
	res.download(`./public/tmp/${req.params.filename}`,
		req.params.filename,
		(err) => {
			if (err) {
				console.log('DOWNLOAD ERROR:', err.message);
				res.status(err.status).send();
			} else {
				// ファイルの削除処理
				setTimeout(() => {
					console.log('DELTE FILE');
					fs.unlink(file, (errUnlink) => {
						console.log('unlink file');
						if (errUnlink) {
							console.log('*** ERROR [fs.unlink]:', errUnlink.message);
						}
					});
				}, 10 * 1000);
			}
		});
});

module.exports = router;
