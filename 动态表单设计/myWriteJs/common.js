var currentButton = null;
var currentSelectedTag;
var ww;
var hh;
var isCanCreateChirdren = false;
$(document).ready(function(){
  $("button.btn").click(function(){
  	isCanCreateChirdren = true;
   //alert("你点击按钮"+$(this).text());
   //alert($(this).attr("id"));
   	$("button").removeClass("clickedButton");//移除所有点击了按钮的效果
   	$(this).addClass("clickedButton");//添加当前按钮被点击了的效果
   	$("#workSpace").addClass("cursorClass")//设置进入workSpace的鼠标图标效果
   switch ($(this).attr("id")){//这里匹配可能乱序了  因为不影响所以就不改了 
   	case "divContainer":
   		ww = 180;
   		hh = 80;
   		createTag(createRadio());
   		break;
   	case "comboBox":
   		ww = 182;
   		hh = 62;
   		createTag(createSelect());
   		break;
	case "inputFrame":
			ww = 230;
   		hh = 30;
			createTag(createInputOne());
   		break;
	case "radioButton":
			ww = 200;
   		hh = 84;
   		createTag(createInputTwo());
   		break;
	case "TextFrame":
			ww = 55;
   		hh = 30;
			createTag(createSubmit());
   		break;
	case "iamge":
			ww = 270;
   		hh = 120;
   		createTag(createTextArea());
   		break;
	case "checkBox":
			ww = 210;
   		hh = 80;
   		createTag(createCheckBox());
   		break;
   case "submitButton":
   		ww = 155;
   		hh = 45;
   		createTag(createP());
   		break;
   	default:
   		break;
     }
  });
});
var divCount = 0;
//创建div标签
function createTag(obj){
	//alert("开始创建工作区的Tag了");
	//alert(pointX+"::"+pointY)
	flag = true;
	divCount = divCount+1;
	//创建标签
//	currentSelectedTag = $('<div>',{'id':'NewDiv'+divCount,
//									'name':'createdDiv',
//									'disabled':"disabled",
//									'class':'newDivClass'
//									}
//									);//创建一个div
//	currentSelectedTag.text("这是新创建的div");
//	currentSelectedTag.addClass("newDivClass");
		currentSelectedTag = obj;
	//createRadio().appendTo(currentSelectedTag);
};

