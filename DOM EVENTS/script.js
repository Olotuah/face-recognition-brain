var button = document.getElementsByTagName("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll('ul>li')

//  function toggleClassDoneOnAndOff(event) {
//     if (event.target.tagName === "li") {
//         event.target.classList.toggle("done");
//     }
// }
  var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li).addEventListener("click", toggleList);
 input.value = "";
    ul>li.appendChild(deleteButton).addEventListener("click", removeItem);
ul.addEventListener("click", toggleClassDoneOnAndOff)

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);