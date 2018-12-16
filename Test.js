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
	animate(left,{opacity:50})
	animate(right,{opacity:50})
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
var speed=40;
var FGDemo=document.getElementById('right1-2');
var FGDemo1=document.getElementById('demo1');
var FGDemo2=document.getElementById('demo2');
FGDemo2.innerHTML=FGDemo1.innerHTML
function Marquee1(){
if(FGDemo2.offsetHeight-FGDemo.scrollTop<=0)
FGDemo.scrollTop-=FGDemo1.offsetHeight
else{
FGDemo.scrollTop++
}
}
var MyMar1=setInterval(Marquee1,speed)
FGDemo.onmouseover=function() {clearInterval(MyMar1)}
FGDemo.onmouseout=function() {MyMar1=setInterval(Marquee1,speed)}