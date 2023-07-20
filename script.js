//your JS code here. If required.
let select = document.getElementById("colorSelect");
let btn =  document.querySelector("input[type=button]");

btn.addEventListener("click", () => {

	for(let child of select.children) {
		if(child.value === select.value) {
			child.remove();
		}
	}
});