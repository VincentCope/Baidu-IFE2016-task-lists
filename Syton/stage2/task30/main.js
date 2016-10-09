	//列出所有的提示信息
	var testResult={
		"name": ["必填，长度在4~16个字符之间","名称不能为空","名称长度必须在4~16个字符之间","名称格式正确"],
		"password": ["必填，长度在6~16个字符之间","密码不能为空","密码不能包含除数字和字母以外的字符","密码长度必须在6~16个字符之间","密码可用，请牢记您的密码"],
		"confirm": ["请再次输入密码","密码输入不一致","密码一致"],
		"email": ["请输入邮箱","邮箱格式错误","邮箱格式正确"],
		"phone": ["请输入手机号","您输入的手机号应该为11位","手机号格式正确","手机号格式错误"]
	}
	//添加事件句柄对象
	var eventUtil={
		addHandler: function(element,type,handler){
			if(element.addEventListener){
				element.addEventListener(type,handler,false);
			}else if(element.attachEvent){
				element.attachEvent('on'+type,handler);
			}else{
				element['on'+type]=handler;
			}
		},
		removeHandler: function(element,type,handler){
			if(element.removeEventListener){
				element.removeEventListener(type,handler,false);
			}else if(element.detachEvent){
				element.detachEvent('on'+type,handler);
			}else{
				element['on'+type]=null;
			}
		},
		getId: function(id){
			return document.getElementById(id);
		}
	}

	//检查名称输入
	function checkNameBlur(){
		var nameInput=eventUtil.getId('name');
		var namePrompt=eventUtil.getId('name-prompt');
		var nameValue=nameInput.value.trim();
		var chinese=/[\u4E00-\uFA29]|[\uE7C7-\uE7F3]/g;
		nameValue=nameValue.replace(chinese,'--');
		if(nameValue.length == 0){
			namePrompt.innerHTML=testResult["name"][1];
			namePrompt.style.color="red";
			nameInput.style.borderColor="red";
		}else if(nameValue.length < 4 || nameValue.length > 16){
			namePrompt.innerHTML=testResult["name"][2];
			namePrompt.style.color="red";
			nameInput.style.borderColor="red";
		}else{
			namePrompt.innerHTML=testResult["name"][3];
			namePrompt.style.color="green";
			nameInput.style.borderColor="green";
		}
	}
	function checkNameFocus(){
		var namePrompt=eventUtil.getId('name-prompt');
		var nameInput=eventUtil.getId('name');
		namePrompt.innerHTML=testResult["name"][0];
		namePrompt.style.color="gray";
		nameInput.style.borderColor="gray";
	}

	//检查密码输入
	function checkPasswordBlur(){
		var passwordInput=eventUtil.getId('password');
		var passwordPrompt=eventUtil.getId('password-prompt');
		window.confirmPassword=passwordInput.value;
		if(passwordInput.value.length == 0){
			passwordPrompt.innerHTML=testResult["password"][1];
			passwordPrompt.style.color="red";
			passwordInput.style.borderColor="red";
		}else if(/[^0-9a-z]/gi.test(passwordInput.value)){
			passwordPrompt.innerHTML=testResult["password"][2];
			passwordPrompt.style.color="red";
			passwordInput.style.borderColor="red";
		}else if(passwordInput.value.length > 16 || passwordInput.value.length < 4){
			passwordPrompt.innerHTML=testResult["password"][3];
			passwordPrompt.style.color="red";
			passwordInput.style.borderColor="red";
		}else{
			passwordPrompt.innerHTML=testResult["password"][4];
			passwordPrompt.style.color="green";
			passwordInput.style.borderColor="green";
		}
		return passwordInput.value;
	}
	function checkPasswordFocus(){
		var passwordInput=eventUtil.getId('password');
		var passwordPrompt=eventUtil.getId('password-prompt');
		passwordPrompt.innerHTML=testResult["password"][0];
		passwordPrompt.style.color="gray";
		passwordInput.style.borderColor="gray";
	}

	//再次确认密码
	function confirmPasswordBlur(){
		var passwordTestInput=eventUtil.getId('password-test');
		var passwordTestPrompt=eventUtil.getId('password-test-prompt');
		var passwordInput=eventUtil.getId('password');
		if(passwordTestInput.value == passwordInput.value && passwordInput.value.length != 0){
			passwordTestPrompt.innerHTML=testResult["confirm"][2];
			passwordTestPrompt.style.color="green";
			passwordTestInput.style.borderColor="green";
		}else{
			passwordTestPrompt.innerHTML=testResult["confirm"][1];
			passwordTestPrompt.style.color="red";
			passwordTestInput.style.borderColor="red";
		}

	}
	function confirmPasswardFocus(){
		var passwordTestInput=eventUtil.getId('password-test');
		var passwordTestPrompt=eventUtil.getId('password-test-prompt');
		passwordTestPrompt.innerHTML=testResult["confirm"][0];
		passwordTestPrompt.style.color="gray";
		passwordTestInput.style.borderColor="gray";
	}

	//检查邮箱
	function checkEmailBlur(){
		var emailInput=eventUtil.getId('email');
		var emailPrompt=eventUtil.getId('email-prompt');
		if(!/^\w+@[a-z0-9]+\.[a-z]{2,4}$/.test(emailInput.value)){
			emailPrompt.innerHTML=testResult["email"][1];
			emailPrompt.style.color="red";
			emailInput.style.borderColor="red";
		}else{
			emailPrompt.innerHTML=testResult["email"][2];
			emailPrompt.style.color="green";
			emailInput.style.borderColor="green";
		}
	}
	function checkEmailFocus(){
		var emailInput=eventUtil.getId('email');
		var emailPrompt=eventUtil.getId('email-prompt');
		emailPrompt.innerHTML=testResult["email"][0];
		emailPrompt.style.color="gray";
		emailInput.style.borderColor="gray";
	}

	//检查手机号
	function checkPhoneBlur(){
		var phoneInput=eventUtil.getId('phone');
		var phonePrompt=eventUtil.getId('phone-prompt');
		if(/\d+/g.test(phoneInput.value)){
			if(phoneInput.value.length != 11){
				phonePrompt.innerHTML=testResult["phone"][1];
				phonePrompt.style.color="red";
				phoneInput.style.borderColor="red";
			}else{
				phonePrompt.innerHTML=testResult["phone"][2];
				phonePrompt.style.color="green";
				phoneInput.style.borderColor="green";
			}
		}else{
			phonePrompt.innerHTML=testResult["phone"][3];
			phonePrompt.style.color="red";
			phoneInput.style.borderColor="red";
		}
	}
	function checkPhoneFocus(){
		var phoneInput=eventUtil.getId('phone');
		var phonePrompt=eventUtil.getId('phone-prompt');
		phonePrompt.innerHTML=testResult["phone"][0];
		phonePrompt.style.color="gray";
		phoneInput.style.borderColor="gray";
	}

	//提交事件函数
	function submitForm(){
		var oForm=eventUtil.getId('form');
		var nameInput=eventUtil.getId('name');
		var passwordInput=eventUtil.getId('password');
		var passwordTestInput=eventUtil.getId('password-test');
		var emailInput=eventUtil.getId('email');
		var phoneInput=eventUtil.getId('phone');
		if(nameInput.style.borderColor == "green" && passwordInput.style.borderColor == "green" && passwordTestInput.style.borderColor == "green" && emailInput.style.borderColor == "green" && phoneInput.style.borderColor == "green"){
			alert("提交成功");
		}else{
			alert("非常抱歉，输入的信息不符合要求，请重新输入正确的信息！");
		}

	}

	//为名称校验添加Focus和Blur事件
	eventUtil.addHandler(eventUtil.getId('name'),'focus',checkNameFocus);
	eventUtil.addHandler(eventUtil.getId('name'),'blur',checkNameBlur);

	//为密码校验添加Focus和Blur事件
	eventUtil.addHandler(eventUtil.getId('password'),'focus',checkPasswordFocus);
	eventUtil.addHandler(eventUtil.getId('password'),'blur',checkPasswordBlur);	

	//为确认密码校验添加Focus和Blur事件
	eventUtil.addHandler(eventUtil.getId('password-test'),'focus',confirmPasswardFocus);
	eventUtil.addHandler(eventUtil.getId('password-test'),'blur',confirmPasswordBlur);

	//为邮箱校验添加Focus和Blur事件
	eventUtil.addHandler(eventUtil.getId('email'),'focus',checkEmailFocus);
	eventUtil.addHandler(eventUtil.getId('email'),'blur',checkEmailBlur);

	//为手机号校验添加Focus和Blur事件
	eventUtil.addHandler(eventUtil.getId('phone'),'focus',checkPhoneFocus);
	eventUtil.addHandler(eventUtil.getId('phone'),'blur',checkPhoneBlur);

	//为提交按钮添加事件句柄
	eventUtil.addHandler(eventUtil.getId('submit'),'click',submitForm);
	