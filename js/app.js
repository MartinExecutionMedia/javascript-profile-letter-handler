var firstname = "Example";
var lastname = "Username";

if(firstname == ""){
    console.log("Es muss mindestens ein Vorname angegeben werden.")
} 

if(lastname == ""){
    var fn = firstname.charAt(0)
    document.getElementById("basic-user-letters").innerHTML = fn;
    document.getElementById("normal-username").innerHTML = firstname;
}else{
    var fn = firstname.charAt(0)
    var ln = lastname.charAt(0)

    document.getElementById("basic-user-letters").innerHTML = fn + "" + ln;
    document.getElementById("normal-username").innerHTML = firstname + " " + lastname;
}