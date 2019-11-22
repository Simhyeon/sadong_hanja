var hanjaList;
var hangulList;

function reset() {
	for (var i=0; i< hangulList.length; i++) {
		hangulList[i].style.display = "none";
	}
}

function init() {
	hanjaList = document.getElementsByClassName("hanja");
	hangulList = document.getElementsByClassName("hangul");
	for (var i=0; i< hanjaList.length; i++) {
		hanjaList[i].setAttribute("id", i);
	}
}

function showHangul() {
	for(var i=0;i< hangulList.length; i++) {
		hangulList[i].style.display = "unset";
	}
}

function toggleText(self) {
	console.log(hanjaList.length);
	console.log(hangulList.length);
	console.log(self.id);
	hangulList[self.id].style.display = "unset";
}
