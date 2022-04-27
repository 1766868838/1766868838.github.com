let n=9;
function changeRed(){
	document.getElementById("p1").style.color="red";
}
function changeDate(){
	let today = new Date();
	let year = today.getFullYear();
	let month = today.getMonth()+1;
	let day = today.getDate();
	month = checkTime(month);
	day = checkTime(day);
	document.getElementById("head").innerHTML=year+"-"+month+"-"+day;
}
function checkTime(d){
	if(d<10) {d = "0"+d}
	return d;
}
function addCla(){
  	let element = document.getElementById("m-ul");
	for(let i = 0;i<element.childNodes.length;i++){
		element.childNodes[i].classList.add("fn-active");
	}
	console.log(element.childNodes[1].className);
}

function del(){
	let element = document.getElementById("m-ul");
	let child=document.getElementById("p8");
	element.removeChild(child);
}
function jump(){
	window.open("http://www.taobao.com");	
}
function addLi(){
	let element = document.getElementById("m-ul");
	let l=document.createElement("li");
  	let node=document.createTextNode("p"+n);
  	n++;
  	l.appendChild(node);
  	element.appendChild(l);
}
document.getElementById("m-ul").addEventListener("click",function(e) {
	if(e.target && e.target.nodeName == "LI"){
		alert(e.target.id+" was clicked!");
	}
})
function changeWht(){
	document.getElementById("p7").parentNode.parentNode.style.width = screen.availWidth+"px";
}