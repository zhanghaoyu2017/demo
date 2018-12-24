// 头部悬浮
window.onload = function(){
	var cover = document.getElementsByClassName('cover')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			cover.style.position = "fixed";
			cover.style.zIndex = 9999;

		}
		else{
			cover.style.position = "static";
		}
	}
}
// 轮播图
var lunbo = document.getElementById('lunbo');
var onavslist = document.getElementById('navs').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var timer;
var isMoving = false;
lunbo.onmouseover = function(){
	animate(left,{opacity:70})
	animate(right,{opacity:70})
	clearInterval(timer)
}
lunbo.onmouseout = function(){
	animate(left,{opacity:0})
	animate(right,{opacity:0})
	timer = setInterval(next, 3000);
}
right.onclick = next;
left.onclick = prev;
for( var i=0; i<onavslist.length; i++ ){
	(function(i){
		onavslist[i].onclick = function(){
			index = i+1;
			navsmove();
			animate(slider,{left:-800*index});
		}
	})(i);
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navsmove();
	animate(slider,{left:-800*index},function(){
		if(index==7){
			slider.style.left = '-800px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navsmove();
	animate(slider,{left:-800*index},function(){
		if(index==0){
			slider.style.left = '-4800px';
			index = 6;
		}
		isMoving = false;
	});
}
function navsmove(){
	for( var i=0; i<onavslist.length; i++ ){
		onavslist[i].className = "";
	}
	if(index >6 ){
		onavslist[0].className = "active";
	}else if(index<=0){
		onavslist[5].className = "active";
	}else {
		onavslist[index-1].className = "active";
	}
}
timer = setInterval(next, 3000);
//充值钱数下拉框
function num(){
	var sel = document.getElementById('money');
	var index = sel.selectedIndex;
	var value = sel.options[index].value;
	if(value==10){
		document.getElementById("one").style.display="block";
        document.getElementById("two").style.display="none";
        document.getElementById("three").style.display="none";
        document.getElementById("four").style.display="none";
	}else if(value==30){
		document.getElementById("one").style.display="none";
        document.getElementById("two").style.display="block";
        document.getElementById("three").style.display="none";
        document.getElementById("four").style.display="none";
	}else if(value==50){
		document.getElementById("one").style.display="none";
        document.getElementById("two").style.display="none";
        document.getElementById("three").style.display="block";
        document.getElementById("four").style.display="none";
	}else{
		document.getElementById("one").style.display="none";
        document.getElementById("two").style.display="none";
        document.getElementById("three").style.display="none";
        document.getElementById("four").style.display="block";
	}
}
//充值后归位
function renovate(){
	var a =document.getElementById('money');
	a.value="30";
	document.getElementById("right2-input1").value="";
	document.getElementById("one").style.display="none";
    document.getElementById("two").style.display="block";
    document.getElementById("three").style.display="none";
    document.getElementById("four").style.display="none";

}
//公告滚动
var speeds=20;
var FGDemo=document.getElementById('right1-2');
var FGDemo1=document.getElementById('demo1');
var FGDemo2=document.getElementById('demo2');
FGDemo2.innerHTML=FGDemo1.innerHTML;
function Marquee1(){
	if(FGDemo2.offsetHeight-FGDemo.scrollTop<=0){
		FGDemo.scrollTop-=FGDemo1.offsetHeight;
	}
	else{
		FGDemo.scrollTop++;
	}
}
var MyMar1=setInterval(Marquee1,speeds)
FGDemo.onmouseenter=function(){ 
	clearInterval(MyMar1);
}
FGDemo.onmouseleave=function() {
	MyMar1=setInterval(Marquee1,speeds);
}
//右边侧边栏
//
function move1(){
	var div2=document.getElementById("div2");
	end=7;
	clearInterval(timer);
	var speed = 0;
	var timer = setInterval(function (){
		var now = parseInt(getStyle(div2,"marginLeft"));
		if (now < end) {       
        	speed = 1;
   		}
        else {
        	speed = -1;
    	}
		if(now == end){
			clearInterval(timer);
		}
		else{
			div2.style.marginLeft = now + speed + "px";
		}
	},1);
}
function move2(){
	var div2=document.getElementById("div2");
	end=85;
	var speed = 0;
	clearInterval(timer);
	var timer = setInterval(function (){
		var now = parseInt(getStyle(div2,"marginLeft"));
		if (now < end) {     
        	speed = 1;
   		}
        else {
        	speed = -1;
    	}
		if(now == end){
			clearInterval(timer);
		}
		else{
			div2.style.marginLeft = now + speed + "px";
		}
	},1);
}
function move3(){
	var div3=document.getElementById("div3");
	end=7;
	clearInterval(timer);
	var speed = 0;
	var timer = setInterval(function (){
		var now = parseInt(getStyle(div3,"marginLeft"));
		if (now < end) {       
        	speed = 1;
   		}
        else {
        	speed = -1;
    	}
		if(now == end){
			clearInterval(timer);
		}
		else{
			div3.style.marginLeft = now + speed + "px";
		}
	},1);
}
function move4(){
	var div3=document.getElementById("div3");
	end=85;
	var speed = 0;
	var timer = setInterval(function (){
		var now = parseInt(getStyle(div3,"marginLeft"));
		if (now < end) {     
        	speed = 1;
   		}
        else {
        	speed = -1;
    	}
		if(now == end){
			clearInterval(timer);
		}
		else{
			div3.style.marginLeft = now + speed + "px";
		}
	},1);
}
function move5(){
	var div4=document.getElementById("div4");
	end=7;
	clearInterval(timer);
	var speed = 0;
	var timer = setInterval(function (){
		var now = parseInt(getStyle(div4,"marginLeft"));
		if (now < end) {       
        	speed = 1;
   		}
        else {
        	speed = -1;
    	}
		if(now == end){
			clearInterval(timer);
		}
		else{
			div4.style.marginLeft = now + speed + "px";
		}
	},1);
}
function move6(){
	var div4=document.getElementById("div4");
	end=85;
	var speed = 0;
	var timer = setInterval(function (){
		var now = parseInt(getStyle(div4,"marginLeft"));
		if (now < end) {     
        	speed = 1;
   		}
        else {
        	speed = -1;
    	}
		if(now == end){
			clearInterval(timer);
		}
		else{
			div4.style.marginLeft = now + speed + "px";
		}
	},1);
}
function move7(){
	var div5=document.getElementById("div5");
	end=7;
	clearInterval(timer);
	var speed = 0;
	var timer = setInterval(function (){
		var now = parseInt(getStyle(div5,"marginLeft"));
		if (now < end) {       
        	speed = 1;
   		}
        else {
        	speed = -1;
    	}
		if(now == end){
			clearInterval(timer);
		}
		else{
			div5.style.marginLeft = now + speed + "px";
		}
	},1);
}
function move8(){
	var div5=document.getElementById("div5");
	end=85;
	var speed = 0;
	var timer = setInterval(function (){
		var now = parseInt(getStyle(div5,"marginLeft"));
		if (now < end) {     
        	speed = 1;
   		}
        else {
        	speed = -1;
    	}
		if(now == end){
			clearInterval(timer);
		}
		else{
			div5.style.marginLeft = now + speed + "px";
		}
	},1);
}
// var a1=document.getElementById("zixun");
// var a2=document.getElementById("youhuiquan");
// var timer = null;
// function{

// } animates(k,end){
// 	var rcover = k;
// 	var speed = 0;
// 	if(rcover.offsetLeft < end){
// 		speed=10;
// 	}
// 	else{
// 		speed=-10;
// 	}
// 	clearInterval(timer); 
// 	var tag = function (){
// 		if(rcover.offsetLeft  == end){
// 			clearInterval(timer);
// 		}
// 		else{
// 			rcover.style.left = rcover.offsetLeft+ speed + 'px' ;
// 		}
// 	} 
// 	timer = setInterval(tag,30);
	
// }
// a1.onmouseover=function(){	
//     animates(a1,1397);  
// }
// a1.onmouseout=function(){
// 	animates(a1,1477);
// }
// document.getElementById("youhuiquan").onmouseover=function(){	
//     animates(a2,1397);
// }
// document.getElementById("youhuiquan").onmouseout=function(){
// 	animates (a2,1477);
// }
