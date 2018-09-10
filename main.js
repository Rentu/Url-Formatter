console.log("welcome to use url formatter");
var url = window.location.href;
// // 解析 url 参数

if(url.indexOf("?") != -1){
	urlArr = url.split("?");
	console.log(urlArr[0]);
	if(url.indexOf("&") != -1){
		paramArr = urlArr[1].split("&");
		for (var i = 0; i <= paramArr.length - 1; i++) {
			var paramArrCld = paramArr[i].split("=");
			console.log(paramArrCld[0] + " : " + decodeURI(paramArrCld[1]) );
		}

	}
}else{
	console.log("目前仅支持 ? & 模式");
}
console.log("@author Devilu");
