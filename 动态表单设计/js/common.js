var currentButton = null;
var currentSelectedTag;
$(document).ready(function(){
  $("button.selectTagSpan").click(function(){
   //alert("你点击按钮"+$(this).text());
   //alert($(this).attr("id"));
   	$("button").removeClass("clickedButton");//移除所有点击了按钮的效果
   	$(this).addClass("clickedButton");//添加当前按钮被点击了的效果
   	$("#workSpace").addClass("cursorClass")//设置进入workSpace的鼠标图标效果
   switch ($(this).attr("id")){
   	case "divContainer":
   		createTag('<span>',null,null);
   		break;
   	case "comboBox":
   		createTag('<input>',null,null);
   		break;
	case "inputFrame":
			createTag('<span>',null,null);
   		break;
	case "radioButton":
   		createTag('<span>',null,null);
   		break;
	case "TextFrame":
			createTag('<div>',null,null);
   		break;
	case "iamge":
   		createTag('<span>',null,null);
   		break;
	case "checkBox":
   		createTag('<span>',null,null);
   		break;
   	case "submitButton":
   		createTag('<span>',null,null);
   		break;
   	default:
   		break;
     }
  });
});
var divCount = 0;
//创建div标签
function createTag(TagName,typename,value){
	//alert("开始创建工作区的Tag了");
	//alert(pointX+"::"+pointY)
	flag = true;
	divCount = divCount+1;
	//创建标签
	currentSelectedTag = $(TagName,{'id':'NewDiv'+divCount,
									'name':'createdDiv',
									'class':'newDivClass'
									}
									);//创建一个div
	currentSelectedTag.text("这是新创建的div");
	currentSelectedTag.addClass("newDivClass").prop('disabled', true);//禁止输入
};

