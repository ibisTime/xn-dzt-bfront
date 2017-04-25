define([
    'app/controller/base',
    'app/util/ajax',
    'app/module/loading/loading'
], function(base, Ajax, loading) {
	if(!base.getUserId()){
		location.href="user/login.html"
	}
	var userId = base.getUserId();
	var userName;//用户名
	var userPic;//头像
	var token;


	var userImg = __inline("../../../images/头像.png");
	Ajax.get("805056",{"userId":userId})
		.then(function(res) {
            if (res.success) {
            		token = res.data.token;
                userName = res.data.realName;
                userPic = res.data.pic1;

                $("#userName").html(userName);

                if(userPic != null || userPic==""){
                	$("#userPic").attr("src",PIC_PREFIX+userPic+THUMBNAIL_INDEX)
               	}else{
                	$("#userPic").attr("src",userImg)
               	}
            } else {
                base.showMsg(res.msg);
            }
        })

	$("#h-orderTrick").on('click', function(){
		location.href = "myOrder.html"
	});

	$("#h-commissionManage").on('click', function(){
		location.href = "reportQuery.html";
	});

	$("#h-aboutUs").on('click', function(){
		location.href = "aboutUs.html";
	});

	$("#h-historyOrder").on('click', function(){
		location.href = "historyOrder.html"
	});

	$("#h-icon-account").on('click', function(){
		location.href = "accountSecurity.html";
	});

	//退出登录
	$("#btn-SignOut").on('click', function(){
		base.logout();
		location.href = "user/login.html"
	});

	$("#revise-tel").on('click', function(){
		location.href = "reviseTel.html";
	});

	$("#revise-pwd").on('click', function(){
		location.href = "revisePwd.html";
	});

	$("#revise-tpwd").on('click', function(){
		location.href = "revisetPwd.html";
	});

});
