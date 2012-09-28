/**
 * @author ChetanD
 */

var sys = require('util');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhr = new XMLHttpRequest();
var number1=["8097856680","8108239552","9404730499","8087610142","8793741421","9029262799","7208652949","8108239552","8080427375","8097200718","9029255727","08237252374","9049789583","8080427375","7276704674","8983315075"];
var massage;
var time=0;
exports.sendmessage=function(msg){
	massage=msg;
	
	xhr.open("GET", "http://ubaid.tk/sms/sms.aspx?&codes=1&uid=8097856680&pwd=chetan1234&phone="+number1[time]+"&msg="+massage+"&provider=Way2SMS&ts=1348842580619",false);
    
	xhr.send();
	
}


xhr.onreadystatechange = function() {
	sys.puts("State in send message: " + this.readyState);

	if (this.readyState == 4) {
	  console.log(this.responseText);	
	   xhr.abort();
	   time++;
	   console.log("send message to ..."+number1[time-1]);
		console.log("in another call......");
		 if(time<16){ 
			xhr.open("GET", "http://ubaid.tk/sms/sms.aspx?&codes=1&uid=8097856680&pwd=chetan1234&phone="+number1[time]+"&msg="+massage+"&provider=Way2SMS&ts=1348842580619",false);
			//time++;
			xhr.send();
			  
		}	 
		
	}
	else{
		console.log("status:"+this.status);
	}
};

exports.init_sendmessage=function(){
	time=0;
}
