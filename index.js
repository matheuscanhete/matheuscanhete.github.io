/* create the responsive class 'toggled responsive' when icon is clicked */
function show(){
	var x = document.getElementById("toggled");
		if (x.className === "toggled"){
			x.className += " responsive";
		} else {
		x.className = "toggled";
		}
}
