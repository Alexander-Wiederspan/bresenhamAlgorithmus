var rechenweg = "";
var punktString = "";

function clearHtml(){
	while (document.getElementById("ergebnisse").getElementsByTagName("P").length > 1){
		document.getElementById("ergebnisse").removeChild(document.getElementById("ergebnisse").lastElementChild);
	}
	while (document.getElementById("rechenwege").getElementsByTagName("P").length > 1){
		document.getElementById("rechenwege").removeChild(document.getElementById("rechenwege").lastElementChild);
	}
}
function getBezier(){
	let faktor = document.getElementById("faktor").value;
	clearHtml();
	let array = [];
	array.push(document.getElementById("p1").value);
	array.push(document.getElementById("p2").value);
	array.push(document.getElementById("p3").value);
	array.push(document.getElementById("p4").value);

	// formatieren der Punkte
	let finalArray = [];
	array.forEach(punkt => {
		let temp = punkt.split(",");
		finalArray.push(temp);
	});

	let finished = false;
	let counter = 0;
	
	while (!finished){
		let arr = [];
		for (let i = 0; i < finalArray.length-1; i++) {
			rechenweg = "";
			punktString = "P"+counter;
			let punkt = bezier(finalArray[i],finalArray[i+1], parseFloat(faktor));
			
			// HTML Punkt
			let node = document.createElement("P");
			node.textContent = "P"+counter+" ("+getFraction(punkt[0])+", "+getFraction(punkt[1])+").";
			document.getElementById("ergebnisse").appendChild(node);
			
			// HTML Rechenweg
			let rechenwegNode = document.createElement("P");
			rechenwegNode.textContent = rechenweg;
			document.getElementById("rechenwege").appendChild(rechenwegNode);
			
			arr.push(punkt);
			counter++;
		}
		finalArray = arr.slice(0);
		
		// wenn keine weiteren Punkte errechnet werden können, höre auf
		if (finalArray.length == 0) {
			finished = true;
		}
	}
}
function bezier(startPunkt, endPunkt, faktor) {
	return [berechnung([startPunkt[0], endPunkt[0]], faktor),
		berechnung([startPunkt[1], endPunkt[1]], faktor)];
}
function berechnung(point, u) {
	rechenweg += punktString+ ": (1-"+u+") * "+getFraction(point[0])+" + "+u+" * "+getFraction(point[1]) +" = "+ getFraction((1-u)*point[0] + u*point[1])+ ". ";
	return (1-u)*point[0] + u*point[1];
}

function getFraction(amount) {
	if (parseFloat(amount) === parseInt(amount)) {
		return amount;
	}
	let gcd = function(a, b) {
		if (b < 0.0000001) {
			return a;
		}
		return gcd(b, Math.floor(a % b));
	};
	let len = amount.toString().length - 2;
	let denominator = Math.pow(10, len);
	let numerator = amount * denominator;
	let divisor = gcd(numerator, denominator);
	numerator /= divisor;
	denominator /= divisor;
	amount = numerator + '/' + denominator;
	return amount;
};