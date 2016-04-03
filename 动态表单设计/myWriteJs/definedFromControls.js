function createRadio(){//创建一个单项标签
	var publicSpan = $("<span>",{"name":"Radio"});
	var radioTag = null;
	$("<p>",{'class':'radioP'}).text("你对你的生活满意吗")
		.appendTo(publicSpan);
	$("<label>",{'class':'radioLabel1'}).text("选项1").appendTo(publicSpan);
	$("<input>",{'class':'radioInput1','type':'radio','name':'radio'})
		.appendTo(publicSpan);
	$("<label>",{'class':'radioLabel2'}).text("选项2").appendTo(publicSpan);
	$("<input>",{'class':'radioInput2','type':'radio','name':'radio'})
		.appendTo(publicSpan);
	$("<label>",{'class':'radioLabel3'}).text("选项3").appendTo(publicSpan);
	$("<input>",{'class':'radioInput3','type':'radio','name':'radio'})
		.appendTo(publicSpan).appendTo(publicSpan);
	$("<label>",{'class':'radioLabel4'}).text("").appendTo(publicSpan).hide();
	$("<input>",{'class':'radioInput4','type':'radio','name':'radio'}).hide()
		.appendTo(publicSpan).appendTo(publicSpan);
	radioTag = publicSpan;
	return radioTag;
}
//创建下拉菜单
function createSelect(){
	var publicSpan = $("<span>",{"name":"xialaSelect"});
	$("<label>",{'class':'xialaSeclectClass'}).text("来吧 选个你想要的").appendTo(publicSpan);
	var selectTag = $('<select>',{'class':'xialaselectTag'}).appendTo(publicSpan);
	$('<option>',{'class':'selectOption1'}).text("我的选择与众不同").appendTo(selectTag);
	$('<option>',{'class':'selectOption2'}).text("选择品牌1").appendTo(selectTag);
	$('<option>',{'class':'selectOption3'}).text("选择品牌2").appendTo(selectTag);
	$('<option>',{'class':'selectOption4','hidden':'true'}).text("").appendTo(selectTag);
	$('<option>',{'class':'selectOption5','hidden':'true'}).text("").appendTo(selectTag);
	$('<option>',{'class':'selectOption6','hidden':'true'}).text("").appendTo(selectTag);
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
	$("<input>",{'class':'checkBox1','type':'checkbox','name':'checkBox'})
		.appendTo(publicSpan);
	$("<label>",{'class':'Clabel1'}).text("苹果 ").appendTo(publicSpan);
	$("<input>",{'class':'checkBox2','type':'checkbox','name':'checkBox'})
		.appendTo(publicSpan);
	$("<label>",{'class':'Clabel2'}).text("桃子").appendTo(publicSpan);
	$("<input>",{'class':'checkBox3','type':'checkbox','name':'checkBox'})
		.appendTo(publicSpan).appendTo(publicSpan);
	$("<label>",{'class':'Clabel3'}).text("香蕉").appendTo(publicSpan);
	$("<input>",{'class':'checkBox4','type':'checkbox','name':'checkBox'})
		.appendTo(publicSpan).appendTo(publicSpan);
	$("<label>",{'class':'Clabel4'}).text("梨").appendTo(publicSpan);
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
	$("<label>",{'class':'dateBoxlabel'}).text("日 期").appendTo(publicSpan);
	$("<input>",{'class':'dateBoxinput','type':'text','name':'dateBox'}).datepicker()
		.appendTo(publicSpan);
	return publicSpan;
}
function createListBoxOne(){
	var publicSpan = $("<span>",{"name":"ListBoxOne"});
	$("<label>",{"class":"ListBoxOneName"}).text("姓   名").appendTo(publicSpan);
	$("<input>",{'class':'listBoxOneinputClass'}).appendTo(publicSpan);
	var selectTag = $('<select>',{'class':'listBoxOneinputTag','multiple':'multiple'}).appendTo(publicSpan);
	$('<option>',{'class':'listBoxOneOption1'}).text("我的选择与众不同").appendTo(selectTag);
	$('<option>',{'class':'listBoxOneOption2'}).text("选择品牌1").appendTo(selectTag);
	$('<option>',{'class':'listBoxOneOption3'}).text("选择品牌2").appendTo(selectTag);
	$('<option>',{'class':'listBoxOneOption4'}).text("23").appendTo(selectTag);
	$('<option>',{'class':'listBoxOneOption5'}).text("23").appendTo(selectTag);
	$('<option>',{'class':'listBoxOneOption6'}).text("255").appendTo(selectTag);
	return publicSpan;
}
function createListBoxTwo(){
	var publicSpan = $("<span>",{"name":"ListBoxTwo"});
	$("<label>",{"class":"ListBoxTwoName"}).text("姓   名").appendTo(publicSpan);
	$("<input>",{'class':'listBoxTwoinputClass'}).appendTo(publicSpan);
	var selectTag = $('<select>',{'class':'listBoxOneinputTag'}).appendTo(publicSpan);
	$('<option>',{'class':'listBoxTwoOption1'}).text("我的选择与众不同").appendTo(selectTag);
	$('<option>',{'class':'listBoxTwoOption2'}).text("选择品牌1").appendTo(selectTag);
	$('<option>',{'class':'listBoxTwoOption3'}).text("选择品牌2").appendTo(selectTag);
	$('<option>',{'class':'listBoxTwoOption4'}).text("23").appendTo(selectTag);
	$('<option>',{'class':'listBoxTwoOption5'}).text("23").appendTo(selectTag);
	$('<option>',{'class':'listBoxTwoOption6'}).text("255").appendTo(selectTag);
	return publicSpan;
}

function createfileBox(){
	var publicSpan = $("<span>",{"name":"fileBox"});
	$("<input>",{'class':'file','type':'file','name':'fileBoxNaem'})
	.css("border","solid 1px")
	.appendTo(publicSpan)
	return publicSpan;    
}













