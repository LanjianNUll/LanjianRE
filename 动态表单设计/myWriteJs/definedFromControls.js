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
	$("<input>",{'class':'dateBoxinput','type':'text','name':'dateBox'})
		.datepicker({//添加日期选择功能
            numberOfMonths:1,//显示几个月  
            showButtonPanel:true,//是否显示按钮面板  
            dateFormat: 'yy年mm月dd日',//日期格式  
            clearText:"清除",//清除日期的按钮名称  
            closeText:"关闭",//关闭选择框的按钮名称  
            yearSuffix: '年', //年的后缀  
            showMonthAfterYear:true,//是否把月放在年的后面  
            monthNames: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],  
            dayNamesMin: ['日','一','二','三','四','五','六'], 
          })
		.appendTo(publicSpan);
	$("<button>",{"click":function(){setCurrentDate(event)}}).text("now").appendTo(publicSpan);
	return publicSpan;
}
function setCurrentDate(e){
	var d = new Date();
	var dStr = d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+'日';
	$(e.srcElement).prev(".dateBoxinput").val(dStr);
}

function createListBoxOne(){
	var publicSpan = $("<span>",{"name":"ListBoxOne"});
	$("<label>",{"class":"ListBoxOneName"}).text("姓   名").appendTo(publicSpan);
	$("<input>",{'class':'listBoxOneinputClass'}).appendTo(publicSpan);
	var selectTag = $('<select>',{'class':'listBoxOneinputTag','multiple':'multiple','change':function(){
		getOptionAndToStr(event);
	}}).appendTo(publicSpan);
	$('<option>',{'class':'listBoxOneOption1'}).text("我的选择与众不同").appendTo(selectTag);
	$('<option>',{'class':'listBoxOneOption2'}).text("选择品牌1").appendTo(selectTag);
	$('<option>',{'class':'listBoxOneOption3'}).text("选择品牌2").appendTo(selectTag);
	$('<option>',{'class':'listBoxOneOption4'}).text("23").appendTo(selectTag);
	$('<option>',{'class':'listBoxOneOption5'}).text("23").appendTo(selectTag);
	$('<option>',{'class':'listBoxOneOption6'}).text("255").appendTo(selectTag);
	return publicSpan;
}
//将选择的拼接起来
function getOptionAndToStr(e){
	//console.log($(e.srcElement).children(":selected").val())
	var str = $(e.srcElement).prev(".listBoxOneinputClass").val();
	if(str != '')
		str+='\\';
	$(e.srcElement).prev(".listBoxOneinputClass").val(str+$(e.srcElement).children(":selected").val())
}
function createListBoxTwo(){
	var publicSpan = $("<span>",{"name":"ListBoxTwo"});
	$("<label>",{"class":"ListBoxTwoName"}).text("姓   名").appendTo(publicSpan);
	$("<input>",{'class':'listBoxTwoinputClass'}).appendTo(publicSpan);
	var selectTag = $('<select>',{'name':'selectTag','class':'listBoxTwoinputTag','change':function (){
		getOption(event);
	}}).appendTo(publicSpan);
	$('<option>',{'class':'listBoxTwoOption1'}).text("我的选择与众不同").appendTo(selectTag);
	$('<option>',{'class':'listBoxTwoOption2'}).text("选择品牌1").appendTo(selectTag);
	$('<option>',{'class':'listBoxTwoOption3'}).text("选择品牌2").appendTo(selectTag);
	$('<option>',{'class':'listBoxTwoOption4'}).text("23").appendTo(selectTag);
	$('<option>',{'class':'listBoxTwoOption5'}).text("23").appendTo(selectTag);
	$('<option>',{'class':'listBoxTwoOption6'}).text("255").appendTo(selectTag);
	return publicSpan;
}
//将下列选中的选项填到input中
function getOption(e){
	//console.log("hello world");
	//console.log($(e.srcElement).children(":selected").val());
	$(e.srcElement).prev(".listBoxTwoinputClass").val($(e.srcElement).children(":selected").val());
}
function createfileBox(){
	var publicSpan = $("<span>",{"name":"fileBox"});
	$("<input>",{'class':'file','type':'file','name':'fileBoxNaem'})
	.css("border","solid 1px")
	.appendTo(publicSpan)
	return publicSpan;    
}













