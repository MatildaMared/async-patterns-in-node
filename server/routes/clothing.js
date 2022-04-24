const express = require("express");
const fs = require("fs");
const fsPromises = require("fs").promises;
const datafile = "server/data/clothing.json";
const router = express.Router();

/* GET all clothing */
router.route("/").get(async function (req, res) {
	try {
		let data = await getClothingData();
		console.log("Returning async data..");
		res.send(data);
	} catch (err) {
		console.log(err);
		res.status(500).send("Error");
	}

	// getClothingData()
	// 	.then((clothingData) => {
	// 		console.log("Return data to the browser");
	// 		res.send(clothingData);
	// 	})
	// 	.catch((err) => {
	// 		res.status(500).send(err);
	// 	})
	// 	.finally(() => {
	// 		console.log("Completed...");
	// 	});
	console.log("Doing more work");
});

async function getClothingData() {
	let rawData = fsPromises.readFile(datafile, "utf8");
	let clothingData = JSON.parse(await rawData);

	console.log(clothingData);

	return clothingData;
}

// function getClothingData(callback) {
// 	return new Promise((resolve, reject) => {
// 		fs.readFile(datafile, "utf8", (err, data) => {
// 			if (err) {
// 				reject(err);
// 			} else {
// 				let clothingData = JSON.parse(data);
// 				resolve(clothingData);
// 			}
// 		});
// 	});
// }

module.exports = router;
