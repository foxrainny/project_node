var gps = {};

var request = require('request');
var fetch = require('node-fetch');

gps.gps_to_address = function(arg1){
    var lat = arg1.coord.lat;
    var lng = arg1.coord.lng;
    var result;

    console.log(lat);
    console.log(lng);
    fetch('https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?x='+lng+'&y='+lat, {
        headers: {
        //'Authorization': 'KakaoAK 276526daee0424ad67322a83a48cf499'
        'Authorization': 'KakaoAK e483872f73f31a074e80f9f67d779f34'
    }
    }).then((response) => console.log("response:", response))
    .catch((error) => console.log("error:", error));
    
    
};


module.exports = gps;
