function createRadio(){//创建一个单项标签
	var publicSpan = $("<span>",{"name":"Radio"});
	var radioTag = null;
	$("<p>",{'class':'radioP'}).text("你对你的生活满意吗")
		.appendTo(publicSpan);
	$("<label>").text("选项").appendTo(publicSpan);
	$("<input>",{'class':'radioInput','type':'radio','name':'radio'})
		.appendTo(publicSpan);
	$("<label>").text("选项").appendTo(publicSpan);
	$("<input>",{'class':'radioInput','type':'radio','name':'radio'})
		.appendTo(publicSpan);
	$("<label>").text("选项").appendTo(publicSpan);
	$("<input>",{'class':'radioInput','type':'radio','name':'radio'})
		.appendTo(publicSpan).appendTo(publicSpan);
	radioTag = publicSpan;
	return radioTag;
}
//创建下拉菜单
function createSelect(){
	var publicSpan = $("<span>",{"name":"xialaSelect"});
	$("<label>",{'class':'xialaSeclectClass'}).text("来吧 选个你想要的").appendTo(publicSpan);
	var selectTag = $('<select>',{'class':'xialaselectTag'}).appendTo(publicSpan);
	$('<option>',{'class':'selectOption'}).text("我的选择与众不同").appendTo(selectTag);
	$('<option>',{'class':'selectOption'}).text("选择品牌1").appendTo(selectTag);
	$('<option>',{'class':'selectOption'}).text("选择品牌2").appendTo(selectTag);
	return publicSpan;
}
//创建输入文本框一
function createInputOne(){
	var publicSpan = $("<span>",{"name":"InputOne"});
	$("<label>",{"class":"inputName"}).text("姓   名").appendTo(publicSpan);
	$("<input>",{'class':'inputOne','type':'text','name':'inputOne','placeholder':'请输入。。。'})
		.appendTo(publicSpan);
	return publicSpan;
}

//创建提交按钮
function createSubmit(){
	var publicSpan = $("<span>",{"name":"Submit"});
	$("<input>",{'class':'submitBtn','type':'submit','name':'submitBtn'})
		.css({"width":"100%","height":"100%"})
		.appendTo(publicSpan);
	return publicSpan;
}
//创建文本域
function createTextArea(){
	var publicSpan = $("<span>",{"name":"TextArea"});
	$("<p>",{'class':'textAreaP'}).text("您的意见对我很重要:")
		.appendTo(publicSpan);
	$('<textarea>',{'class':'textAreaclass','placeholder':'说的什么吧。。。','overflow':'visible'})
		.css({"width":"100%","height":"75%"})
		.appendTo(publicSpan);
	return publicSpan;
}
//创建复选框
function createCheckBox(){
	var publicSpan = $("<span>",{"name":"CheckBox"}); 
	$("<p>",{'class':'checkBoxP'}).text("您喜欢的水果？").appendTo(publicSpan);
	$("<input>",{'class':'checkBox','type':'checkbox','name':'checkBox'})
		.appendTo(publicSpan);
	$("<label>").text("苹果 ").appendTo(publicSpan);
	$("<input>",{'class':'checkBox','type':'checkbox','name':'checkBox'})
		.appendTo(publicSpan);
	$("<label>").text("桃子").appendTo(publicSpan);
	$("<input>",{'class':'checkBox','type':'checkbox','name':'checkBox'})
		.appendTo(publicSpan).appendTo(publicSpan);
	$("<label>").text("香蕉").appendTo(publicSpan);
	$("<input>",{'class':'checkBox','type':'checkbox','name':'checkBox'})
		.appendTo(publicSpan).appendTo(publicSpan);
	$("<label>").text("梨").appendTo(publicSpan);
	return publicSpan;
}
function createP(){
	var publicSpan = $("<span>",{"name":"P"}); 
	$("<p>",{'class':'pP'}).text("我是一个单纯的文本").css({"width":"100%","height":"100%"}).appendTo(publicSpan);
	return publicSpan;
}
function createRec(){
	var publicSpan = $("<span>",{"name":"Rec"}).css({"width":"100%","height":"100%","background":"grey"});
	return publicSpan;
}
function createLine(){
	var publicSpan = $("<span>",{"name":"Line"});
	$("<hr>",{'class':'Hr'}).appendTo(publicSpan).css({"width":"100%","height":"100%"});
	return publicSpan;
}
function createErWeiMa(){
	var publicSpan = $("<span>",{"name":"ErWeiMa"});
	$("<img>",{'class':'Img'}).attr("src","img/erweima.png").css({"width":"100%","height":"100%"})
	.appendTo(publicSpan);
	return publicSpan;
}
function createDateBox(){
	var publicSpan = $("<span>",{"name":"DateBox"});
	$("<label>").text("日 期").appendTo(publicSpan);
	$("<input>",{'class':'dateBox','type':'text','name':'dateBox'}).datepicker()
		.appendTo(publicSpan);
	return publicSpan;
}

function createListBox(){
	var publicSpan = $("<span>",{"name":"listSelect"});
	return publicSpan;
}
















