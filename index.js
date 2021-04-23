

var clr=['red','blue','lime','black','green','yellow']

 function clrchanger(){
 let a=Math.floor(Math.random()*clr.length)
 let d=document.getElementById('chnge')
 //console.log(d)
 d.style.background= clr[a]
}
var b=document.getElementById('btn')
//console.log(b)
b.addEventListener('click',clrchanger)

