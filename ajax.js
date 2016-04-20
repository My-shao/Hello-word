/*
 *Ajax
 */
 
 define(function(require,exports){
	exports.get = function(url,feedback){
		if(url + "" === "undefined"){
			console.log("请求地址缺失！");
			return;
		}
		
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4 && xhr.status === 200 &&typeof feedback === "function"){
				feedback.call(xhr,xhr.responseText);
			}
		};
		xhr.open("GET",url,true);
		xhr.send();
	} 
 });