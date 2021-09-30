var number=document.getElementsByClassName("number");
for (var i = 0; i<number.length;i++) {
	number[i].addEventListener('click',function(){
		//console.log(this.id);
		var output=document.getElementById("output-value").innerText;
       document.getElementById("output-value").innerText = output + this.id;
})
}

var operator=document.getElementsByClassName("operator");
for (var i = 0; i<operator.length;i++) {
	operator[i].addEventListener('click',function(){
		if(this.id == "clear"){
       document.getElementById("output-value").innerText = "";
       document.getElementById("history-value").innerText = "";
		}	
		else if(this.id == "backspace"){
       var out = document.getElementById("output-value").innerText;
       var result = out.substr(0,out.length - 1);
       document.getElementById("output-value").innerText = result;
		}	
		else{
			
			 if(this.id == "=")
			 {
             var out = document.getElementById("output-value").innerText;
             var history = document.getElementById("history-value").innerText;
             document.getElementById("history-value").innerText= history+out;
             var value = eval(history+out);
             document.getElementById("output-value").innerText= value;
			}
			else{
		var out = document.getElementById("output-value").innerText;
		document.getElementById("history-value").innerText = out + this.id;
		document.getElementById("output-value").innerText = "";
	         }
		
	}
});
}