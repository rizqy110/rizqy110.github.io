//ini script untuk ambil parameter
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

var kn = ['https://embed.hugonime.repl.co/index.php?kn=','https://embed-otakudesu.000webhostapp.com/index.php?kn=',];  
var random  = kn[Math.floor(Math.random() * kn.length)];

var low = getUrlParam('low',null);
var med = getUrlParam('med',null);
var heg = getUrlParam('heg',null);
var ti = getUrlParam('ti',null);
	
var encryptlow = decodeURIComponent(low);
var encryptmed = decodeURIComponent(med);
var encryptheg = decodeURIComponent(heg);
var encryptti = decodeURIComponent(ti);

var tle = "<h3 class='ta-c'>"+ encryptti +" Sub Indo</h3>";
var stream = "<source src='"+ random +""+ encryptlow +".mp4' title='360p' type='video/mp4'/><source src='"+ random +""+ encryptmed +".mp4' title='480p' type='video/mp4'/><source src='"+ random +""+ encryptheg +".mp4' title='720p' type='video/mp4'/>";
var dl = "<button><a href='"+ random +""+ encryptlow +".mp4' target='_blank'>Unduh 360p</a></button><button><a href='"+ random +""+ encryptmed +".mp4' target='_blank'>Unduh 480p</a></button><button><a href='"+ random +""+ encryptheg +".mp4' target='_blank'>Unduh 720p</a></button>";

var stream2 = "<source src='//archive.org/download/"+ encryptmed +".mp4' title='480p' type='video/mp4'/><source src='//archive.org/download/"+ encryptheg +".mp4' title='720p' type='video/mp4'/>";
var dl2 = "<button><a href='//archive.org/download/"+ encryptmed +".mp4' target='_blank'>Unduh 480p</a></button><button><a href='//archive.org/download/"+ encryptheg +".mp4' target='_blank'>Unduh 720p</a></button>";

var bt = "<button><a href='"+ random +""+ encryptlow +".rar' target='_blank'>Unduh 360p</a></button><button><a href='"+ random +""+ encryptmed +".rar' target='_blank'>Unduh 480p</a></button><button><a href='"+ random +""+ encryptheg +".rar' target='_blank'>Unduh 720p</a></button>";
var bt2 = "<button><a href='//archive.org/download/"+ encryptmed +".rar' target='_blank'>Unduh 480p</a></button><button><a href='//archive.org/download/"+ encryptheg +".rar' target='_blank'>Unduh 720p</a></button>";

var dlgo = "<button><a href='//drive.google.com/uc?export=download&confirm=t&id="+ encryptmed +"' target='_blank'>Unduh 480p</a></button><button><a href='//drive.google.com/uc?export=download&confirm=t&id="+ encryptheg +"' target='_blank'>Unduh 720p</a></button>";