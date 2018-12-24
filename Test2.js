/*
* @Author: 嗨阿森纳
* @Date:   2018-12-16 19:23:54
* @Last Modified by:   嗨阿森纳
* @Last Modified time: 2018-12-24 14:23:29
*/
// 头部悬浮
window.onload = function(){
	var cover = document.getElementsByClassName('cover')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			cover.style.position = "fixed";
			cover.style.zIndex = 8888;

		}
		else{
			cover.style.position = "static";
		}
	}
}
//加减号
var jia = document.getElementById("num-jia");
var jian = document.getElementById("num-jian");
var data = document.getElementById("data");

jia.onclick = function(){
	if(data.value <5){
    	data.value = parseInt(data.value) + 1;
    }	
	if(data.value <5){
		jia.style.cursor="pointer";
		jian.style.cursor="pointer";
	}	
	else{
		jia.style.cursor="not-allowed";
	}	
		
}

jian.onclick = function(){
	if(data.value <= 1) {
        data.value = 1;
    } else {
        data.value = parseInt(data.value) - 1;
    }
	if(data.value>1){
		jia.style.cursor="pointer";
		jian.style.cursor="pointer";
	}
	else{
		jian.style.cursor="not-allowed";
	}	
}
//选择净含量

function first1(){
	var first = document.getElementById("hanliang1");
	var second = document.getElementById("hanliang2");
	var gs = document.getElementById("gs");
	first.style.border="1px #ff0853 solid";
	first.style.background="url('img/duigou.png') no-repeat 48px 15px";
	gs.innerText='"150ml"';
	second.style.border="0";
	second.style.background="none";
}
function second1(){
	var first = document.getElementById("hanliang1");
	var second = document.getElementById("hanliang2");
	var gs = document.getElementById("gs");
	second.style.border="1px #ff0853 solid";
	second.style.background="url('img/duigou.png') no-repeat 48px 15px";
	gs.innerText='"200ml"';
	first.style.border="0";
	first.style.background="none";
}
//加入蒙照
 function show() {
    document.getElementById('mengzhao1').style.display = 'block';
    document.getElementById('mengzhao2').style.display = 'block';      
}
//关闭
function closed() {
    document.getElementById('mengzhao1').style.display = 'none';
    document.getElementById('mengzhao2').style.display = 'none';
}
//小图片切换
var sp1 = document.getElementById("sg1");
var sp2 = document.getElementById("sg2");
var img11 = document.getElementById("img11");


function clickleft(){
	var Bimg = document.getElementById("Bimg");
	sp1.style.border="1px #ff9004 solid";
	sp2.style.border="0";
	img11.src="img/pp0.jpeg";
	Bimg.src="img/pp2.jpeg";
}
function clickright(){
	sp2.style.border="1px #ff9004 solid";
	sp1.style.border="0";
	img11.src="img/pp1.jpeg";
	Bimg.src="img/pp3.jpeg";
}
//放大镜
var box = document.getElementById("big-goods");
var img1 = document.getElementById("img1");
var slider = document.getElementById("slider");
var img2 = document.getElementById("img2");
var Bimg = document.getElementById("Bimg");
//2.给左侧小图绑定移入，移出，移动事件
img1.onmouseover = function(){
	slider.style.display ="block";
	img2.style.display ="block";
}
img1.onmouseout = function(){
	slider.style.display ="none";
	img2.style.display ="none";
}
img1.onmousemove = function(ev){
	var ev = ev||window.event;
	//(1)根据鼠标的位置，计算放大镜的位置
	var left = ev.clientX - box.offsetLeft - slider.offsetWidth/2;
	var top = ev.clientY - box.offsetTop - slider.offsetHeight/2;
	var maxLeft = img1.offsetWidth - slider.offsetWidth;
	var maxTop = img1.offsetHeight- slider.offsetHeight;
	left = left>maxLeft?maxLeft:left<0?0:left;
	top = top>maxTop?maxTop:top<0?0:top;
	//(2)设置放大镜的位置
	slider.style.left = left + "px";
	slider.style.top = top +"px";
	//根据左侧放大镜的位置，计算右侧大图移动比例
	var w = left/maxLeft;
	var h = top/maxTop;
	//计算大图的最大移动范围
	var BimgLeft = img2.offsetWidth-Bimg.offsetWidth;
	var BimgTop = img2.offsetHeight-Bimg.offsetHeight;
	//计算大图的移动的距离，设置位置
	Bimg.style.left = w*BimgLeft+"px";
	Bimg.style.top = h*BimgTop+"px";
}


