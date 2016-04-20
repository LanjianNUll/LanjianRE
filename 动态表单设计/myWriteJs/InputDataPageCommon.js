var divArrayList = new Array();//存放表单 中的控件
$(document).ready(function(){
	$.ajax({  
            type : "POST",  //提交方式  
            url : "http://127.0.0.1:8080/dynamicForm/GetJosoListServlet",//路径  
            success : function(result) {
            	var listFilename = result.split(";");
            	for(var li = 0; li<listFilename.length;li++){
            		//console.log(listFilename[li]);
            		$("<a>",{'class':'aclass','click':function(){
            			getJsonFile(event);}}).html(listFilename[li]+"</br>").appendTo($("#collapseOne").children(".panel-body"));
            	}
            }
	});
});
//获取具体的json文件
function getJsonFile(event){
	var ffileName = $(event.srcElement).text();
	//console.log(ffileName);
	$.ajax({  
            type : "POST",  //提交方式  
            url : "http://127.0.0.1:8080/dynamicForm/GetJosoListServlet",//路径  
            data:{
            	"filejsonFileName":ffileName
            },
            success : function(result) {
//          	console.log(result);
            	displayJson(result);
            }
	});
}
//获取指定的json文件数据
function displayJson(result){
		//处理json数据
		var obj = eval("("+result+")");
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
		//画布的初始化
		initCanvas(canvas.width,canvas.height,canvas.background,canvas.background_picture);
		//获取控件数量
		var itemCount = obj.itemCount;
		//console.log(itemCount);
		//获取控件数据
		var domArray = obj.controlDivJsonArray;
		//console.log(domArray.length);
		//清空画板
		$("#canvasPanl").children("span").remove();
		//初始化控件
		initDivMethod(domArray);
}
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
//初始化画布
function initCanvas(width,height,background,background_pic){
	//这里的画板  还没定好  毕竟 用户录入界面的需求 还没有  
	$("#canvasPanl").css({"background-color":background});
	$("#canvasPanl").css({"background-image":background_pic,"background-repeat":"no-repeat",
			"background-size":"cover"});
	
	//console.log(background);
}
//前台开始解析控件有关的函数
function initDivMethod(divArray){
	//console.log(divArray);
	for(var dii = 0;dii<divArray.length;dii++){
		//将各个控件的position设置成absolute
		divArray[dii][1].style ="position:absolute;"+ divArray[dii][1].style;
		//console.log(divArray[dii][1].style );
		//将json数组转换成Dom对象
		var Dom = JsonML.toHTML(divArray[dii]);
		//拿到json数据中的控件名称
		var realNameStr = divArray[dii][1].name;
		var defaultproerty = null;
		if(divArray[dii][1].defaultproerty!=null)
			defaultproerty = divArray[dii][1].defaultproerty;
		//console.log(defaultproerty);
		//console.log(realNameStr);
		//分别处理各个不同的控件
		switch (realNameStr){
			case "Rec":
				break;
			case "P":
				break;
			case "Line":
				break;
			case "InputOne":
				dealWithInputOne(Dom,defaultproerty);
				break;
			case "TextArea":
				dealWithTextArea(Dom,defaultproerty);
				break;
			case "xialaSelect":
				break;
			case "ListBoxOne":
				dealWithListBoxOne(Dom,defaultproerty);
				break;
			case "ListBoxTwo":
				dealWithListBoxTwo(Dom,defaultproerty);
				break;
			case "DateBox":
				dealWithDateBox(Dom,defaultproerty);
				break;
			case "fileSelect":
				dealWithfileSelec(Dom,defaultproerty);
				break;
			case "ErWeiMa":
				break;
			case "Radio":
				break;
			case "CheckBox":
				break;
			case "Submit":
				break;
			default:
				break;
		}
		//将控件加入到录入界面的div中
		$(Dom).appendTo("#canvasPanl");
		//存放divArray
		divArrayList.push($(Dom));
	}//for
	initDefalutAction();
}

