import axios from "axios";
import { count } from "console";
import { readFileSync } from "fs";
// import fs from "fs";
import fs from "fs/promises";

async function fetchAPI() {
	axios
		.get(
			`https://gist.githubusercontent.com/Jkudjo/8f64c6fe24f30e754fa3ce4971063826/raw/cbd57cfdddbdfc009fd9ccdadf5fb7129af71c73/restaurant-data.json`
		)

		.then((res) => {
			let Data = res.data;
			// console.log(Data);

			fs.writeFile("restuarant.json", JSON.stringify(Data), (err) => {
				if (err) console.log(err);
				else {
					console.log("File written successfully\n");
				}
			});
		})
		.catch((err) => {
			console.error(err);
		});

	// let file_data = await fs.readFile("restuarant.json");
	// let A = JSON.parse(file_data);
	// let B = A.restaurants;
	// let C = B.map((time) => {
	// 	let D = time.operating_hours;
	// 	let Time = Object.values(D);
	// 	var split_time = Time.map((item) => {
	// 		var splitted_time = item.split("-");
	// 		let split_col = splitted_time.map((item) => {
	// 			let splitted_col = item.split(":");
	// 			if(splitted_col[0]<12){
	// 			   let  d = 12 + (+splitted_col[0])
	// 			    console.log(`${d}:${splitted_col[1]}`)
	// 			}
	// 			else{
	// 			    console.log(`${splitted_col[0]}:${splitted_col[1]}`)
	// 			}
	// 		});
	// 	});
	// });

	var file_data = await fs.readFile("restuarant.json");
	var A = JSON.parse(file_data);

	var B = A.restaurants;
	var C = B.map(async (item) => {
		var D = item.reviews;
		// console.log(D)
		var count = 0;
		var sum = 0;
		var E = D.map((item) => {
			var F = item.rating;
			count++;
			sum += item.rating;
			// console.log(F);
		});
		// console.log(sum, count);
		var average = sum / count;
		let final_avg = average.toFixed(2);
		// console.log(`average:-`, average.toFixed(2))

		
		D.average = final_avg;
		// let file_data2= await fs.readFile("output.json")
		// file_data2=JSON.parse(file_data2)
		// file_data2.push(D)
		console.log(D)
		// await fs.writeFile("output.json", JSON.stringify(file_data2));
	});
	// await fs.writeFile("output.json", JSON.stringify(A));

}

fetchAPI();

