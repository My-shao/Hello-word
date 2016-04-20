/*
 * 创建元素
 */
 define(function(require,exports){
	 exports.create = function(tagName,attr){
		 var element;
		 if(typeof tagName === "string"){
			 element = document.createElement(tagName);
			 if(typeof attr === "object"){
				 var keyAttr,keyStyle;
				 for(keyAttr in attr){
					 //样式
					 if(keyAttr === "styles" && typeof attr[keyAttr] === "object"){
						 //样式
						 for(keyStyle in attr[keyAttr]){
							 element.style[keyStyle] = attr[keyAttr][keyStyle];
							 
							 if(keyStyle === "opacity" && window.innerWidth + "" == "undefined"){
								 element.style.filter = "alpha(opacity = " + (attr[keyAttr][keyStyle]*100) + ")";
							 }
						 }
					 }else{  //样式类或其他
						 if(keyAttr === "class"){
							 keyAttr = "className";
						 }
						 element[keyAttr] = attr[keyAttr];
					 }
				 }
			 }
			 
		 }
		 return element;
	 }
 });