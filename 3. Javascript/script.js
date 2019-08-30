//membuat timer - START
var start = new Date().getTime();

//membuat fungsi yang memunculkan kembali shape
function makeShapeAppear(){

    var top = Math.floor(Math.random() * 400);

    var left = Math.floor(Math.random() * 400);

    var width = (Math.floor(Math.random() * 200) + 100);

    if (Math.random() > 0.5){
        document.getElementById("shape").style.borderRadius = "500%";
    } else {
        document.getElementById("shape").style.borderRadius = "0";
    }

    document.getElementById("shape").style.width = width + "px";

    document.getElementById("shape").style.height = width + "px";

    document.getElementById("shape").style.top = top + "px";

    document.getElementById("shape").style.left = left + "px";

    document.getElementById("shape").style.backgroundColor = getRandomColor();

    document.getElementById("shape").style.display = "block";
    
    start = new Date().getTime();


}

function getRandomColor(){
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

    
function appearAfterDelay(){

    setTimeout(makeShapeAppear, Math.random * 2000);
}

appearAfterDelay();

//membuat gambar menghilang
document.getElementById("shape").onclick = function(){

    //hilangkan gambar
    document.getElementById("shape").style.display = "none";

    //membuat timer- END
    var end = new Date().getTime();

    //Selisih waktu dalam detik
    var timeTaken = (end - start)/1000;
    //alert(time);

    //print time
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    
    appearAfterDelay();
}