var flag;//设置一个标志确保一次只创建一div
function CreateChirdren(e){//鼠标按下时的事件
	$("button").removeClass("clickedButton");//移除所有点击了按钮的效果	
	if(flag){
		creatBoder();//创建边框
		currentSelectedTag.css({"background-color":"yellow",
					  		"position":"absolute",
					  		"left":"0px",
					  		"top":"0px",
					  		"width":"100%",
					  		"height":"100%"
								})
					  .appendTo($(currentDragDiv));
		$(currentDragDiv).bind("mouseover",function(){
				move(event);
				});
		$(currentDragDiv).css({
				"left":piontX+"px",
				"top":piontY+"px"
		})
	}
	flag = false;
}
var piontX,piontY;//记录坐标点
function getcurrentXandY(e){//鼠标在工作区域时 更新位置信息
//	if(currentDragDiv!=null)
//		isContain(e.clientX,e.clientY);//判读鼠标是否在当前的div
		if(!currentDragDivMap.isEmpty())
			for(var i = 0;i<currentDragDivMap.values().length;i++){
				if(isContain(e.clientX,e.clientY,currentDragDivMap.values()[i]))
					currentDragDiv = currentDragDivMap.values()[i];
			}
		

	piontX = e.clientX;//记录当前的坐标点
	piontY = e.clientY;
	$("#workspaceCurrntXandY").html("工作区域的当前坐标点：("+
		Math.floor(e.pageX-$("#workSpace").offset().left)+","+Math.floor(e.pageY-$("#workSpace").offset().top)+")");
}
//当前Tag移动
function move(e){
		$("#dragDiv"+currentSerialNum).draggable({containment:"#workSpace"}).css({"cursor":"move"});//设置dragDiv可以拖拽并限定器拖拽的范围，
}
var currentSerialNum = 0;
//创建边框
function creatBoder(){
		currentSerialNum = currentSerialNum + 1;
		$('<div>',{'id':'dragDiv'+currentSerialNum,'class':'publicdragDiv'}).appendTo("#workSpace");
		$('<div>',{'id':'rRightDown'+currentSerialNum,'class':'rRightDown',
		'mouseover':function(){keyControlAction = 'rRightDown';},
		'mousedown':function(){resizeAction(event,"rRightDown")}}).appendTo($("#dragDiv"+currentSerialNum));
		$('<div>',{'id':'rLeftDown'+currentSerialNum,'class':'rLeftDown',
		'mouseover':function(){keyControlAction = 'rLeftDown';},
		'mousedown':function(){resizeAction(event,"rLeftDown")}}).appendTo($("#dragDiv"+currentSerialNum));
		$('<div>',{'id':'rRightUp'+currentSerialNum,'class':'rRightUp',
		'mouseover':function(){keyControlAction = 'rRightUp';},
		'mousedown':function(){resizeAction(event,"rRightUp")}}).appendTo($("#dragDiv"+currentSerialNum));
		$('<div>',{'id':'rLeftUp'+currentSerialNum,'class':'rLeftUp',
		'mouseover':function(){keyControlAction = 'rLeftUp';},
		'mousedown':function(){resizeAction(event,"rLeftUp")}}).appendTo($("#dragDiv"+currentSerialNum));
		$('<div>',{'id':'rRight'+currentSerialNum,'class':'rRight',
		'mouseover':function(){keyControlAction = 'rRight';},
		'mousedown':function(){resizeAction(event,"rRight")}}).appendTo($("#dragDiv"+currentSerialNum));
		$('<div>',{'id':'rLeft'+currentSerialNum,'class':'rLeft',
		'mouseover':function(){keyControlAction = 'rLeft';},
		'mousedown':function(){resizeAction(event,"rLeft")}}).appendTo($("#dragDiv"+currentSerialNum));
		$('<div>',{'id':'rUp'+currentSerialNum,'class':'rUp',
		'mouseover':function(){keyControlAction = 'rUp';},
		'mousedown':function(){resizeAction(event,"rUp")}}).appendTo($("#dragDiv"+currentSerialNum));
		$('<div>',{'id':'rDown'+currentSerialNum,'class':'rDown',
		'mouseover':function(){keyControlAction = 'rDown';},
		'mousedown':function(){resizeAction(event,"rDown")}}).appendTo($("#dragDiv"+currentSerialNum));
		currentDragDiv = document.getElementById("dragDiv"+currentSerialNum);
		currentDragDivMap.put($(currentDragDiv).attr("id"),currentDragDiv);
	}
var keyControlAction = null;
var isMouseLeftKeyDown = false;
var currentDriection = null;
var currentDragDiv = null;
var currentDragDivMap = new Map();
//缩放
function resizeAction(e,action){
	//currentDragDiv = e.srcElement.parentNode;//获取当前的父元素
	isMouseLeftKeyDown = true;//准备拖动
	$(currentDragDiv).draggable("disable");//当鼠标移动到边框点时禁止大dragDiv移动
	currentDriection = action;//当前的动作
}
//鼠标松开事件
	window.onmouseup = function(){
		isMouseLeftKeyDown = false;	
		$(currentDragDiv).draggable("enable");//解除拖动当前的div
	}
