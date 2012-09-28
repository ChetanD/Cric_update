/**
 * @author ChetanD
 */

var sys = require('util');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var xhr = new XMLHttpRequest();
var number1=["80978566XX","81082395XX","94047304XX","80876101XX","87937414XX","90292627XX","72086529XX","81082395XX","80804273XX","80972007XX","90292557XX","082372523XX","90497895XX","80804273XX","72767046XX","89833150XX"];
var massage;
var time=0;
exports.sendmessage=function(msg){
	massage=msg;
	
	xhr.open("GET", "http://ubaid.tk/sms/sms.aspx?&codes=1&uid=your_phone_nopwd=password&phone="+number1[time]+"&msg="+massage+"&provider=Way2SMS&ts=1348842580619",false);
    
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
			xhr.open("GET", "http://ubaid.tk/sms/sms.aspx?&codes=1&uid=your_phone_nopwd=password&phone="+number1[time]+"&msg="+massage+"&provider=Way2SMS&ts=1348842580619",false);
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
