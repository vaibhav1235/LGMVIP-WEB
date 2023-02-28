//let's get our object
let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let el = document.querySelector('li');

//Noew we will create a function that will allow us to add element on b utton calls


btn.addEventListener('click',() =>{
	let txt = input.value;
	if(txt === ""){
		alert('You must write something');

	}else{
		let li = document.createElement('li');
		li.innerHTML = txt;
		list.insertBefore(li , list.childNodes[0]);
		input.value= '';
	}
	 
})


//now let write  the function  that will allows us to mark the done subject

list.addEventListener('click',e =>{
	if(e.target.tagName == 'LI'){
		 e.target.classList.toggle('checked');
	}
})





