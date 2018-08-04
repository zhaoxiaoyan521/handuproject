
//内部样式与外部样式的兼容函数
function getsyle(elem,atter){
		return elem.currentStyle?elem.currentStyle[atter]:getComputedStyle(elem)[atter];
	}

//先判断使用的浏览器是哪一种浏览器
function getstyle1(){
	if(navigator.userAgent.indexOf("Chrome")>-1){
		alert("谷歌浏览器");
	}else if(navigator.userAgent.indexOf("Friefox")>-1){
		alert("火狐浏览器");
	}else if(navigator.userAgent.indexOf("Trident")>-1){
		alert("IE浏览器");
	}
}

//获取元素的封装函数
function $n(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else if(str.indexOf("=")>-1){
		return document.getElementsByName(str.substring(5));
	}else{
		return document.getElementsByTagName(str);
	}
}

//阻止事件的默认行为

function prevent(e){
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue=false;
	}
}

//dom0/dom2/ie绑定函数的方法
//参数：
//  DOM对象:domObj
//  事件类型:type (不含on)
//  函数（事件对应的函数）func
//  是否冒泡
//返回值：无
function addEnent(domObj,type,func,isbuhuo){
	if(domObj.addEventListener){
		domObj.addEventListener(type,func,isbuhuo);
	}else if(domObj.attachEvent){
		domObj.attachEvent("on"+type,func);
	}else{
		domObj["on"+type]=func;
	}
}

//是否阻止冒泡

function bubble(e){
	if(e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancelBubble =true;
	}
}