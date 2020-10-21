// alert("Hello world");

const h1tag = document.querySelector('h1');
const h2tag = document.getElementById('counter');
const div = document.getElementsByClassName('purple').item(0);


div.addEventListener('mouseenter', (e) =>{
    div.style.backgroundColor="blue";
})

div.addEventListener('mouseleave', (e)=>{
    div.style.backgroundColor="purple";
})

if(h1tag){
    console.log("h1 found");
    h1tag.innerHTML="Irfanul karim";
    h1tag.style.color='yellow';
    h1tag.style.backgroundColor='red';
}else{
    console.log("h1 not found");
}

function handleClick(){
   ++h2tag.innerHTML;
}

function h1Click(){
    alert("click on h1");
}

// document.onkeydown = (e) =>{
//     console.log("key down");
// }

// document.onkeydown = (e) =>{
//     console.log(e.key);
// }

document.onscroll = (e) =>{
    console.log("scrolling");
}