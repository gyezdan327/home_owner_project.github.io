function getrandTemp(randInt){
	var temperature = [64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76];
	randTemp = temperature[randInt];	
	document.write(randTemp);
}

function getrandHumidity (randInt){
	var humidity = [28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64];
	randHumidity = humidity[randInt];
	document.write(randHumidity);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
