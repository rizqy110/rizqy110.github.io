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

var med = getUrlParam('med',null);
var heg = getUrlParam('heg',null);
var num = getUrlParam('num',null);
var nim = getUrlParam('nim',null);
var ti = getUrlParam('ti',null);
	
var encryptmed = decodeURIComponent(med);
var encryptheg = decodeURIComponent(heg);
var encryptnum = decodeURIComponent(num);
var encryptnim = decodeURIComponent(nim);
var encryptti = decodeURIComponent(ti);

var tle = "<h3 class='ta-c'>"+ encryptti +" Sub Indo</h3>";

var stream2 = "<source src='//archive.org/download/"+ encryptmed +".mp4' title='480p' type='video/mp4'/><source src='//archive.org/download/"+ encryptheg +".mp4' title='720p' type='video/mp4'/>";

var xstream = "<source src='https://video"+ encryptnum +".tizam.cc/"+ encryptnim +".mp4' title='480p' type='video/mp4'/>";