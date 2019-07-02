var menuItem = document.getElementById("menu").getElementsByTagName("li");
var headLine = document.getElementById("text");
var btn = document.getElementById("zar");

for (i = 0; i < menuItem.length; i++){
	menuItem[i].addEventListener("click", selectItem);
}

function selectItem() {
	headLine.innerHTML = this.innerHTML;
	// body...
}

btn.addEventListener("click" , newItem)

function newItem() {

}