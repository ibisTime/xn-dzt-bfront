define([
    'js/app/controller/base',
    'js/app/util/ajax',
    'js/app/module/loading/loading'
], function (base, Ajax, loading) {
    var code = "";
    init();
    function init(){
        loading.createLoading();
        getBankCardList();
        addListeners();
    }
    // 获取银行卡列表
    function getBankCardList(){
        Ajax.get("802016", {
            userId: base.getUserId(),
            status: "1"
        }).then(function(res){
            loading.hideLoading();
            if(res.success){
                if(res.data.length){
                    var html = "", item = res.data[0];
                    code = item.code;
                    html = '<img src="../../../images/通用银行@2x.png" class="bank-logo p-a">'+
                    		'<div class="inline_block white va pl30 bank-mass p-a">'+
                    			'<div class="fs32">'+item.bankName+'</div>'+
                    			'<div class="fs28">储蓄卡</div>'+
                    			'<div class="fs40 pt30">'+base.getBankCard(item.bankcardNumber)+'</div>'+
                    		'</div>';
                    $("#content").html(html);
                }else{
                    base.showMsg("暂无银行卡");
                }
            }else{
                base.showMsg(res.msg);
            }
        });
    }
    function addListeners(){
        $("#edit").on("click", function(){
            if(code)
                location.href = "./add_bankcard.html";
        });
    }
});
