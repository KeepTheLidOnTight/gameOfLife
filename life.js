$(document).ready(function(){
    let lifeId = document.getElementById("life");
    let context = lifeId.getContext("2d");

    let bw = 400;
    let bh = 400;
    let p = .2;

    function drawBoard(){
        for (let x = 0; x <= bw; x += 40) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, bh + p);
        }
    
        for (let x = 0; x <= bh; x += 40) {
            context.moveTo(p, 0.5 + x + p);
            context.lineTo(bw + p, 0.5 + x + p);
        }
        context.strokeStyle = "black";
        context.stroke();
    }

    drawBoard();

    //need blank board
    //populate the board with colors based on position 
    //constantly update the board based on neighbors/rules
    
})


