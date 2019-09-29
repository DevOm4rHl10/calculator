function getFormula() {
	let formula = document.getElementById("formula").value
	let answer = eval(formula)
	console.log(answer);
	document.getElementById("result").value = answer;
}