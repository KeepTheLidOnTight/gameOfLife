$(document).ready(function(){
    let lifeId = document.getElementById("life");
    let context = lifeId.getContext("2d");

    let size = 10;
    let columns = 50;
    let rows = 50;
    let bw = size * columns;
    let bh = size * rows;
    let p = .2;
    let board = new Array(columns)
    for( let c = 0; c <= columns; c++) {
        board[c] = new Array(rows);
    }

    function drawBoard(){
        for (let x = 0; x <= bw; x += size) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, bh + p);
        }
    
        for (let x = 0; x <= bh; x += size) {
            context.moveTo(p, 0.5 + x + p);
            context.lineTo(bw + p, 0.5 + x + p);
        }
        context.strokeStyle = "black";
        context.stroke();

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < columns; j++){
                context.beginPath();
                context.rect(size*i, size*j, size, size)

                if(board[i][j] == 1){
                    // context.moveTo(i, j);
                    // console.log(context)
                    context.fillStyle = "green";
                    context.stroke();
                    context.fill();
                }
                else {
                    context.fillStyle = "purple";
                    context.strokeStyle = "yellow";
                    context.stroke();
                    context.fill();
                }
            }
        }
    }

    function initialize(){
        for(let i = 0; i < rows; i++){
            for(let j = 0; j < columns; j++){
                //generate random number either 0 or 1
                board[i][j] = Math.floor(Math.random() * 2);
            }
        }
        console.log(board);
    }

    function lifeCycle() {
        let nextBoard = Array(rows);
        for ( let x = 0; x<rows; x++) {
            nextBoard[x] = new Array(columns);
        }

        for (let i = 1; i < rows -1; i++){
            for(let j = 1; j < columns -1; j++){ 

                //find neighbors
                var n = 0;
                for (let x = -1; x <= 1; x++) {
                    for (let y = -1; y <= 1; y++) {
                        n += board[x+i][y+j];
                    }
                }
                n-=board[i][j];

                if (n > 3 ||  n < 2) {
                    nextBoard[i][j] = 0;
                }
                else if (n ==3) {
                    nextBoard[i][j] = 1;
                }
                else {
                    nextBoard[i][j] = board[i][j];
                }

            }
        }
        board = nextBoard;
    }


    initialize();

    setInterval(function() {
        lifeCycle();
        drawBoard();
    }, 1000);

    //need blank board
    //populate the board with colors based on position 
    //constantly update the board based on neighbors/rules
    
})