var flag;//设置一个标志确保一次只创建一div
var keyCanMoveDiv = false;
function CreateChirdren(e){//鼠标按下时的事件
	piontX = e.clientX;//记录当前的坐标点
	piontY = e.clientY;
	getcurrentXandY(e);
	if(isCanCreateChirdren){
		$("button").removeClass("clickedButton");//移除所有点击了按钮的效果	
		if(flag){
			creatBoder();//创建边框
			openContextMeun();//开启右键菜单
			//根据选择的控件设置框的大小
			currentDragDiv.style.width = ww + "px";
			currentDragDiv.style.height = hh + "px";
			//主边框的css
			currentSelectedTag.css({"background-color":"white",
						  		"position":"absolute",
						  		"left":"0px",
						  		"top":"0px",
						  		"width":"100%",
						  		"height":"100%"
									}).addClass("selectTag")
			.bind("mouseover",function(event){keyCanMoveDiv = true;})
			.bind("mouseout",function(event){keyCanMoveDiv = false;})
						  .appendTo($(currentDragDiv));
			//var event = event||window.event 为了兼容FF
			$(currentDragDiv).bind("mousedown",function(event){var event = event || window.event; move(event);}),
			$(currentDragDiv).css({
					"left":piontX+"px",
					"top":piontY+"px"
			})
		}
		flag = false;
		isCanCreateChirdren = false;
	}
}
var piontX,piontY;//记录坐标点
function getXandY(e){
	$("#afterbody").html("工作区域的当前坐标点：("+
		Math.floor(e.pageX-$("#workSpace").offset().left)+","+Math.floor(e.pageY-$("#workSpace").offset().top)+")"
				+"当前的控件ID:"+$(currentDragDiv).attr("id")
				+"当前控件的name值为："+$(currentDragDiv).children("span").attr("name"));
		isActiveSelectRec = true;//激活鼠标选框动作
}
function iceSelectRecAction(e){
	isActiveSelectRec = false;//阻止鼠标选框动作
}
function getcurrentXandY(e){//鼠标在工作区域时 更新位置信息
//	if(currentDragDiv!=null)
//		isContain(e.clientX,e.clientY);//判读鼠标是否在当前的div
	if(!currentDragDivMap.isEmpty())
		for(var i = 0;i<currentDragDivMap.values().length;i++){
			if(isContain(e.clientX,e.clientY,currentDragDivMap.values()[i])){
				currentDragDiv = currentDragDivMap.values()[i];
				initPropertySomeMsg();//为属性框初始化一些信息
			}
		}
		//console.log("当前的divId是  ———"+$(currentDragDiv).attr("id"));
//	piontX = e.clientX;//记录当前的坐标点
//	piontY = e.clientY;
}
//当前Tag移动
function move(e){
	//console.log(keyCanMoveDiv);
	isActiveSelectRec = false;//阻止鼠标选框动作
	$("#dragDiv"+currentSerialNum).draggable({containment:"#workSpace"}).css({"cursor":"move"});//设置dragDiv可以拖拽并限定器拖拽的范围，
}
var currentSerialNum = 0;
//创建边框
function creatBoder(){
		currentSerialNum = currentSerialNum + 1;
		$('<div>',{'id':'dragDiv'+currentSerialNum,'class':'publicdragDiv'}).appendTo("#workSpace");
		$('<div>',{'id':'rRightDown'+currentSerialNum,'class':'rRightDown',
		'mouseover':function(){keyControlAction = 'rRightDown';keyCanMoveDiv = false;},
		'mousedown':function(event){ resizeAction(event,"rRightDown")}}).addClass("publicDiv").appendTo($("#dragDiv"+currentSerialNum));
		$('<div>',{'id':'rLeftDown'+currentSerialNum,'class':'rLeftDown',
		'mouseover':function(){keyControlAction = 'rLeftDown';keyCanMoveDiv = false;},
		'mousedown':function(event){ resizeAction(event,"rLeftDown")}}).addClass("publicDiv").appendTo($("#dragDiv"+currentSerialNum));
		$('<div>',{'id':'rRightUp'+currentSerialNum,'class':'rRightUp',
		'mouseover':function(){keyControlAction = 'rRightUp';keyCanMoveDiv = false;},
		'mousedown':function(event){resizeAction(event,"rRightUp")}}).addClass("publicDiv").appendTo($("#dragDiv"+currentSerialNum));
		$('<div>',{'id':'rLeftUp'+currentSerialNum,'class':'rLeftUp',
		'mouseover':function(){keyControlAction = 'rLeftUp';keyCanMoveDiv = false;},
		'mousedown':function(event){resizeAction(event,"rLeftUp")}}).addClass("publicDiv").appendTo($("#dragDiv"+currentSerialNum));
		$('<div>',{'id':'rRight'+currentSerialNum,'class':'rRight',
		'mouseover':function(){keyControlAction = 'rRight';keyCanMoveDiv = false;},
		'mousedown':function(event){ resizeAction(event,"rRight")}}).addClass("publicDiv").appendTo($("#dragDiv"+currentSerialNum));
		$('<div>',{'id':'rLeft'+currentSerialNum,'class':'rLeft',
		'mouseover':function(){keyControlAction = 'rLeft';keyCanMoveDiv = false;},
		'mousedown':function(event){ resizeAction(event,"rLeft")}}).addClass("publicDiv").appendTo($("#dragDiv"+currentSerialNum));
		$('<div>',{'id':'rUp'+currentSerialNum,'class':'rUp',
		'mouseover':function(){keyControlAction = 'rUp';keyCanMoveDiv = false;},
		'mousedown':function(event){resizeAction(event,"rUp")}}).addClass("publicDiv").appendTo($("#dragDiv"+currentSerialNum));
		$('<div>',{'id':'rDown'+currentSerialNum,'class':'rDown',
		'mouseover':function(){keyControlAction = 'rDown';keyCanMoveDiv = false;},
		'mousedown':function(event){ resizeAction(event,"rDown")}}).addClass("publicDiv").appendTo($("#dragDiv"+currentSerialNum));
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
			//console.log("当前的动作"+currentDriection);
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
	var widthBefore = currentDragDiv.offsetWidth;//选取框变化前的宽度
	addWidth = x - getPosition(currentDragDiv).left - widthBefore;//鼠标移动后增加的宽度
	currentDragDiv.style.width = addWidth + widthBefore + "px";//选取框变化后
}
//up移动
function upMove(e){
	var y = e.clientY;//鼠标纵坐标
	var mainY = getPosition(currentDragDiv).top;//选取框相对于屏幕上边的距离
	var addHeight = mainY - y;//增加的高度
	var heightBefore = currentDragDiv.offsetHeight;//原来的高度
	currentDragDiv.style.height = 	heightBefore + addHeight + "px";
	currentDragDiv.style.top = currentDragDiv.offsetTop - addHeight + "px";
}
//left移动
function leftMove(e){
	var x = e.clientX;//鼠标横坐标
	var mainX  = getPosition(currentDragDiv).left;
	var addWidth = 	mainX - x;//增加的宽度
	var widthBefore = currentDragDiv.offsetWidth;//原来的宽度
	currentDragDiv.style.width = widthBefore + addWidth +"px";
	currentDragDiv.style.left = currentDragDiv.offsetLeft - addWidth + "px";
}
//down移动
function downMove(e){
	var y = e.clientY;//鼠标纵坐标
	var heightBefore = currentDragDiv.offsetHeight//原来的高度 -2是减去两边边框的大小和
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
	//var boder = $(oobb.childNodes).detach('div');//移除所有的div
	//$(currentSelectedTag).appendTo($(oobb));//将选择的标签添加进来
	var boder = $(oobb).children("div.publicDiv").detach();
	//console.log($(oobb).attr("id"));
	//console.log("隐藏边框"+$(oobb).attr("id")+"_boder");
	saveCurrntBoder.put($(oobb).attr("id")+"boder",boder);//将这个存放到map,以便等下显示出来(这里加一个boder是为了不和前面div的ID重复了)
}
//显示边框
function displayBoder(oob){
	$(oob).css({'border':'1px solid #000000'});//显示实线边
	//$(currentSelectedTag).appendTo($(oob));//将选择的标签添加进来
	//console.log("显示边框");
	if(!saveCurrntBoder.isEmpty())
			saveCurrntBoder.get($(oob).attr("id")+"boder").appendTo(oob);//取到map中的边框值(这里加一个boder是为了不和前面div的ID重复了)
	//console.log("显示边框"+$(oob).attr("id")+"_boder");
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
	{
		removeBoder(opreaObj);
	}
		
}
//键盘上下左右控制大小 
$(document).keydown(function(){
	//左37上38右39下40event.keyCode
	//console.log("要移动的边框"+keyControlAction);
	//console.log("按下的键值"+event.keyCode)
	if(keyCanMoveDiv)
		doSomeKeyMoveOpra(event.keyCode);
	else{
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
	}
});
//左边框 向左移动
function keyLeftMoveLeft(){
	var widthBefore = currentDragDiv.offsetWidth ;//原来的宽度
	currentDragDiv.style.width = widthBefore + 1 +"px";
	currentDragDiv.style.left = currentDragDiv.offsetLeft - 1 + "px";
	
	console.log("left:"+currentDragDiv.style.left);
	console.log("width"+currentDragDiv.style.width);
}
//左边框 向右移动
function keyLeftMoveRight(){
	var widthBefore = currentDragDiv.offsetWidth ;//原来的宽度
	currentDragDiv.style.width = widthBefore -1 +"px";
	currentDragDiv.style.left = currentDragDiv.offsetLeft + 1 + "px";
}
//右边框 向右移动
function keyRightMoveLeft(){
	currentDragDiv.style.width = currentDragDiv.offsetWidth  - 1 +"px";
	//console.log(currentDragDiv.offsetWidth)
}
//右边框 向左移动
function keyRightMoveRight(){
	currentDragDiv.style.width = currentDragDiv.offsetWidth  + 1 +"px";
	//console.log(currentDragDiv.offsetWidth)
}
//上边框 向上移动
function keyUpMoveUp(){
	var heightBefore = currentDragDiv.offsetHeight ;//原来的高度
	currentDragDiv.style.height = 	heightBefore + 1 + "px";
	currentDragDiv.style.top = currentDragDiv.offsetTop - 1 + "px";
}
//上边框 向下移动
function keyUpMoveDown(){
	var heightBefore = currentDragDiv.offsetHeight ;//原来的高度
	currentDragDiv.style.height = heightBefore - 1 + "px";
	currentDragDiv.style.top = currentDragDiv.offsetTop + 1 + "px";
	
	//console.log(currentDragDiv.offsetHeight)
}
//下边框 向上移动
function keyDownMoveUp(){
	currentDragDiv.style.height = currentDragDiv.offsetHeight   - 1 +"px";
	//console.log(currentDragDiv.offsetHeight)
}
//下边框 向下移动
function keyDownMoveDown(){
	currentDragDiv.style.height = currentDragDiv.offsetHeight  + 1 +"px";
	//console.log(currentDragDiv.offsetHeight)
}
//键盘控制微调
function doSomeKeyMoveOpra(keyCode){
	if(event.keyCode == 37)
			currentDragDiv.style.left = currentDragDiv.offsetLeft - 1 +"px";
	if(event.keyCode == 38)
			currentDragDiv.style.top = currentDragDiv.offsetTop - 1 +"px";
	if(event.keyCode == 39)
			currentDragDiv.style.left= currentDragDiv.offsetLeft + 1 +"px";
	if(event.keyCode == 40)
			currentDragDiv.style.top = currentDragDiv.offsetTop + 1 +"px";
}
var isKeyCtrlDown = false;//是否按下了ctrl键
var currentDivArrayList = new Array();
$(document).keydown(function(event){
	if(event.shiftKey){
		if(!isContainCurrentDivArrayList(currentDragDiv))
			currentDivArrayList.push(currentDragDiv);
		}
	displaySelectDivBoder();
	//console.log("数组的长度："+currentDivArrayList.length);
	//console.log("id:"+$(currentDragDiv).attr("id"));
	}
);
//$(document).keyup(function(event){
//	if(event.keyCode == 17){
//		removeAllDivBoder();
//	}
//});
//判断当前的控件是否在数组中
function isContainCurrentDivArrayList(currentObj){
	if(currentDivArrayList.length != 0 )
		for(var x = 0; x<currentDivArrayList.length;x++){
				if(currentObj == currentDivArrayList[x])
					return true;
			}
	else 
		return false;
}
//显示已选的所有div的边框
function displaySelectDivBoder(){
	for(var x = 0; x<currentDivArrayList.length;x++)
				displayBoder(currentDivArrayList[x]);
}
//隐藏所有div的边框
function removeAllDivBoder(){
		for(var x = 0; x<currentDivArrayList.length;x++)
				removeBoder(currentDivArrayList[x]);
		currentDivArrayList.length = 0;
		//currentDragDiv = null;
}
///**
// * 实现鼠标拖动选取控件
// * **/
var isActiveSelectRec = false;//判断鼠标是否在工作区，判断的在getXandY()函数
var startX = 0, startY = 0;
var flag = false;
var retcLeft = "0px", retcTop = "0px", retcHeight = "0px", retcWidth = "0px";
var sDiv;
//鼠标按下
document.onmousedown = function(event){
	//if判断是否按下的鼠标的左键
	if(event.which ==1 && isActiveSelectRec){
		currentDivArrayList.length = 0;//清空选择框里
		//console.log("onmousedown");
		 flag = true;
		  try{
		   startX = event.clientX;
		   startY = event.clientY;
		   sDiv = document.createElement("div");
		   sDiv.className = "selectRec";
		   sDiv.style.marginLeft = startX + "px";
		   sDiv.style.marginTop = startY + "px";
		  }catch(event){
		  //alert(event);
		  }
	}
}
//鼠标移动
document.onmousemove = function(event){
	if(event.which == 1 && isActiveSelectRec){
		//console.log("onmousemove");
		if(flag){
			document.getElementById("workSpace").appendChild(sDiv);
	   try{
		   retcLeft = (startX - event.clientX > 0 ? event.clientX : startX);
		   retcTop = (startY - event.clientY > 0 ? event.clientY : startY);
		   retcHeight = Math.abs(startY - event.clientY);
		   retcWidth = Math.abs(startX - event.clientX );
		   sDiv.style.marginLeft = retcLeft + "px";
		   sDiv.style.marginTop = retcTop + "px";
		   sDiv.style.width = retcWidth + "px";
		   sDiv.style.height = retcHeight + "px";
		   isContainAnyDiv();
	   }catch(event){
	    //alert(e);
	   } 
	  }
	}
}
//鼠标抬起
document.onmouseup = function(event){
	if(event.which == 1 && isActiveSelectRec){
			//console.log("onmouseup");
			try{
			  //document.getElementById("workSpace").removeChild(sDiv);
			  $(".selectRec").remove();//草泥马  干掉onmouserdown创建出来的div
			  }catch(e){
			   //alert(e);
			  }
			  flag = false;
			}
}
//判断是否包含了 控件	
function isContainAnyDiv(){
	var leftUpx,leftUpy,rightUpx,rightUpy,leftDownx,leftDowny,rightDownx,rightDowny;
	for(var i = 0;i<currentDragDivMap.values().length;i++)
	{
		leftUpx = currentDragDivMap.values()[i].offsetLeft;
		leftUpy = currentDragDivMap.values()[i].offsetTop;
		
		rightUpx = currentDragDivMap.values()[i].offsetLeft + currentDragDivMap.values()[i].offsetWidth;
		rightUpy = currentDragDivMap.values()[i].offsetTop;
		
		leftDownx = currentDragDivMap.values()[i].offsetLeft;
		leftDowny =  currentDragDivMap.values()[i].offsetTop + currentDragDivMap.values()[i].offsetHeight;
		
		rightDownx = currentDragDivMap.values()[i].offsetLeft + currentDragDivMap.values()[i].offsetWidth;
		rightDowny = currentDragDivMap.values()[i].offsetTop + currentDragDivMap.values()[i].offsetHeight;
//		console.log("左上角:"+leftUpx+"——"+leftUpy);
//		console.log("右上角:"+rightUpx+"——"+rightUpy);
//		console.log("左下角:"+leftDownx+"——"+leftDowny);
//		console.log("右下角:"+rightDownx+"——"+rightDowny);
		if(isInSelectDiv(leftUpx,leftUpy,rightUpx,rightUpy,leftDownx,leftDowny,rightDownx,rightDowny)){
			displayBoder(currentDragDivMap.values()[i]);
			if(!isContainCurrentDivArrayList(currentDragDivMap.values()[i]))
				currentDivArrayList.push(currentDragDivMap.values()[i]);
		}else{
			removeBoder(currentDragDivMap.values()[i]);
			if(isContainCurrentDivArrayList(currentDragDivMap.values()[i]))
				currentDivArrayList.pop(currentDragDivMap.values()[i]);
		}
	}
}
//判断是否在选框里的核心算法
function isInSelectDiv(lux,luy,rux,ruy,ldx,ldy,rdx,rdy){
	if(lux > retcLeft &&  luy > retcTop && lux < retcLeft+retcWidth && luy < retcTop+retcHeight)
		return true;
	if(rux > retcLeft &&  ruy > retcTop && rux < retcLeft+retcWidth && ruy < retcTop+retcHeight)
		return true;
	if(ldx > retcLeft &&  ldy > retcTop && ldx < retcLeft+retcWidth && ldy < retcTop+retcHeight)
		return true;
	if(rdx > retcLeft &&  rdy > retcTop && rdx < retcLeft+retcWidth && rdy < retcTop+retcHeight)
		return true;
	return false;
}
	
