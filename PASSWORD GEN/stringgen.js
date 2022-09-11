import readlineSync from "readline-sync";

function generate() {
	let input = readlineSync.questionInt(
		"\n \nEnter 0 to Exit \nEnter 1 to generate string only with alphabets \nEnter 2 to generate string with alphabets and numbers\n"
	);
	switch (input) {
		case 0: {
			console.log(`Exit`);
			process.exit();
			user();
			break;
		}
		case 1: {
			function alpahabets() {
				let length = readlineSync.questionInt(
					"Enter the length of a string  you want to generate:- \n"
				);
				var result = "";
				var characters =
					"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
				var charactersLength = characters.length;
				for (var i = 0; i < length; i++) {
					result += characters.charAt(
						Math.floor(Math.random() * charactersLength)
					);
				}
				console.log(`\n output:-  `, result);
			}

			alpahabets();
			user();
			break;
		}

		case 2: {
			function mixed() {
				let length = readlineSync.questionInt(
					"Enter the length of a string  you want to generate:- \n"
				);
				var result = "";
				var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
				var charactersLength = characters.length;
				for (var i = 0; i < length; i++) {
					result += characters.charAt(
						Math.floor(Math.random() * charactersLength)
					);
				}
				console.log(`\n output:-  `, result);
			}

			mixed();
			user();
			break;
		}
		default: {
			console.log("please select value in between given options");
		}
	}
}
generate()


function user() {
	let input = readlineSync.question(
		`\n \nDo you want to continue? \nEnter "y" to continue \nEnter "n" to exit:- `
	);
	// if (input === "y" || input === "n" || input === "yes" || input === "no") {
	if (input === "y" || input === "yes" || input === "Y") {
		getWeather();
	} else if (input === "n" || input === "no" || input === "N") {
		console.log(`Exit`);
		process.exit();
		// }
	} else {
		console.log(`invalid input`);
	}
}
