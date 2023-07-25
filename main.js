let button=document.getElementById("short_btn");

button.addEventListener('click',Myfunction);


 async function Myfunction(){

let urlvalue=document.getElementById("url").value;
let copy_field = document.getElementById("copy");



const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${urlvalue}`);

const data =await result.json();


copy_field.value=data.result.short_link2;

// console.log(data.result.short_link2);
// // console.log(data);


}

let copyButton=document.getElementById("copy_btn");
let newURL = document.getElementById("copy");

copyButton.onclick=()=>{

  newURL.select();
  window.navigator.clipboard.writeText(newURL.value);
}



