
var sign = "<"
sign.fontsize(10);
document.getElementById("leftArrowbtn").innerHTML = sign; 
/*String.prototype.format = function(){ /// stackoverflow, Make sure to study the functionality
	var i = 0, args = arguments;
	return this.replace(\{}\g, function(){
	return typeof(args[i] != 'undefined' ? args[i++]:'')
						})
}
*/

/// temperary error
function pageChange(){
	
	location.href = "character_resume_2.html";
}
function resume(){
	
	location.href = "character_resume/Login/login_sign.html";
}
function mainPage(){
	location.href = "character_resume.html";
}
function math_libs(){
	console.log("clicked");
	location.href = "math_libs.html";
}
function submit(){
	noun = document.getElementById("noun").value;
	adjective = document.getElementById("adjective").value;
	verb = document.getElementById("verb").value;
	console.log(noun);
	console.log(adjective);
	console.log(verb);
	///Check for string logic here
	
	
	
	if(noun == "" || adjective == "" || verb == "")
		{
			document.getElementById("error").innerHTML = "ONE OR MORE BOXES WERE LEFT BLANK"
			document.getElementById("response").innerHTML = ""
		}
	else{

	document.getElementById("response").innerHTML =  "TODAY WAS ONE OF THE BRIGHEST" + " " +  noun + " " + "IN MY LIFETIME. NEVER WOULD HAVE IMAGINED SUCH" + " " + adjective + " " + "WHILE I WAS" + " " + verb + ".";
			document.getElementById("noun").value = "";
	document.getElementById("adjective").value = "";
	document.getElementById("verb").value = "";
		document.getElementById("error").innerHTML = ""
	}
	
	
	
	



}
