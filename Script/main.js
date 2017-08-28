var heading = document.querySelector('h1');
heading.textContent = 'PORSCHE GT2RS 2017';
document.querySelector('h1').onclick=function()
{alert('Welcome');}

var image=document.querySelector('img');

image.onlick=function(){
var src=image.getAttribute('src');
if (src==='../../Desktop/porsche-normal.jpg')
{image.setAttribute('src','../../../Desktop/porsche-normal1.jpg');}
else {image.setAttribute('src','../../Desktop/porsche-normal.jpg');}}



