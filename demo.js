var sys = require('util');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var sendmsg=require('./sendmessage.js');

var xhr = new XMLHttpRequest();
var xhr1 = new XMLHttpRequest();
var msg;
var time=0;
var flag=0;

xhr.onreadystatechange = function() {
	sys.puts("State: " + this.readyState);

	if (this.readyState == 4) {
		sys.puts("Complete.\nBody length: " + this.responseText);
		var data=this.responseText.toString();
	    var data=data.split('topFrameTitle');
		data=data.toString();
		try{
		data=JSON.parse(data);
		
		 for(var i=0;i<data.length;i++){
		 	 if(data[i].pushType=="Scores"){
		           break; 	 	
		 	 }
		 }
			if(data[i].batteamovers!="20"){
			
		
				var batteamname=data[i].batteamname;
				var bwlteamname=data[i].bwlteamname;
				var batteamruns=data[i].batteamruns;
				var batteamwkts=data[i].batteamwkts;
				
				msg=batteamname+" "+data[i].batteamdesc+" Vs " + bwlteamname;
				sys.puts("Body:\n" + msg);
				
				console.log("demo--"+time);
				sendmsg.init_sendmessage(); 
				sendmsg.sendmessage(msg);
			}
			else{
				flag++;
				if(flag==1){
					console.log("ining over!!!!")
					msg="Ining is over!!! final score:"+data[i].batteamname+" "+data[i].batteamdesc+" Vs " + data[i].bwlteamname;
					console.log(msg);
					sendmsg.init_sendmessage(); 
					sendmsg.sendmessage(msg);
				}
			}
		}
		catch(err){
			console.log("Error!!!-"+err)
		}
		setTimeout(function(){
		  console.log("fuck.............")
		  	
		  cric_update();	
		},60000)
	    
		
	}
	else{
		console.log("status:"+this.status);
	}
};





function cric_update(){
  xhr.open("GET", "http://live.cricbuzz.com/cbz_pub/fetch?id=11169",false);
  console.log("chetan")
  xhr.send();	
}

cric_update();