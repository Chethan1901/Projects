import express from "express";
import fs from "fs/promises";
import bcrypt from "bcrypt";
import randomString from "./utils/randomST.js";



const app = express();
const port = 5000;



// JSON Body Parser
app.use(express.json());
app.get("/", (req, res) => {
	res.status(200).json({ success: "Welcome to the TAsky" });
});



app.post("/register", (req, res) => {
	res.status(200).json({ success: "Welcome to the Tasky from register" });
});



app.post("/api/signup", async (req, res) => {
	try {
		let { firstname, lastname, password, password2, address, phone, email } =
			req.body;
		// let body =req.body
		console.log(email);
		if (!email || !firstname || !lastname || !address || !phone || !address) {
			return res.status(400).json({ error: "some fields are missing" });
		}

        if (password !== password2) {
			return res.status(400).json({ error: "Password does not match" });
		}



		//check duplications
        let fileData = await fs.readFile("data.json");
		fileData = JSON.parse(fileData);


		password = await bcrypt.hash(password, 12);
		// Generate a 12 digit random string for user_id
		let user_id = randomString(16);
		let userData = {
			user_id,
			firstname,
			lastname,
			password,
			address,
			phone,
			email,
		};
		userData.tasks = [];
		fileData.push(userData);


		await fs.writeFile("data.json", JSON.stringify(fileData));
		res.status(200).json({ success: "Welcome you are in a signup route" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});
app.listen(port, () => {
	console.log("Server Started at Port ", port);
});
