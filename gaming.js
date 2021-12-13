const button1= document.querySelector("#butt1")
const button2= document.querySelector("#butt2")
const resetbutton=document.querySelector("#reset")
const p1dis=document.querySelector("#p1s")
const p2dis=document.querySelector("#p2s")
const playupto=document.querySelector("#playto")
let p1score=0;
let p2score=0;
let winningscore=3;
let isgameover=false;
button1.addEventListener('click',function(){
    if(!isgameover)
    {
p1score++;
p1dis.textContent=p1score;
if(p1score===winningscore)
{
    isgameover=true;
    p2dis.style.color="red";
   p1dis.style.color="#77D72E";
}
}
})
button2.addEventListener('click',function(){
    if(!isgameover)
    {
p2score++;
p2dis.textContent=p2score;
if(p2score===winningscore)
{
    isgameover=true;
    p2dis.style.color="#77D72E";
    p1dis.style.color="red";
}
    }
})
resetbutton.addEventListener('click',function(){
p1score=0;
p2score=0;
p1dis.textContent=p1score;
p2dis.textContent=p2score;
isgameover=false;
p1dis.style.color="black";
p2dis.style.color="black";
})
playupto.addEventListener('change',function(){
    winningscore=parseInt(this.value)
    p1score=0;
p2score=0;
p1dis.textContent=p1score;
p2dis.textContent=p2score;
isgameover=false;
p1dis.style.color="black";
p2dis.style.color="black";
})
