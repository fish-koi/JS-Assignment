window.addEventListener("load", function () {
    class TicTacToe {
        constructor(moves, gamesPlayed, gamesWon, gamesLost, yourTurn) {
            this.moves = moves;
            this.gamesPlayed = gamesPlayed;
            this.gamesWon = gamesWon;
            this.gamesLost = gamesLost;
            this.yourTurn = yourTurn;
        }

        makeMove(index) {
            if (this.moves[index] == "") {
                this.moves[index] = "X";
                this.yourTurn = false;
                this.checkWin();
            }
        }

        computerMove() {
            let fullSquares = 0;
            for (let i = 0; i < this.moves.length; i++) {
                if (this.moves[i] !== "") {
                    fullSquares++;
                }
            }

            if (fullSquares == 9) {
                this.checkWin();
                this.gamesPlayed++;
                scoreGamesPlayed.innerHTML = this.gamesPlayed;
                gameOver();
                return;
            }

            if (!xWin && !oWin) {
                let index = Math.floor(Math.random() * (9))
                while (this.moves[index] != "") {
                    index = Math.floor(Math.random() * (9));
                }
                this.moves[index] = "O";
                setTimeout(() => {
                    this.checkMoves();
                    this.checkWin();
                    if (!xWin && !oWin) {
                        this.yourTurn = true;
                    }
                }, 1000);
            }
        }

        checkMoves() {
            const squares = [r1c1Move, r1c2Move, r1c3Move,
                r2c1Move, r2c2Move, r2c3Move,
                r3c1Move, r3c2Move, r3c3Move];

            for (let i = 0; i < this.moves.length; i++) {
                squares[i].innerHTML = this.moves[i];
            }
        }

        checkWin() {
            //checks all winning conditions for X
            if (this.moves[0] == "X" && this.moves[1] == "X" && this.moves[2] == "X") {
                xWin = true;
            }
            if (this.moves[3] == "X" && this.moves[4] == "X" && this.moves[5] == "X") {
                xWin = true;
            }
            if (this.moves[6] == "X" && this.moves[7] == "X" && this.moves[8] == "X") {
                xWin = true;
            }
            if (this.moves[0] == "X" && this.moves[3] == "X" && this.moves[6] == "X") {
                xWin = true;
            }
            if (this.moves[1] == "X" && this.moves[4] == "X" && this.moves[7] == "X") {
                xWin = true;
            }
            if (this.moves[2] == "X" && this.moves[5] == "X" && this.moves[8] == "X") {
                xWin = true;
            }
            if (this.moves[0] == "X" && this.moves[4] == "X" && this.moves[8] == "X") {
                xWin = true;
            }
            if (this.moves[2] == "X" && this.moves[4] == "X" && this.moves[6] == "X") {
                xWin = true;
            }
            //checks all winning combinations for O
            if (this.moves[0] == "O" && this.moves[1] == "O" && this.moves[2] == "O") {
                oWin = true;
            }
            if (this.moves[3] == "O" && this.moves[4] == "O" && this.moves[5] == "O") {
                oWin = true;
            }
            if (this.moves[6] == "O" && this.moves[7] == "O" && this.moves[8] == "O") {
                oWin = true;
            }
            if (this.moves[0] == "O" && this.moves[3] == "O" && this.moves[6] == "O") {
                oWin = true;
            }
            if (this.moves[1] == "O" && this.moves[4] == "O" && this.moves[7] == "O") {
                oWin = true;
            }
            if (this.moves[2] == "O" && this.moves[5] == "O" && this.moves[8] == "O") {
                oWin = true;
            }
            if (this.moves[0] == "O" && this.moves[4] == "O" && this.moves[8] == "O") {
                oWin = true;
            }
            if (this.moves[2] == "O" && this.moves[4] == "O" && this.moves[6] == "O") {
                oWin = true;
            }

            if (xWin) {
                this.gamesWon++;
                this.gamesPlayed++;
                scoreGamesPlayed.innerHTML = this.gamesPlayed;
                scoreGamesWon.innerHTML = this.gamesWon;
                gameOver();
                return;
            }

            if (oWin) {
                this.gamesLost++;
                this.gamesPlayed++;
                scoreGamesPlayed.innerHTML = this.gamesPlayed;
                scoreGamesLost.innerHTML = this.gamesLost;
                gameOver();
                return;
            }
        }
    }

    let xWin = false;
    let oWin = false;
    game = new TicTacToe(["", "", "", "", "", "", "", "", ""], 0, 0, 0, true);

    const r1c1Move = document.getElementById("r1-c1-move");
    const r1c2Move = document.getElementById("r1-c2-move");
    const r1c3Move = document.getElementById("r1-c3-move");
    const r2c1Move = document.getElementById("r2-c1-move");
    const r2c2Move = document.getElementById("r2-c2-move");
    const r2c3Move = document.getElementById("r2-c3-move");
    const r3c1Move = document.getElementById("r3-c1-move");
    const r3c2Move = document.getElementById("r3-c2-move");
    const r3c3Move = document.getElementById("r3-c3-move");
    const scoreGamesPlayed = document.getElementById("games-played");
    const scoreGamesWon = document.getElementById("games-won");
    const scoreGamesLost = document.getElementById("games-lost");

    function newGame() {
        setTimeout(() => {
            game = new TicTacToe(["", "", "", "", "", "", "", "", ""], game.gamesPlayed, game.gamesWon, game.gamesLost, true);
            game.checkMoves();
            xWin = false;
            oWin = false;
        }, 3000);
    }

    function gameOver() {
        newGame();
    }

    document.getElementById("r1-c1").addEventListener("click", function () {
        if (!game.yourTurn || xWin || oWin) return;
        if (game.yourTurn) {
            game.makeMove(0);
            r1c1Move.innerHTML = "X";
            game.yourTurn = false;
            game.computerMove();
        }
    });

    document.getElementById("r1-c2").addEventListener("click", function () {
        if (!game.yourTurn || xWin || oWin) return;
        game.makeMove(1);
        r1c2Move.innerHTML = "X";
        game.yourTurn = false;
        game.computerMove();
    });

    document.getElementById("r1-c3").addEventListener("click", function () {
        if (!game.yourTurn || xWin || oWin) return;
        game.makeMove(2);
        r1c3Move.innerHTML = "X";
        game.yourTurn = false;
        game.computerMove();
    });

    document.getElementById("r2-c1").addEventListener("click", function () {
        if (!game.yourTurn || xWin || oWin) return;
        game.makeMove(3);
        r2c1Move.innerHTML = "X";
        game.yourTurn = false;
        game.computerMove();
    });

    document.getElementById("r2-c2").addEventListener("click", function () {
        if (!game.yourTurn || xWin || oWin) return;
        game.makeMove(4);
        r2c2Move.innerHTML = "X";
        game.yourTurn = false;
        game.computerMove();
    });

    document.getElementById("r2-c3").addEventListener("click", function () {
        if (!game.yourTurn || xWin || oWin) return;
        game.makeMove(5);
        r2c3Move.innerHTML = "X";
        game.yourTurn = false;
        game.computerMove();
    });

    document.getElementById("r3-c1").addEventListener("click", function () {
        if (!game.yourTurn || xWin || oWin) return;
        game.makeMove(6);
        r3c1Move.innerHTML = "X";
        game.yourTurn = false;
        game.computerMove();
    });

    document.getElementById("r3-c2").addEventListener("click", function () {
        if (!game.yourTurn || xWin || oWin) return;
        game.makeMove(7);
        r3c2Move.innerHTML = "X";
        game.yourTurn = false;
        game.computerMove();
    });

    document.getElementById("r3-c3").addEventListener("click", function () {
        if (!game.yourTurn || xWin || oWin) return;
        game.makeMove(8);
        r3c3Move.innerHTML = "X";
        game.yourTurn = false;
        game.computerMove();
    });
});
