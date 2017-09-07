function ol(){
	
	try{
		var len=document.all.ol_stat.length;
	}catch(e){
		return false;
	}
	
	var ad_key_list='';
	for(i=0;i<len;i++){
		if(i>0) ad_key_list+='|';
		ad_key_list+=document.all.ol_stat[i].title+'';
	}
	
	if(isNaN(len)){
		try{
			ad_key_list=document.all.ol_stat.title;
		}catch(e){}
	}
	
	var now = new Date().getTime();
	var datestr=escape(now*1000+Math.round(Math.random()*1000));
	s_url='http://stat.xgo.com.cn/ol_xgo.php?ad_key_list='+ad_key_list+'&t='+datestr;
	document.write('<scr'+'ipt src="'+s_url+'"></scr'+'ipt>');
}
//ol();


//if is search
if (-1 != document.location.href.indexOf('http://search.xgo.com.cn/') && -1 != document.location.href.indexOf('cgstat=1')) {
	 //new
    document.write('<sc'+'ript type="text/javascript" id="adstat_js_middle" src="http://stat.xgo.com.cn/adrs/ol_middle.js?2"></scr'+'ipt>');
} else {
	//eff
	if (document.location.href != 'http://www.xgo.com.cn/' && -1 == document.location.href.indexOf('www.xgo.com.cn/topic')) {
	    //document.write('<script type="text/javascript" src="http://stat.xgo.com.cn/cgrs/sub_xgo/tag_vpv.php?'+Math.random()+'"></scr'+'ipt>');
	    //document.write('<script type="text/javascript" src="http://stat.xgo.com.cn/cgrs/sub_xgo/bms_tag.php?'+Math.random()+'"></scr'+'ipt>');
	    //document.write('<script type="text/javascript" src="http://stat.xgo.com.cn/cgrs/sub_xgo/bms_tag_direct.php?'+Math.random()+'"></scr'+'ipt>');
	    
	    //new
	    document.write('<sc'+'ript type="text/javascript" id="adstat_js" src="http://stat.xgo.com.cn/adrs/ol.js"></scr'+'ipt>');
	}
}

//log real click
document.write('<img id="log_click_link" width="0" height="0" style="display:none;" />');
function log_click(barid) {
    var url = 'http://stat.xgo.com.cn/cgrs/log_real_click.php?from=xgo&barid='+barid+'&r='+Math.random();
    try{
        document.getElementById('log_click_link').src = url;
    }catch(e){}
}