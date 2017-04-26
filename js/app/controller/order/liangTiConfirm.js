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


	Ajax.get("620203",{"userId":userId})
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

	$("#confirm_img1").on('toggle', function(){
		$('img').attr(src:'../images/选中蓝.png')
		},function(){
		$('img').attr(src:'../images/未选中.png')
		}
	);

	$("#confirm_img2").on('toggle', function(){
		$('#confirm_img2').attr(src:'../images/选中蓝.png')
		},function(){
		$('#confirm_img2').attr(src:'../images/未选中.png')
		}
	);

	$(".confirmSub0").on('click','#confirmSub', function(){

      location.href = "Order.html;"
    });

});