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
                console.log(res.data.list[i]);
                html += '<div class="  wp100 p-r bg_fff border-b">'+
                            '<div class=" ba lh100  plr30  p-r pt20"><img src="/static/images/订单号@2x.png" class="img-order"><p class="co9 inline_block  p-a ml20">订单号:' + item.code + '</p><span class="p-a font">' + base.getDictListValue(item.status,dictData) + '</span></div>'+
                            '<div class="ba lh100  plr30  p-r mt10"><img src="/static/images/电话@2x.png" class="img-order"><p class="co9 inline_block  p-a ml20">联系电话：' + item.applyMobile + '</p></div>'+
                            '<div class="ba lh100  plr30  p-r mt10"><img src="/static/images/地址@2x.png" class="img-order"><p class="co9 inline_block  p-a ml20">地址：' + item.reAddress + '</p></div>'+
                            '<div class="ba lh100  plr30  p-r mt10"><img src="/static/images/时间@2x.png" class="img-order"><p class="co9 inline_block  p-a ml20">预约时间：' + base.formatDate(item.ltDatetime,"yyyy-MM-dd") + '</p></div>'+
                          '</div>'+
                          '<div class="hig400 lh200 wp100 p-r bg_fff border-b contenBtnW">'+
                            '<div class="inline_block p-a plr30 btn-vaild btn-order mr20 btn-l" code="'+item.code+'">查看</div>';
                            html += '</div>'
                html += '</div>'
                $("#content").html(html);
                console.log(item.status)
              }
            }else{
              base.showMsg("暂无订单");
            }
          }else{
              base.showMsg(res.msg);
            }

        })

    $("#content").on('click','.contenBtnW .btn-l', function(){

      location.href = "orderDetail.html?code="+$(this).attr("code");
    });

})
