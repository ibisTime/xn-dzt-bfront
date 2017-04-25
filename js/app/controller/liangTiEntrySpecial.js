define([
    'app/controller/base',
    'app/util/ajax',
    'app/module/loading/loading'
], function(base, Ajax, loading) {

	if(!base.getUserId()){
		location.href="user/login.html"
	}



    $("#specialSub0").on('click', function(){

      location.href = "liangTiEntryData.html";

    });
    $("#specialSub1").on('click', function(){

      location.href = "liangTiEntryContent.html";
    });

})