//初始化控件的默认动作
function initDefalutAction(){
	for(var di = 0 ; di<divArrayList.length; di++){
		if($(divArrayList[di]).attr("linkDivId")!=undefined){
			var tep = divArrayList[di];
			$(tep).children("input").bind("change",function(){
				//console.log("#"+$(this).parent("span").attr("linkDivId"));
				//console.log($("#"+$(this).parent("span").attr("linkDivId")).attr("name"));
				//被这段代码恶心到了 
				$("#"+$(this).parent("span").attr("linkDivId")).children("input").val($(this).val());
			});
		}
	}
}
//创建一个录入数据的输入框
function dealWithDateBox(domObj,defaultvalue){
	//console.log($(domObj).children(".dateBoxinput").attr("class"));
	/**input在包装成datepicker之后会被添加class=“hasDatepicker”，
	你对最后一个tr进行复制，显然已经有这个属性了，之后再调用datepicker()就没有效果了，
	所以要通过html()复制之后立即清空class
	*/
	$(domObj).children(".dateBoxinput").removeClass();
	//console.log($(domObj).children("input").attr("dateformat"));
	//获取日期的格式
	var dateformat = $(domObj).children("input").attr("dateformat");
	$(domObj).children("input").datepicker({//添加日期选择功能
            numberOfMonths:1,//显示几个月  
            showButtonPanel:true,//是否显示按钮面板  
            dateFormat: dateformat,//日期格式  
            clearText:"清除",//清除日期的按钮名称  
            closeText:"关闭",//关闭选择框的按钮名称  
            yearSuffix: '年', //年的后缀  
            showMonthAfterYear:true,//是否把月放在年的后面  
            monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],  
            dayNamesMin: ['日','一','二','三','四','五','六'] 
         });
    //按钮显示现在时间
    $(domObj).children("button").click(function(){
    	//console.log(dateformat[2]);
	  	var d = new Date();
	 	var dStr = d.getFullYear()+dateformat[2]+(d.getMonth()+1)+dateformat[2]+d.getDate();
	 	if(dateformat[2] == "年")
	 		dStr = d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日";
    	$(domObj).children("input").val(dStr)
    });
    
    defaultValueToForm($(domObj).children("input"),defaultvalue);
}
//列表一
function dealWithListBoxOne(domObj,defaultvalue){
	 $(domObj).children("SELECT").change(function(){
    	$(this).prev("input").val($(this).val());
   })
}
//列表框二
function dealWithListBoxTwo(domObj,defaultvalue){
	 $(domObj).children("SELECT").change(function(){
    	$(this).prev("input").val($(this).prev("input").val()+"/"+$(this).val());
   })
}
//输入框
function dealWithInputOne(domObj,defaultvalue){
	defaultValueToForm($(domObj).children("INPUT"),defaultvalue);
}
//文本域框
function dealWithTextArea(domObj,defaultvalue){
	
}
//文件框
function dealWithfileSelec(domObj,defaultvalue){
	
}

/*自动填写的默认值函数
 处理各种默认值得函数 都在这里    这里可能还需要向服务器发送一些请求  比如  用户名 和 文档号之类的*/
function defaultValueToForm(inputDiv,defaultvalue){
	if(defaultvalue != null)
		switch (defaultvalue){
			case "currentTime":
				var d = new Date();
				var dstr = d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日"+d.getHours()+"时"+d.getMinutes()+"分";
				$(inputDiv).val(dstr);
				break;
			case "currentDateTime":
				var d = new Date();
				var dstr = d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日";
				$(inputDiv).val(dstr);
				break;
			case "currentUser":
			//取到用户名  
				$(inputDiv).val($("#userName"));
				break;
			case "currentFullUser":
			//取到用户的全名
				$(inputDiv).val($("#userFullName"));
				break;
			case "currentFileSer":
				break;
			case "currentTagRefer":
				break;
			case "currentFormSql":
				break;
			case "currentReferExist":
				break;
			default:
				break;
		}
}
