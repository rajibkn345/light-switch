const bulbToggle = () => {
	let bulb = document.getElementById("bulbId");
	if (bulb.src.match("bulb_off.png")) {
		bulb.src = "./assets/bulb_on.png";
	} else {
		bulb.src = "./assets/bulb_off.png";
	}
};
