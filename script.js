//your code he


let ol = document.querySelector("#infi-list");

function addItems(){
	Array.from({length:18}).forEach((_,i)=>{
		ol.innerHTML+=`<li>Item ${i+1} </li>`
	})
}

window.addEventListener("DOMContentLoaded",addItems);
ol.addEventListener("scroll",()=>{
	// alert("hello")
	// if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10){
		addItems();
	// }
})
