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
	
	if(currentDivArrayList.length == 0){
		leftVar = XCenter - (currentDragDiv.offsetWidth)/2 + XCenterLeft;
		currentDragDiv.style.left = leftVar  + "px";
	}
	for(var x = 0; x<currentDivArrayList.length;x++)
	{
		leftVar = XCenter - (currentDivArrayList[x].offsetWidth)/2 + XCenterLeft;
		currentDivArrayList[x].style.left = leftVar  + "px";
		//console.log(currentDivArrayList[x].style.left);
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
//保存表单
var t2;
var saveSuccess = false;
function saveCurrentDivPage(){
	var doc = document.getElementById("workSpace");	
	var jsonObj = JSON.stringify(JsonML.fromHTML(doc));
	console.log(jsonObj);
	t2 = window.setInterval("progressAdd()",500);
	//去掉定时器的方法
	$('#progressDiv').dialog({
      resizable: false,
      height:100,
      modal: true
    });
    //将表单内容发送给服务器
    $.ajax({  
            type : "Post",  //提交方式  
            url : "http://localhost:8080/dynamicForm/saveJsonServlet",//路径  
            data : {  
                "jsonObj" : jsonObj 
            },//数据，这里使用的是Json格式进行传输  
            success : function(result) {//返回数据根据结果进行相应的处理  
            	if(result == "success"){
            		saveSuccess = true;
	               window.clearInterval(t2); 
					$('#progressDiv').dialog("close");
					document.getElementById("porgressBar").style.width= 0 +"%";
					pro = 0;
					$('#saveSuccess').dialog({
				      resizable: false,
				      height:150,
				      modal: true,
				       buttons: {
				        "确定": function() {
				          $( this ).dialog( "close" );
						  }
			       }
			    });
			   }else{
			   		saveSuccess = false;
			   }
            }  
       });  
}
var pro = 0;
function progressAdd(){
	
	pro = pro +5 ;
	document.getElementById("porgressBar").style.width= pro+"%";
	if(pro > 100){
		window.clearInterval(t2); 
			$('#progressDiv').dialog("close");
			document.getElementById("porgressBar").style.width= 0 +"%";
			pro = 0;
		if(saveSuccess){//保存成功
			$('#saveSuccess').dialog({
		      resizable: false,
		      height:150,
		      modal: true,
		       buttons: {
		        "确定": function() {
		          $( this ).dialog( "close" );
				  }
	        }
		 });
		}else{
			$('#saveFail').dialog({
		      resizable: false,
		      height:150,
		      modal: true,
		       buttons: {
		        "确定": function() {
		          $( this ).dialog( "close" );
				  }
	        }
		 });
		}
	}
}





