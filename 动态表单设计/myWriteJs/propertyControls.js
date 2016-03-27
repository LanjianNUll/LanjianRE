$(function(){
	$("#full,#fontColor,#boderColor,#fontShadow").spectrum({
	    color: "#ffffff",//显示当前选定的颜色
	    flat: false,
	    showInput: true,
	    className: "full-spectrum",
	    showInitial: true,
	    showPalette: true,
	    showSelectionPalette: true,
	    maxPaletteSize: 10,
	    preferredFormat: "hex",
	    move: function (color) {
	        
	    },
	    show: function () {
	    
	    },
	    beforeShow: function () {
	    
	    },
	    hide: function () {
	    
	    },
	    change: function() {
	        
	    },
	    palette: [
	        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
	        "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
	        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
	        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], 
	        ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", 
	        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", 
	        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", 
	        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", 
	        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", 
	        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
	        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
	        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
	        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", 
	        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
	    ]
	});	
});

//当鼠标选定某个控件是初始化属性栏的值
function initPropertySomeMsg(){
	//初始化大小和位置的值
	var DX = $(currentDragDiv).css("left");
	DX = DX.substring(0,DX.length-2);//去除"px"
	var DY = $(currentDragDiv).css("top");
	DY = DY.substring(0,DY.length-2);
	var DW = $(currentDragDiv).css("width");
	DW = DW.substring(0,DW.length-2);
	var DH = $(currentDragDiv).css("height");
	DH = DH.substring(0,DH.length-2);
	
	$("#divX").val(DX);
	$("#divY").val(DY);
	$("#divWidth").val(DW);
	$("#divHeight").val(DH);
	
	//初始化边框的值
	var BD = $(currentDragDiv).children(".selectTag").css("border-width");
	var BS = $(currentDragDiv).children(".selectTag").css("border-style");
	var BC = $(currentDragDiv).children(".selectTag").css("border-color");
	
	$("#boderWidth").val(BD);
	$("#boderStyle").val(BS);
	$("#boderColor").val(BC);
}

//改变控件的背景颜色
function changeBackgroundColor(){
	//console.log($("#full").val())
	var color = $("#full").val();
	$(currentDragDiv).children(".selectTag").css({"background-color":color});
}
//改变控件的背景图案
function changeBackgroundPicture(){
	//console.log($("#picture").val());
}
//改变控件的高度
function changeDivHeight(){
	currentDragDiv.style.height = $("#divHeight").val()+"px";
}
//控件的宽度
function changeDivWidth(){
	currentDragDiv.style.width = $("#divWidth").val()+"px";
}
//控件位置 X
function changeDivX(){
	currentDragDiv.style.left = $("#divX").val()+"px";
}
//Y
function changeDivY(){
	currentDragDiv.style.top = $("#divY").val()+"px";
}
//改变边框的宽度
function changeBoderWidth(){
	//console.log($("#boderWidth").val());
	$(currentDragDiv).children(".selectTag").css({"border-width":$("#boderWidth").val()});
}
//样式
function changeBoderStyle(){
	//console.log($("#boderStyle").val());
	$(currentDragDiv).children(".selectTag").css({"border-style":$("#boderStyle").val()});
}
//颜色
function changeBoderColor(){
	//console.log($("#boderColor").val());
	$(currentDragDiv).children(".selectTag").css({"border-color":$("#boderColor").val()});
}
//改变输入框控件的名称
function changeInputName(){
	
}











