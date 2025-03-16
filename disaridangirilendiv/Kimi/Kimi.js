function press(){
    var number=document.getElementById("mytext").value;
    for(i=1;i<=number;i++){
        document.getElementById("large").innerHTML+="<div id='small'>"+i+"</div>";
    }
}