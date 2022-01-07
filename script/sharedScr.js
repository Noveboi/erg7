//Split "bands" in two links for CM and Leprous
const bandsTxt = document.getElementById('split-text');
const select = document.getElementById('select')
const cmTxt = document.getElementById('cm');
const lepTxt = document.getElementById('lep');

if (bandsTxt && select && cmTxt && lepTxt) {
	cmTxt.style.display = 'none';
	lepTxt.style.display = 'none';
	cmTxt.style.fontSize = '24px';
	lepTxt.style.fontSize = '24px';
} else console.log("navbar elements return null");

function Split() {
	if (bandsTxt && select && cmTxt && lepTxt) {
		cmTxt.style.display = 'block';
		lepTxt.style.display = 'block';
		bandsTxt.style.display = 'none';

		console.log("split called");
		select.addEventListener("mouseleave", function () {
			bandsTxt.style.display = 'block';
			cmTxt.style.display = 'none';
			lepTxt.style.display = 'none';
		});
	}  else console.log("navbar elements return null");
}