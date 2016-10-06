	var aBtn = document.getElementsByTagName("button");
	var oTxt = document.getElementById("dataIn");
	var container = document.getElementById("container");
	var aTxt = [];

	window.onload=function (){
		//点击插入按钮，赋予点击事件
		aBtn[0].onclick = function(){
			var aDiv = createDiv();
			for(var j = 0 ; j < aDiv.length ; j ++){
				container.appendChild(aDiv[j]);
			}
		}
		
		aBtn[1].onclick = function(){
			//查询功能
			var oSearch = document.getElementById("search");
			
			for (var i = 0;i < aTxt.length;i++) {
				container.childNodes[i].style.backgroundColor = "red";
				if(aTxt[i].indexOf(oSearch.value) != -1){
					container.childNodes[i].style.backgroundColor = "#333";
				}
			}
		}
	}
	//正则表达式借鉴自团队 “组团来卖萌的”
	function createDiv(){
		//创建div承载tag内容
		var aDiv = [];
		var txt = [];
		aTxt = oTxt.value.split(/[,，;；、\s\n]+/);			
		
		for(var i = 0 ; i < aTxt.length ; i++){
			//循环分割后的数组，创建tag
			aDiv[i] = document.createElement("div");
			
			txt[i] = document.createTextNode(aTxt[i]);
			aDiv[i].appendChild(txt[i]);
			aDiv[i].className = "active";
			aDiv[i].onclick = deleteDiv;
		}
		
		return aDiv;
	}

	function deleteDiv(){
		this.parentNode.removeChild(this);
	}