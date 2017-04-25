define([
    'app/controller/base',
    'app/util/ajax',
    'app/module/loading/loading'
], function(base, Ajax, loading) {

	if(!base.getUserId()){
		location.href="user/login.html"
	}



    $("#ContentSub0").on('click', function(){

      location.href = "liangTiEntrySpecial.html";

    });
    $("#ContentSub1").on('click', function(){

      location.href = "liangTiEntryInfo.html";
    });

})
