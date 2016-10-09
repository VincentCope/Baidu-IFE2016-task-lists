function getStyle(obj,name)															//获取属性值
{
	if (obj.currentStyle) {
		return obj.currentStyle[name];
	}
	else{
		return getComputedStyle(obj,false)[name];
	}
}

function getJsonLength(json,length)
{
	length=0;
	for(var items in json)
		length++;
	return length;
}

function startMove(obj,json,fnEnd,step)
{
	var jsonLength;
	var circleTime=0;
	getJsonLength(json,jsonLength);
	clearInterval(obj.timer);														//每一次定时器开启前清空一下
	obj.timer=setInterval(function(){

		for (var attr in json) {													//循环执行json对象
			circleTime++;
			if (attr=="opacity") {													//判断是否执行的是透明度操作
				var cur=Math.round(parseFloat(getStyle(obj,attr))*100);
			}
			else{				
				var cur=parseInt(getStyle(obj,attr));
			}

			if (!step) { 															//定义默认速度级别为5(越小越快)
				step=5;
			};

			var speed=(json[attr]-cur)/step;										//速度赋值
			speed>0?speed=Math.ceil(speed):speed=Math.floor(speed);

			if(cur==json[attr]){													//判断是否到达终点目标值
				
				if(circleTime==jsonLength)											//是否已将所有目标完成，是，则清空计时器
					clearInterval(obj.timer);
				if (fnEnd)
					fnEnd();	
			}

			else if (attr=='opacity'){												//执行操作
				obj.style.filter='alpha:(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}
			else {
				obj.style[attr]=cur+speed+'px';
			}
		};
	},30);																			//定时器
}