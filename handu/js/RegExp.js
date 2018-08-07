function checkout(type,str){
	switch(type){
		case "post":var regobj=/^[1-9][0-9]{5}$/;break;
		case "phone":var regobj=/^1(3|5|7|8|9)[0-9]{9}$/;break;
		case "massage":var regobj=/^\w+@\w+\.(com|con|net|cn)$/;break;
		case "personId":var regobj=/^\d\d{16}(x|\d)$/ig;break;
		case "user":var regobj=/\w+\d+\w+/ig;break;
		// case "password":var regobj=/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>?,.\/]).{8,16}$/;break;
		case "password":var regobj=/^(?=.*[a-zA-Z])(?=.*\d)([~!@#$%^&*()_+`\-={}:";'<>?,.\/]*).{8,16}$/;break;
		case "birth":var regobj=/^\d{4}(-|,|\/|.)([1-9]|1[0-2])(-|,|\/|.)([1-9]|[1-2][0-9]|3[0-1]$)/ig;break;
		case "email":var regobj= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;break;
	}
	if(type!=0){
		return regobj.test(str);
	}
}

//过滤敏感词
function filter(str){
		var arr=["他妈","操","你","无赖"];
		for(var i=0;i<arr.length;i++){
			var obj=new RegExp(arr[i],"ig");
			str=str.replace(obj,"*");
		}
		return str;
	}

//去除输入框前后的空格

function movespace(str){
	str=str.replace(/^\s+/,"");
	str=str.replace(/\s+$/,"");
	return str;
}

