	var aBtn = document.getElementsByTagName("button");
	var oTxt = document.getElementById("dataIn");
	var container = document.getElementById("container");
	var tagContainer = document.getElementById("tagContainer");
	var tagIn = document.getElementById("tagIn");

	window.onload=function (){
		tagIn.onkeyup = function(){
			var event = event?event:window.event;
			var key = event.keyCode;
			var flag = 0;
			
			if(key == 13){				
				key = 32;
			}
			if(key == 13||key == 32||key == 44){
				for(var i = 0;i < tagContainer.children.length;i++){
					var comp = tagContainer.children[i].innerHTML;
					
					if(tagIn.value.trim() == comp){
						flag = 1;
					}
				}
				
				if(flag != 1){
					var oDiv = document.createElement("div");
					var tag = document.createTextNode(tagIn.value.trim());
					var old = null;
					oDiv.appendChild(tag);
					oDiv.className = "active";
					oDiv.onclick = deleteDiv;
					oDiv.onmouseover = function(){
						old = this.innerHTML;
						this.innerHTML = "删除" + old;
					}
					oDiv.onmouseout = function(){
						this.innerHTML = old;
					}
					//把DIV成品加入节点树并验证不超过10个Tag
					tagContainer.appendChild(oDiv);
					if(tagContainer.children.length > 10){
						tagContainer.removeChild(tagContainer.firstChild);
					}
				}
				//清空输入栏
				tagIn.value = "";
				flag = 0;
			}
		}
		
		//点击插入按钮，赋予点击事件
		aBtn[0].onclick = function(){
			var aDiv = createDiv();
			for(var j = 0 ; j < aDiv.length ; j ++){
				container.appendChild(aDiv[j]);
			}
		}
	}

	function createDiv(){
		//创建div承载tag内容
		var aDiv = [];
		var txt = [];
		var old = null;
		var aTxt = oTxt.value.split(/[,，;；、\s\n]+/);	
		
		if(aTxt.length > 10){
			aTxt.length = 10;
		}
		//正则表达式借鉴自团队 “组团来卖萌的”
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