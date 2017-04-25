define([
    'app/controller/base',
    'app/util/ajax',
    'app/module/loading/loading'
], function(base, Ajax, loading) {

	if(!base.getUserId()){
		location.href="user/login.html"
	}



    $("#infoSub0").on('click', function(){

      location.href = "liangTiEntryContent.html";

    });
    $("#infoSub1").on('click', function(){

      location.href = "liangTiEntryContent.html";
    });

})
