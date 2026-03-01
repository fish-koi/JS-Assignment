window.addEventListener("load", function () {
    class TicTacToe {
        constructor(moves, gamesPlayed, gamesWon, gamesLost) {
            this.moves = moves;
            this.gamesPlayed = gamesPlayed;
            this.gamesWon = gamesWon;
            this.gamesLost = gamesLost;
        }

        makeMove(index) {
            if (this.moves[index] == "") {
                this.moves[index] = "X";
                yourTurn = false;
            }
        }

        computerMove() {
            let index = Math.floor(Math.random() * (8))
            while (this.moves[index] != "") {
                index = Math.floor(Math.random() * (8));
            }
            this.moves[index] = "O";
            setTimeout(() => {this.checkMoves();}, 1000);
            setTimeout(() => {yourTurn = true;}, 1100);
        }

        checkMoves(){
            if(this.moves[0] == "O"){
                r1c1Move.innerHTML = "O";
            }
            if(this.moves[1] == "O"){
                r1c2Move.innerHTML = "O";
            }
            if(this.moves[2] == "O"){
                r1c3Move.innerHTML = "O";
            }
            if(this.moves[3] == "O"){
                r2c1Move.innerHTML = "O";
            }
            if(this.moves[4] == "O"){
                r2c2Move.innerHTML = "O";
            }
            if(this.moves[5] == "O"){
                r2c3Move.innerHTML = "O";
            }
            if(this.moves[6] == "O"){
                r3c1Move.innerHTML = "O";
            }
            if(this.moves[7] == "O"){
                r3c2Move.innerHTML = "O";
            }
            if(this.moves[8] == "O"){
                r3c3Move.innerHTML = "O";
            }
        }
    }
    let yourTurn = true;
    game = new TicTacToe(["", "", "", "", "", "", "", "", ""], 0, 0, 0);

    const r1c1Move = document.getElementById("r1-c1-move");
    const r1c2Move = document.getElementById("r1-c2-move");
    const r1c3Move = document.getElementById("r1-c3-move");
    const r2c1Move = document.getElementById("r2-c1-move");
    const r2c2Move = document.getElementById("r2-c2-move");
    const r2c3Move = document.getElementById("r2-c3-move");
    const r3c1Move = document.getElementById("r3-c1-move");
    const r3c2Move = document.getElementById("r3-c2-move");
    const r3c3Move = document.getElementById("r3-c3-move");

    document.getElementById("r1-c1").addEventListener("click", function () {
        if (yourTurn) {
            game.makeMove(0);
            r1c1Move.innerHTML = "X";
            yourTurn = false;
            game.computerMove();
        }
    });

    document.getElementById("r1-c2").addEventListener("click", function () {
        if (yourTurn) {
            game.makeMove(1);
            r1c2Move.innerHTML = "X";
            yourTurn = false;
            game.computerMove();
        }
    });

    document.getElementById("r1-c3").addEventListener("click", function () {
        if (yourTurn) {
            game.makeMove(2);
            r1c3Move.innerHTML = "X";
            yourTurn = false;
            game.computerMove();
        }
    });

    document.getElementById("r2-c1").addEventListener("click", function () {
        if (yourTurn) {
            game.makeMove(3);
            r2c1Move.innerHTML = "X";
            yourTurn = false;
            game.computerMove();
        }
    });

    document.getElementById("r2-c2").addEventListener("click", function () {
        if (yourTurn) {
            game.makeMove(4);
            r2c2Move.innerHTML = "X";
            yourTurn = false;
            game.computerMove();
        }
    });

    document.getElementById("r2-c3").addEventListener("click", function () {
        if (yourTurn) {
            game.makeMove(5);
            r2c3Move.innerHTML = "X";
            yourTurn = false;
            game.computerMove();
        }
    });

    document.getElementById("r3-c1").addEventListener("click", function () {
        if (yourTurn) {
            game.makeMove(6);
            r3c1Move.innerHTML = "X";
            yourTurn = false;
            game.computerMove();
        }
    });

    document.getElementById("r3-c2").addEventListener("click", function () {
        if (yourTurn) {
            game.makeMove(7);
            r3c2Move.innerHTML = "X";
            yourTurn = false;
            game.computerMove();
        }
    });

    document.getElementById("r3-c3").addEventListener("click", function () {
        if (yourTurn) {
            game.makeMove(8);
            r3c3Move.innerHTML = "X";
            yourTurn = false;
            game.computerMove();
        }
    });
});