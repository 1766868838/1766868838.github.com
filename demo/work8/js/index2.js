let imgnum=document.querySelectorAll(".m-img")
for(i=0;i<imgnum.length;i++){
	imgnum[i].addEventListener("click",function(e){
		let imgUrl = e.target.getAttribute("src")
		console.log(imgUrl)
		document.querySelector(".m-bimg").setAttribute("src",imgUrl)
		document.querySelector(".m-bimg").style.display ='inline'
	})
}
document.querySelector(".m-bimg").addEventListener('click',function(){
	this.style.display = 'none'
})
let linum=document.querySelectorAll("li")
let gindex = document.querySelector(".g-index")
console.log(gindex)
let divnum = gindex.querySelectorAll("div")
for(i=0;i<linum.length;i++){
	linum[i].addEventListener("click",function(){
		index=this.textContent
		let liNode = this
		document.querySelector(".sel").classList.remove("sel")
		document.querySelector(".selLi").classList.remove("selLi")
		divnum[index-1].classList.add("sel")
		linum[index-1].classList.add("selLi")
	})
}

let delnum = document.querySelectorAll(".del")
for(i=0;i<delnum.length;i++){
	delnum[i].addEventListener("click",divdelete)
}
function divdelete(){
			let par = this.closest("div");
		par.remove();
}
document.querySelector(".add").addEventListener('click',function(){
	let pre = this.previousElementSibling
	let newdiv = pre.cloneNode("true")
	let text = newdiv.querySelector(".num")
	newdiv.addEventListener("click",divdelete)
	newdiv.querySelector(".num").textContent =(Number(text.textContent)+1)
	if (pre.parentNode) {
    	pre.parentNode.insertBefore(newdiv, pre.nextSibling);
  	}
})