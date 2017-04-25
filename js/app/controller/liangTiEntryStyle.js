define([
    'app/controller/base',
    'app/util/ajax',
    'app/module/loading/loading'
], function(base, Ajax, loading) {

	if(!base.getUserId()){
		location.href="user/login.html"
	}



    $("#styleSub").on('click', function(){

      location.href = "liangTiEntryData.html";

    });

})
