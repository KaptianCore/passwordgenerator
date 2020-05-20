var pswd = "";
var hiddenpassword = "";
function pass_gen(form_data) {
    var password;
    var randArray = ["s","1","3","a","}","0","4","%","(","2","[","z",";","7","&","q","w","-","?","j","k","y",".","8","b","x","m","=","c","i","#","p","+","n","^",";","v","r","{",")","9","*","t","5","d","o","]","$","u","e","@","g",",","_","|","l",">","f","!","h","<","6"];
    var length = form_data.querySelector("#length").value   
    document.getElementById("passwordoutput").cols = length;
    for (i = 0; i < length; i++) {
        password = randArray[Math.floor(randArray.length * Math.random())]
        pswd += password + "";   
      }
    //   document.getElementById("passwordoutput").value = pswd;
    for(i = 0; i < length; i++) {
        hidpassword = "*"
        hiddenpassword += hidpassword + "";
    }
    document.getElementById("passwordoutput").value = hiddenpassword;
}
  function showhide(){
    var pswdbox = document.querySelector('#showhidebutton').innerHTML
    if(pswdbox == "Show"){
        document.getElementById("passwordoutput").value = pswd;
        document.querySelector('#showhidebutton').innerHTML = "Hide";  
    }else{
        document.getElementById("passwordoutput").value = hiddenpassword;  
        document.querySelector('#showhidebutton').innerHTML = "Show";
    }
  }
  function copyToClipboard(){
      var passwordtext = document.getElementById("passwordoutput");
      passwordtext.select()
      document.execCommand("copy");
      document.querySelector('#copybutton').innerHTML = 'Copied!';
  }