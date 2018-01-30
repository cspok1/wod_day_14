function pangram(str){
	var pangram = true;
	var test = "abcdefghijklmnopqrstuvwxyz"
	var newStr = str.toLowerCase();
	for (i=0; i<test.length; i++){
		if (newStr.indexOf(test.charAt(i)) == -1){
			return false ;
		}
		}
			return pangram;
		
	
	

}
document.write(pangram("We promptly judged antique ivory buckles for the next prize"));
document.write("<br/>");
document.write(pangram("We promptly judged antique ivory buckles for the prize"));   
