let count = 0;

document.getElementById("decrescenteBtn").onclick = function(){

    count-=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function(){

    count=0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("crescenteBtn").onclick = function(){

    count+=1;
    document.getElementById("countLabel").innerHTML = count;
}
