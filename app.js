
var btn = document.getElementById("btn");
var newbtn = document.getElementById("gobtn");

newbtn.onclick = () => {
    var text = document.getElementById('web').value
    window.location.replace = text
    
}

btn.onclick = () => {
    var userbox = document.getElementById("user").value;
    var passbox = document.getElementById("pass").value;
    console.log(userbox)
    console.log(passbox)
    if (userbox == "admin" && passbox == "admin") {
        var startdiv = document.getElementById("startdiv");
        startdiv.remove()
        console.log("passthrough")
        var newdiv = document.getElementById("newdiv");
        newdiv.hidden = false;
    }
}