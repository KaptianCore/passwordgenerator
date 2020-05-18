function pass_gen(length) {
    var randArray = ["s","1","3","a","}","0","4","%","(","2","[","z",";","7","&","q","w","-","?","j","k","y",".","8","b","x","m","=","c","i","#","p","+","n","^",";","v","r","{",")","9","*","t","5","d","o","]","$","u","e","@","g",",","_","|","l",">","f","!","h","<","6"];
    for (i = 0; i < length; i++) {
        var password = randArray[Math.floor(randArray.length * Math.random())];
        console.log(password);
    
    }
}
pass_gen(length);
