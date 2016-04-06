//工作区间的边界值，为了判断对齐等操作是否会让表单控件超出区域
var xNum = $("#workSpace").offsetLeft+$("#workSpace").offsetWidth;
var yNum = $("#workSpace").offsetTop+$("#workSpace").offsetHeight;

function leftAlign(){
	/***
	 * 选取第一个为对于标准*
	 * */
	var XLeft =  currentDivArrayList[0].offsetLeft;
	console.log(XLeft);
	for(var x = 1; x<currentDivArrayList.length;x++)
	{
			currentDivArrayList[x].style.left = XLeft + "px";
	}
	removeAllDivBoder();//操作完成，取消边框
}
function rightAlign(){
	/***
	 * 选取第一个为对于标准*
	 * */
	var XLeft =  currentDivArrayList[0].offsetLeft+currentDivArrayList[0].offsetWidth;
	console.log(XLeft);
	for(var x = 1; x<currentDivArrayList.length;x++)
	{
		currentDivArrayList[x].style.left = XLeft - currentDivArrayList[x].offsetWidth+ "px";
	}
	removeAllDivBoder();//操作完成，取消边框
}
//清空工作区
function clearAll(){
	
	$('#dialog_clearAllDiv').dialog({
      resizable: false,
      height:140,
      modal: true,
      buttons: {
        "确定": function() {
          $( this ).dialog( "close" );
          $("#workSpace").children().remove();
			currentDragDivMap.clear();
			currentSerialNum = 0;
			currentDragDiv = null;
			isMouseLeftKeyDown = false;
			currentDriection = null;
			keyControlAction = null;
			keyCanMoveDiv = false;
			//清空用到的控件
			disPlayHistory();
		  },
        "取消": function() {
          $( this ).dialog( "close" );
        }
      }
    });
	
	
	
}
//等高
function equalHeight(){
	var XHeight = currentDivArrayList[0].offsetHeight;
	for(var x = 1; x<currentDivArrayList.length;x++)
	{
		currentDivArrayList[x].style.height = XHeight + "px";
	}
	removeAllDivBoder();//操作完成，取消边框
}
//等宽
function equalWidth(){
	var XWidth = currentDivArrayList[0].offsetWidth;
	for(var x = 1; x<currentDivArrayList.length;x++)
	{
		currentDivArrayList[x].style.width = XWidth + "px";
	}
	removeAllDivBoder();//操作完成，取消边框
}
//居中
function centerAlign(){
	var XCenter = $("#workSpace").width()/2;
	var XCenterLeft = $("#selectTag").width();
	//console.log(XCenterLeft);
	var leftVar ;
	for(var x = 0; x<currentDivArrayList.length;x++)
	{
		leftVar = XCenter - (currentDivArrayList[x].offsetWidth)/2 + XCenterLeft;
		currentDivArrayList[x].style.left = leftVar  + "px";
		console.log(currentDivArrayList[x].style.left);
	}
	removeAllDivBoder();//操作完成，取消边框
}
var r = 1;//缩放比例
var leftOfWorkSpace;
var topOfWorkSpace;
//预览
function previewOtherPage(){
	isPreViewIng = true;
	$("#exitPreViewpage").show();//显示退出预览的按钮
	
	leftOfWorkSpace = $("#workSpace").offset().left;
	topOfWorkSpace = $("#workSpace").offset().top;
	
	var widthOfWorkSpace = $("#workSpace").width();
	var heightOfWorkSpace = $("#workSpace").height();
	console.log(widthOfWorkSpace);
	
	//隐藏其他控件
	$("#selectTag").slideUp("slow");
	$("#top").slideUp("slow");
	$("#historyAndProperty").slideUp("slow");
	$("#afterbody").hide();
	
	$("#topAndSpace").css({"width":"100%","height":"100%"});
	$("#workSpace").css({"width":"100%","height":"100%"});
	
	var afterWidthOfWorkSpace = $("#workSpace").width();
	var afterHeightOfWorkSpace = $("#workSpace").height();
	console.log(afterWidthOfWorkSpace);
	//缩放比例
	r = afterWidthOfWorkSpace/widthOfWorkSpace;
	console.log(r);
	//全屏预览时 控件的缩放  
	for(var ic = 0; ic < currentDragDivMap.values().length; ic++){
		currentDragDivMap.values()[ic].style.left = 
					$(currentDragDivMap.values()[ic]).offset().left-leftOfWorkSpace+"px";
		currentDragDivMap.values()[ic].style.top = 
					$(currentDragDivMap.values()[ic]).offset().top-topOfWorkSpace+"px";
					
		currentDragDivMap.values()[ic].style.width =  $(currentDragDivMap.values()[ic]).width()*r + "px";	
		currentDragDivMap.values()[ic].style.height =  $(currentDragDivMap.values()[ic]).height()*r + "px";	
		removeBoder(currentDragDivMap.values()[ic]);
		
	}
}

//退出预览
function exitPreViewPage(){
	isPreViewIng = false;
	$("#exitPreViewpage").hide();//隐藏退出预览的按钮
	//隐藏其他控件
	$("#selectTag").slideDown("slow");
	$("#top").slideDown("slow");
	$("#historyAndProperty").slideDown("slow");
	$("#afterbody").show();
	
	$("#topAndSpace").css({"width":"92%","height":"95%"});
	$("#workSpace").css({"width":"100%","height":"90%"});
	
	for(var ic = 0; ic < currentDragDivMap.values().length; ic++){
		currentDragDivMap.values()[ic].style.left = 
					$(currentDragDivMap.values()[ic]).offset().left+leftOfWorkSpace+"px";
		currentDragDivMap.values()[ic].style.top = 
					$(currentDragDivMap.values()[ic]).offset().top+topOfWorkSpace+"px";
					
		currentDragDivMap.values()[ic].style.width =  $(currentDragDivMap.values()[ic]).width()*(1/r) + "px";	
		currentDragDivMap.values()[ic].style.height =  $(currentDragDivMap.values()[ic]).height()*(1/r) + "px";
	}
}






