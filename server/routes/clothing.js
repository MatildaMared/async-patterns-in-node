const { reject } = require("core-js/fn/promise");
const express = require("express");
const fs = require("fs");
const datafile = "server/data/clothing.json";
const router = express.Router();

/* GET all clothing */
router.route("/").get(function (req, res) {
	getClothingData()
		.then((clothingData) => {
			console.log("Return data to the browser");
			res.send(clothingData);
		})
		.catch((err) => {
			res.status(500).send(err);
		})
		.finally(() => {
			console.log("Completed...");
		});
	console.log("Doing more work");
});

function getClothingData(callback) {
	return new Promise((resolve, reject) => {
		fs.readFile(datafile, "utf8", (err, data) => {
			if (err) {
				reject(err);
			} else {
				let clothingData = JSON.parse(data);
				resolve(clothingData);
			}
		});
	});
}

module.exports = router;