//鼠标移动事件
	window.onmousemove = function(e){
		if(isMouseLeftKeyDown == true){
				console.log("当前的动作"+currentDriection);
			switch(currentDriection){
				case "rRightDown":rightMove(e);downMove(e);break;
				case "rLeftDown":leftMove(e);downMove(e);break;
				case "rRightUp":rightMove(e);upMove(e);break;
				case "rLeftUp":leftMove(e);upMove(e);break;
				case "rRight":rightMove(e);break;
				case "rLeft":leftMove(e);break;
				case "rUp":upMove(e);break;
				case "rDown":downMove(e);break;
			}
		}
	}
		//right移动
	function rightMove(e){
		var x = e.clientX;//鼠标x坐标
		var addWidth = "";//鼠标移动后选取框增加的宽度
		var widthBefore = currentDragDiv.offsetWidth -2;//选取框变化前的宽度
		addWidth = x - getPosition(currentDragDiv).left - widthBefore;//鼠标移动后增加的宽度
		currentDragDiv.style.width = addWidth + widthBefore + "px";//选取框变化后
	}
	//up移动
	function upMove(e){
		var y = e.clientY;//鼠标纵坐标
		var mainY = getPosition(currentDragDiv).top;//选取框相对于屏幕上边的距离
		var addHeight = mainY - y;//增加的高度
		var heightBefore = currentDragDiv.offsetHeight -2;//原来的高度
		currentDragDiv.style.height = 	heightBefore + addHeight + "px";
		currentDragDiv.style.top = currentDragDiv.offsetTop - addHeight + "px";
	}
	//left移动
	function leftMove(e){
		var x = e.clientX;//鼠标横坐标
		var mainX  = getPosition(currentDragDiv).left;
		var addWidth = 	mainX - x;//增加的宽度
		var widthBefore = currentDragDiv.offsetWidth -2;//原来的宽度
		currentDragDiv.style.width = widthBefore + addWidth +"px";
		currentDragDiv.style.left = currentDragDiv.offsetLeft - addWidth + "px";
	}
	//down移动
	function downMove(e){
		var y = e.clientY;//鼠标纵坐标
		var heightBefore = currentDragDiv.offsetHeight-2//原来的高度 -2是减去两边边框的大小和
		var mainY = getPosition(currentDragDiv).top;
		var addHeight = y - heightBefore - 	mainY;//增加的高度
		currentDragDiv.style.height = addHeight + heightBefore + "px";
	}
	//获取元素相对于屏幕左边的距离 利用offsetLeft
	function getPosition(node){
		var left = node.offsetLeft;
		var top = node.offsetTop;
		var parent = node.offsetParent;
		while(parent != null){
			left += parent.offsetLeft;
			top += parent.offsetTop;
			parent=parent.offsetParent;	
		}
		return {"left":left,"top":top};
	}
	var saveCurrntBoder = new Map();//存放当前的边框
	//消除边框
	function removeBoder(oobb){
		//console.log("隐藏边框");
//		$(currentDragDiv).empty();//移除所有的子元素
//		$(currentSelectedTag).appendTo(currentDragDiv);//将选择的标签添加进来
		$(oobb).css({'border':'0px'});//因擦实线边
		var boder = $(oobb.childNodes).detach('div');//移除所有的div
		$(currentSelectedTag).appendTo($(oobb));//将选择的标签添加进来
		//console.log($(oobb).attr("id"));
		saveCurrntBoder.put($(oobb).attr("id")+"boder",boder);//将这个存放到map,以便等下显示出来
	}
	//显示边框
	function displayBoder(oob){
		$(oob).css({'border':'1px solid #000000'});//显示实线边
			$(currentSelectedTag).appendTo($(oob));//将选择的标签添加进来
		//console.log("显示边框");
		if(!saveCurrntBoder.isEmpty())
				saveCurrntBoder.get($(oob).attr("id")+"boder").appendTo($(oob));//取到map中的边框值
	}
	//判读鼠标是否在当前div中
	function isContain(x,y,opreaObj){
		var XareaLeft = opreaObj.offsetLeft-10;
		var XareaRight = opreaObj.offsetLeft+opreaObj.offsetWidth+10;
		var YareaUp = opreaObj.offsetTop-10;
		var Yaradown = opreaObj.offsetTop+opreaObj.offsetHeight+10;
		if(x>XareaLeft&&x<XareaRight&&y>YareaUp&&y<Yaradown){
			displayBoder(opreaObj);
			return true;
		}
		else
			removeBoder(opreaObj);
	}
	//键盘上下左右控制大小 
	$(document).keydown(function(event){
		//左37上38右39下40event.keyCode
		console.log("要移动的边框"+keyControlAction);
		console.log("按下的键值"+event.keyCode);
		switch(keyControlAction){
			case "rLeftDown":
						if(event.keyCode == 37)
							keyLeftMoveLeft();
						if(event.keyCode == 38)
							keyDownMoveUp();
						if(event.keyCode == 39)
							keyLeftMoveRight();
						if(event.keyCode == 40)
							keyDownMoveDown();
				break;
			case "rRightUp":
						if(event.keyCode == 37)
							keyRightMoveLeft();
						if(event.keyCode == 38)
							keyUpMoveUp();
						if(event.keyCode == 39)
							keyRightMoveRight();
						if(event.keyCode == 40)
							keyUpMoveDown();
				break;
			case "rLeftUp":
						if(event.keyCode == 37)
							keyLeftMoveLeft();
						if(event.keyCode == 38)
							keyUpMoveUp();
						if(event.keyCode == 39)
							keyLeftMoveRight();
						if(event.keyCode == 40)
							keyUpMoveDown();
				break;
			case "rRightDown":
						if(event.keyCode == 37)
							keyRightMoveLeft();
						if(event.keyCode == 38)
							keyDownMoveUp();
						if(event.keyCode == 39)
							keyRightMoveRight();
						if(event.keyCode == 40)
							keyDownMoveDown();
				break;
			case "rRight":
						if(event.keyCode == 37)
							 keyRightMoveLeft();
						if(event.keyCode == 39)
								keyRightMoveRight();
				break;
			case "rLeft":
						if(event.keyCode == 37)
							keyLeftMoveLeft();
						if(event.keyCode == 39)
							keyLeftMoveRight();
				break;
			case "rUp":
						if(event.keyCode == 38)
							keyUpMoveUp();
						if(event.keyCode == 40)
							keyUpMoveDown();
				break;
			case "rDown":
						if(event.keyCode == 38)
							keyDownMoveUp();
						if(event.keyCode == 40)
							keyDownMoveDown();
				break;
			}
	});
	//左边框 向左移动
	function keyLeftMoveLeft(){
		var widthBefore = currentDragDiv.offsetWidth -2;//原来的宽度
		currentDragDiv.style.width = widthBefore + 1 +"px";
		currentDragDiv.style.left = currentDragDiv.offsetLeft - 1 + "px";
	}
	//左边框 向右移动
	function keyLeftMoveRight(){
		var widthBefore = currentDragDiv.offsetWidth -2;//原来的宽度
		currentDragDiv.style.width = widthBefore -1 +"px";
		currentDragDiv.style.left = currentDragDiv.offsetLeft + 1 + "px";
	}
	//右边框 向右移动
	function keyRightMoveLeft(){
		currentDragDiv.style.width = currentDragDiv.offsetWidth - 2 - 1 +"px";
		console.log(currentDragDiv.offsetWidth)
	}
	//右边框 向左移动
	function keyRightMoveRight(){
		currentDragDiv.style.width = currentDragDiv.offsetWidth - 2 + 1 +"px";
		console.log(currentDragDiv.offsetWidth)
	}
	//上边框 向上移动
	function keyUpMoveUp(){
		var heightBefore = currentDragDiv.offsetHeight -2;//原来的高度
		currentDragDiv.style.height = 	heightBefore + 1 + "px";
		currentDragDiv.style.top = currentDragDiv.offsetTop - 1 + "px";
	}
	//上边框 向下移动
	function keyUpMoveDown(){
		var heightBefore = currentDragDiv.offsetHeight -2;//原来的高度
		currentDragDiv.style.height = 	heightBefore - 1 + "px";
		currentDragDiv.style.top = currentDragDiv.offsetTop + 1 + "px";
		
		console.log(currentDragDiv.offsetHeight)
	}
	//下边框 向上移动
	function keyDownMoveUp(){
		currentDragDiv.style.height = currentDragDiv.offsetHeight -2  - 1 +"px";
		console.log(currentDragDiv.offsetHeight)
	}
	//下边框 向下移动
	function keyDownMoveDown(){
		currentDragDiv.style.height = currentDragDiv.offsetHeight - 2 + 1 +"px";
		console.log(currentDragDiv.offsetHeight)
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
