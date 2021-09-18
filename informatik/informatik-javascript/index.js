
function trykJS(){
    document.getElementById("headline").innerHTML = document.getElementsById("felt").value;
    document.getElementsById("headline").style.color = "RED";
    if (document.getElementById("headline").innerHTML ="wow"){
        (document.getElementById("headline").innerHTML ="ups")
    }else{
        (document.getElementById("headline").innerHTML ="wow")
    }
}
