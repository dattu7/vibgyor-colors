const button=document.querySelector("button");
const body=document.querySelector("body");
const color=['violet','indigo','blue','green','yellow','orange','red'];

body.style.backgroundColor='pink';

button.addEventListener('click',function(){
    const colorIndex=parseInt(Math.random()*color.length);
    console.log(colorIndex)
    body.style.backgroundColor=color[colorIndex];
});