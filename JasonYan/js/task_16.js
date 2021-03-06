/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = 
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var oCity = document.getElementById("aqi-city-input");
var oAir = document.getElementById("aqi-value-input");	
var oTable = document.getElementById("aqi-table");


/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	
	aqiData[oCity.value] = oAir.value;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var list = "<tr><th>城市</th><th>空气质量</th><th>操作</th></tr>";
	
	if(aqiData.toString() === "{}"){
		oTable.innerHTML = "";
	}else{
		oTable.innerHTML = list;
		for(var city in aqiData){	
			var tr = "<tr><td>" + city + "</td><td>" + aqiData[city] +"</td><td><button onclick = 'delBtnHandle(" + city + ")'>删除</button></td></tr>";
			oTable.innerHTML += tr;
		}
	}
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
  // do sth.
	delete aqiData[city];
	
  	renderAqiList();
}

function init() {
	var addBtn = document.getElementById("add-btn");

  // 给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
	
	addBtn.onclick = addBtnHandle;
  // 给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  
  
//  oTable.addEventListener("click", function(e) { 
//		var aDel = oTable.getElementsByTagName("button");
//		if(e.target.tagName == "button"){
//			//delBtnHandle(e.target);
//			alert("123");
//		}
//  })
}

init();
