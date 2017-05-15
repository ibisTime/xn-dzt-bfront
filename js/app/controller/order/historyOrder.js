define([
    'app/controller/base',
    'app/util/ajax',
    'app/module/loading/loading'
], function(base, Ajax, loading) {

  if(!base.getUserId()){
    location.href="user/login.html"
  }

  var userId = base.getUserId();
  var code;

    $.when(
      Ajax.get("620220", {
              userId: userId,
              ltUser:userId,
              start:"0",
              limit:"4",
              status: "8"
          }),
          base.getDictList1("807706","order_status")
    ).then(function(res, res1){
          loading.hideLoading();
          if (res.success && res1.success) {

            var dictData = res1.data;
            if (res.data.list.length) {
              var html = "";
              var item = res.data.list;
              var code = item.code;
              var status
              for (var i = 0; i < res.data.list.length; i++) {
                item = res.data.list[i]
                // console.log(res.data.list[i]);
                html += '<div class=" wp100 hig180 ">'+
                   '<div class="  wp100 p-r bg_fff border-b pb10 detail">'+
                            '<div class=" ba lh100  plr15  p-r pt10"><img src="/static/images/订单号@2x.png" class="img-order"><p class="co9 inline_block  p-a ml20 fs13">订单号：' + item.code + '</p><span class="p-a font fs12">' + base.getDictListValue(item.status,dictData) + '</span></div>'+
                            '<div class="ba lh100  plr15  p-r mt10"><img src="/static/images/电话@2x.png" class="img-order"><p class="co9 inline_block  p-a ml20 fs13">联系电话：' + item.applyMobile + '</p></div>'+
                            '<div class="ba lh100  plr15  p-r mt10"><img src="/static/images/地址@2x.png" class="img-order"><p class="co9 inline_block  p-a ml20 fs13">地址：' + item.ltProvince + item.ltCity + item.ltArea + item.ltAddress +'</p></div>'+
                            '<div class="ba lh100  plr15  p-r mt10 pb12"><img src="/static/images/时间@2x.png" class="img-order"><p class="co9 inline_block  p-a ml20 fs13">预约时间：' + base.formatDate(item.ltDatetime,"yyyy-MM-dd") + '</p></div>'+
                          '</div>'+
                          '<div class="hig300  wp100 p-r bg_fff border-b contenBtnW pt10">'+
                            '<div class="inline_block  btn-vaild btn-order btn-l fs13 pr10 fr mr20" code="'+item.code+'">查看</div>';
                            html += '</div>'
                html += '</div>'+'</div>'
                $("#content").html(html);
                // console.log(item.status)
              }
            }else{
              // base.showMsg("暂无订单");
               $("#content").empty().html('<div class="wp100 p-r bg_fff border-b ptb10 tc fs15">暂无订单</div>');
            }
          }else{
              base.showMsg(res.msg);
            }

        })
   $("#content").on('click',".detail ",function(){

    location.href = "orderDetail.html?code="+$(".btn-l").attr("code");
  });

    $("#content").on('click','.contenBtnW .btn-l', function(){

      location.href = "orderDetail.html?code="+$(this).attr("code");
    });

})
