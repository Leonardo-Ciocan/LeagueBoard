var meta="https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/Leonardo7253?api_key=6e0d8785-c4b5-41f1-b694-8567d1afdb8c|70082989";

function parseItem(str){
    var final = {};
    var acc = "";
    for(var i= 0; i < str.length;i++){
        if(str.indexOf("</stats>")){
            final.stats =   acc;
        }
    }
}