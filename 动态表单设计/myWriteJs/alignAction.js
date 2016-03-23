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
	$("#workSpace").children().remove();
	currentDragDivMap.clear();
	currentSerialNum = 0;
	currentDragDiv = null;
	isMouseLeftKeyDown = false;
	currentDriection = null;
	keyControlAction = null;
	keyCanMoveDiv = false;
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











