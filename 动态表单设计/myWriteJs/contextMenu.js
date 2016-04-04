var copyCurrentDivTempName= null;
function openContextMeun() {
    $(currentDragDiv).contextPopup({
      items: [
        {label:'属性',     icon:'img/contextMeunSetting.png',  
        	action:function() { aboutProperty(); } },
        {label:'删除', icon:'img/contextMeunDelete.png',  
        	action:function() { deleteDivAction(); } },
        {label:'复制',         icon:'img/contextMeunCopy.png',  
        	action:function() { copyCurrentDiv(); } }
//      {label:'置于顶层',         icon:'img/contextMeunTest.png', 
//      	action:function() { moveToUpTop(); } },
//      {label:'上移一层',       icon:'img/contextMeunTest.png',   
//      	action:function() { moveToUp(); } },
//      {label:'置于底层',      icon:'img/contextMeunTest.png',     
//      	action:function() { moveToDownDown(); } },
//  	{label:'下移一层',      icon:'img/contextMeunTest.png',     
//  	action:function() { moveToDowm(); } }
      ]
    });
  };
//相关属性窗口
function aboutProperty(){
  	$("#historyAndProperty").slideDown("slow");
}
//删除当前div
function deleteDivAction(){
	
	$('#dialog_deleteCurrentDiv').dialog({
      resizable: false,
      height:140,
      modal: true,
      buttons: {
        "删除": function() {
          $( this ).dialog( "close" );
          $(currentDragDiv).remove();
        },
        "取消": function() {
          $( this ).dialog( "close" );
        }
      }
    });
 }
//复制当前div
function copyCurrentDiv(){
	if(currentDragDiv!=null){
		copyCurrentDivTempName = $(currentDragDiv).children("span").attr("name");
		//console.log("当前div的name值为："+copyCurrentDivTempName);
	}
}
////克隆一个对象
//function clone(myObj){  
//if(typeof(myObj) != 'object') return myObj;  
//if(myObj == null) return myObj;  
//  
//var myNewObj = new Object();  
//  
//for(var i in myObj)  
//   myNewObj[i] = clone(myObj[i]);  
//  
//return myNewObj;  
//}  
//粘贴当前div
function pasteCurrentDiv(){
	if(copyCurrentDivTempName!=null){
		isCanCreateChirdren = true;
		switch (copyCurrentDivTempName){//这里匹配可能乱序了  因为不影响所以就不改了 
		   	case "Radio":
		   		ww = 180;
		   		hh = 80;
		   		createTag(createRadio());
		   		break;
		   	case "Select":
		   		ww = 182;
		   		hh = 62;
		   		createTag(createSelect());
		   		break;
			case "InputOne":
					ww = 230;
		   		hh = 30;
					createTag(createInputOne());
		   		break;
			case "InputTwo":
					ww = 200;
		   		hh = 84;
		   		createTag(createInputTwo());
		   		break;
			case "Submit":
					ww = 55;
		   		hh = 30;
					createTag(createSubmit());
		   		break;
			case "TextArea":
					ww = 270;
		   		hh = 120;
		   		createTag(createTextArea());
		   		break;
			case "CheckBox":
					ww = 210;
		   		hh = 80;
		   		createTag(createCheckBox());
		   		break;
		   case "P":
		   		ww = 155;
		   		hh = 45;
		   		createTag(createP());
		   		break;
		   	default:
		   		break;
		}
		$('#workSpace').trigger(CreateChirdren(event));//模拟鼠标点击事件  触发创建新对象函数
	}
}
//移动至最上层
function moveToUpTop(){
	
}
//上移一层
function moveToUp(){
	
}
//移动到最下层
function moveToDownDown(){
	
}
//下移一层
function moveToDowm(){
	
}
//页面属性
function pageAboutProperty(){
	
}
var workspaceItems = [
		{label:'页面属性',     icon:'img/contextMeunProperties.png',
        	action:function() { pageAboutProperty(); } },
        {label:'粘贴', icon:'img/contextMeunPaste.png',  
        	action:function() { pasteCurrentDiv(); } },
     	 ]
$(function(){
	$("#workSpace").contextPopup({
		items:workspaceItems
	});
});








