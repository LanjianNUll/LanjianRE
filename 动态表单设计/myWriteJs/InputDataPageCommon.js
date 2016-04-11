$(document).ready(function(){
	$.getJSON("test.json", function(json){
		//处理json数据
		var obj = eval(json);
		//获取版本号
		var version = obj.version;
		//console.log(version);
		//获取创建日期
		var creatDate = obj.creatDate;
		//console.log(creatDate);
		//获取author
		var author = obj.author;
		//console.log(author);
		//获取画布信息
		var canvas = obj.canvas;
		//console.log(canvas.length);
		//console.log(canvas.width);
		//console.log(canvas.background);
		//console.log(canvas.background_picture);
		//获取控件数量
		var itemCount = obj.itemCount;
		//console.log(itemCount);
		//获取控件数据
		var domArray = obj.controlDivJsonArray;
		//console.log(domArray.length);
		for (var domi = 0;domi < domArray.length; domi++) {
			//console.log(domArray[domi][1].style);
			domArray[domi][1].style =  domArray[domi][1].style + "position:absolute";//为这个加上position属性  这个属性比较特殊  ，这里特殊处理下了
			//console.log(domArray[domi][1].style);
			var Dom = JsonML.toHTMLText(domArray[domi]);
			initMethod(Dom);
			//console.log($(Dom).css("position"));
			$(Dom).appendTo("#space");
		}
	});
	//初始化控件的一些函数
});
/*这是json数据的格式 
 * 
 * 
 * {
	"version": "V1.0.0.1",
	"creatDate": "2016.4.9",
	"author": "null",
	"canvas": {
		"length": "500px",
		"width": "500px",
		"background": "#ff000000",
		"background_picture": "bg.png"
	},
	"itemCount": 0,
	"controlDivJsonArray": []//在这里放控件的json数组  
}
*/
//前台开始解析控件有关的函数

function initMethod(Dom){
	//日期框
	console.log($(Dom).children("input"));
	var dd = $(Dom).children("input").css({"background":"red"});
	$(dd).css({"background":"red"});
	if($(Dom).children("input").attr("class") == 'dateBoxinput hasDatepicker'){
   }
}





















