var pswd = "";
var hiddenpassword = "";
var password = "";
function _pass_gen(passwordLength, charBlocks) {
  var allChars = "";
  for (var i = 0; i < charBlocks.length; i++) {
    allChars += charBlocks[i];
  }
  var numChars = allChars.length;
  var password = "";
  for (var i = 1; i <= passwordLength; i++) {
    password += allChars.charAt(Math.floor(Math.random() * numChars));
  }
  return password;
}
function pass_gen(form_data) {
    pswd = ""
    hiddenpassword = ""
    // document.querySelector('#showhidebutton').innerHTML = "Show";  
    document.querySelector('div#topbox textarea').cols = length;
    var charBlocks = [];
    for (id in charTypes) {
      var isTicked = document.querySelector('div#' + id + ' input[type=checkbox]').checked;
      var value = document.querySelector('div#' + id + ' textarea').id;
      if (isTicked) {
        charBlocks.push(value);
      }
    }
    var $length = document.getElementById('length');
    var passwordLength = parseInt($length.value)
    
    password = _pass_gen(passwordLength, charBlocks);
    for(i = 0; i < passwordLength; i++) {
        hidpassword = "*"
        hiddenpassword += hidpassword + "";
    }
    document.querySelector('div#topbox textarea').value = password;
    // document.getElementById("topbox").getElementsByClassName("passwordoutput").value = password;
}
  // function showhide(){
  //   var pswdbox = document.querySelector('#showhidebutton').innerHTML
  //   if(pswdbox == "Show"){
  //       document.getElementById("passwordoutput").value = password;
  //       document.querySelector('#showhidebutton').innerHTML = "Hide";  
  //   }else{
  //       document.getElementById("passwordoutput").value = hiddenpassword;  
  //       document.querySelector('#showhidebutton').innerHTML = "Show";
  //   }
  // }
  // function copyreset() {
  //   document.querySelector('#copybutton').innerHTML = 'Copy'
  // }
  function copyToClipboard(){
      var passwordtext = document.querySelector("div#topbox textarea");
      // document.getElementById("passwordoutput").value = password;
      passwordtext.select()
      document.execCommand("copy");
      // document.querySelector('#copybutton').innerHTML = 'Copied!';
      // document.getElementById("passwordoutput").value = hiddenpassword; 
      // setTimeout(copyreset, 1000)
}
  function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var darkmodebutton = document.getElementById("darkmodebutton").style.display = "none";
    var lightmodebutton = document.getElementById("lightmodebutton").style.display = "block";
}
  function lightMode() {
    var element = document.body;
    element.classList.toggle("light-mode")
    var darkmodebutton = document.getElementById("darkmodebutton").style.display = "block";
    var lightmodebutton = document.getElementById("lightmodebutton").style.display = "none";
}