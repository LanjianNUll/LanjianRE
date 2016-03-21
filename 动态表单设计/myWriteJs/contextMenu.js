var copyCurrentDivTemp = null;
function openContextMeun() {
    $(currentDragDiv).contextPopup({
      items: [
        {label:'属性',     icon:'img/contextMeunTest.png',  
        	action:function() { aboutProperty(); } },
        {label:'删除', icon:'img/contextMeunTest.png',  
        	action:function() { deleteDivAction(); } },
        {label:'复制',         icon:'img/contextMeunTest.png',  
        	action:function() { copyCurrentDiv(); } },
        {label:'置于顶层',         icon:'img/contextMeunTest.png', 
        	action:function() { moveToUpTop(); } },
        {label:'上移一层',       icon:'img/contextMeunTest.png',   
        	action:function() { moveToUp(); } },
        {label:'置于底层',      icon:'img/contextMeunTest.png',     
        	action:function() { moveToDownDown(); } },
    	{label:'下移一层',      icon:'img/contextMeunTest.png',     
    	action:function() { moveToDowm(); } }
      ]
    });
  };
//相关属性窗口
function aboutProperty(){
  	
}
//删除当前div
function deleteDivAction(){
  	if (confirm("确定删除当前控件？")) {  
           $(currentDragDiv).remove();
        }  
       
}
//复制当前div
function copyCurrentDiv(){
	
}
//粘贴当前div
function pasteCurrentDiv(){
	
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
		{label:'页面属性',     icon:'img/contextMeunTest.png',
        	action:function() { pageAboutProperty(); } },
        {label:'粘贴', icon:'img/contextMeunTest.png',  
        	action:function() { pasteCurrentDiv(); } },
     	 ]
$(function(){
	$("#workSpace").contextPopup({
		items:workspaceItems
	});
});








