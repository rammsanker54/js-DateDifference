var b= document.getElementById("birthday");
var c =document.getElementById("today");
var buttonn =document.getElementById("btn");
var disp= document.getElementById("display");
var dis=document.createElement("h2");
disp.appendChild(dis);
buttonn.addEventListener("click",function(){
    var birtday=new Date(b.value);
    var todayy=new Date(c.value);
   var timediferce=todayy.getTime()-birtday.getTime();
   var day= timediferce/(1000*24*3600)
   console.log(day);
   dis.innerText=day;
})
 



