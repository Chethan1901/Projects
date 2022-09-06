function Encode() {
	let A = document.getElementById("encode").value;

	let B = A.split("");

	let ASCII = B.map((char) => char.charCodeAt());

	let BI = ASCII.map((num) => num.toString(2));

	let BIT8 = BI.map((bin) => {
		while (bin.length < 8) {
			bin = "0" + bin;
		}
		return bin;
	});

	let oneBI = BIT8.join("").split("");

	let BIT6 = [];
	while (oneBI.length != 0) {
		BIT6.push(oneBI.splice(0, 6).join(""));
	}

	let CheckLast = BIT6[BIT6.length - 1];
	if (CheckLast.length != 6) {
		var counter = 0;
		while (CheckLast.length < 6) {
			CheckLast = CheckLast + "0";
			counter++;
		}
		BIT6[BIT6.length - 1] = CheckLast;
	}

	let BiTOdec = BIT6.map((str) => parseInt(str, 2));

	let base64 =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

	let base64last = BiTOdec.map((dec) => base64[dec]);
	if (counter == 2) {
		base64last.push("=");
	} else if (counter == 4) {
		base64last.push("==");
	}

	let finalBase64 = base64last.join("");
	document.getElementById("Encans").innerHTML = finalBase64;
}
