function creatFromControls(tagName){	
};

function createRadio(){//创建一个单项标签
	var publicSpan = $("<span>",{});
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
	var publicSpan = $("<span>",{});
	$("<label>").text("来吧 选个你想要的").appendTo(publicSpan);
	var selectTag = $('<select>',{'class':'selectTag'}).appendTo(publicSpan);
	$('<option>',{'class':'selectOption'}).text("我的选择与众不同").appendTo(selectTag);
	$('<option>',{'class':'selectOption'}).text("选择品牌1").appendTo(selectTag);
	$('<option>',{'class':'selectOption'}).text("选择品牌2").appendTo(selectTag);
	return publicSpan;
}
//创建输入文本框一
function createInputOne(){
	var publicSpan = $("<span>",{});
	$("<label>").text("姓   名").appendTo(publicSpan);
	$("<input>",{'class':'inputOne','type':'text','name':'inputOne'})
		.appendTo(publicSpan);
	return publicSpan;
}
//创建输入文本框二
function createInputTwo(){
	var publicSpan = $("<span>",{});
	$("<p>").text("姓   名").appendTo(publicSpan);
	$("<input>",{'class':'inputTwo','type':'text','name':'inputTwo'})
		.appendTo(publicSpan);
	return publicSpan;
}
//创建提交按钮
function createSubmit(){
	var publicSpan = $("<span>",{});
	$("<input>",{'class':'submitBtn','type':'submit','name':'submitBtn'})
		.appendTo(publicSpan);
	return publicSpan;
}
//创建文本域
function createTextArea(){
	var publicSpan = $("<span>",{});
	$("<p>",{'class':'textAreaP'}).text("您的意见对我很重要:")
		.appendTo(publicSpan);
	$('<textarea>',{'class':'textArea'}).text("这里可以输入你想说的话").appendTo(publicSpan);
	return publicSpan;
}
//创建复选框
function createCheckBox(){
	var publicSpan = $("<span>",{}); 
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
	var publicSpan = $("<span>",{}); 
	$("<p>",{'class':'pP'}).text("我是一个单纯的文本").appendTo(publicSpan);
	return publicSpan;
	
}












