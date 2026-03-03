/**
 * Name: Angelica Epshtein
 * File Created: 26/02/2026
 * Description: This is the JavaScript for my JavaScript assignment
 */

window.addEventListener("load", function () {
    class TicTacToe {
        constructor(moves, gamesPlayed, gamesWon, gamesLost, yourTurn) {
            this.moves = moves;
            this.gamesPlayed = gamesPlayed;
            this.gamesWon = gamesWon;
            this.gamesLost = gamesLost;
            this.yourTurn = yourTurn;
        }

        /**
         * Makes a tic tac toe move based on the box the user clicked
         * 
         * @param {number} index 
         */
        makeMove(index) {
            if (this.moves[index] == "") {
                this.moves[index] = "X";
                this.yourTurn = false;
                this.checkWin();
                localStorage["save"] = JSON.stringify(game);
            }
        }

        /**
         * The computer makes a move based on a randomly generated index
         */
        computerMove() {
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
                        localStorage["save"] = JSON.stringify(game);
                    }
                }, 1000);
            }
            localStorage["save"] = JSON.stringify(game);
        }

        /**
         * Recreates the current state of the game
         */
        checkMoves() {
            const squares = [r1c1Move, r1c2Move, r1c3Move,
                r2c1Move, r2c2Move, r2c3Move,
                r3c1Move, r3c2Move, r3c3Move];

            for (let i = 0; i < this.moves.length; i++) {
                squares[i].innerHTML = this.moves[i];
            }
            scoreGamesPlayed.innerHTML = this.gamesPlayed;
            scoreGamesWon.innerHTML = this.gamesWon;
            scoreGamesLost.innerHTML = this.gamesLost;
        }

        /**
         * Checks whether win, lose, or tie conditions have been met
         */
        checkWin() {
            if (xWin || oWin) return;
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

            //checking if the board is full (no win or loss)
            let full = true;
            for (let i = 0; i < this.moves.length; i++) {
                if (this.moves[i] == "") {
                    full = false;
                    break;
                }
            }

            if (full) {
                boardFull = true;
                this.gamesPlayed++;
                scoreGamesPlayed.innerHTML = this.gamesPlayed;
                gameOver();
            }
        }
    }

    const r1c1Move = document.getElementById("r1-c1-move");
    const r1c2Move = document.getElementById("r1-c2-move");
    const r1c3Move = document.getElementById("r1-c3-move");
    const r2c1Move = document.getElementById("r2-c1-move");
    const r2c2Move = document.getElementById("r2-c2-move");
    const r2c3Move = document.getElementById("r2-c3-move");
    const r3c1Move = document.getElementById("r3-c1-move");
    const r3c2Move = document.getElementById("r3-c2-move");
    const r3c3Move = document.getElementById("r3-c3-move");
    const help = document.getElementById("help");
    const helpClose = document.getElementById("help-close");
    const helpDiv = document.getElementById("help-div");
    const scoreGamesPlayed = document.getElementById("games-played");
    const scoreGamesWon = document.getElementById("games-won");
    const scoreGamesLost = document.getElementById("games-lost");
    let xWin = false;
    let oWin = false;
    let boardFull = false;
    
    //getting the game from localStorage if it exists
    if(localStorage["save"]){
        let saveFile = JSON.parse(localStorage["save"]);
        game = new TicTacToe(saveFile.moves, saveFile.gamesPlayed, saveFile.gamesWon, saveFile.gamesLost, saveFile.yourTurn);
        game.checkMoves();

    }
    else{
        game = new TicTacToe(["", "", "", "", "", "", "", "", ""], 0, 0, 0, true);
    }

    /**
     * creates a new tic tac toe game and resets the win/loss/tie variables 
     */
    function newGame() {
        setTimeout(() => {
            game = new TicTacToe(["", "", "", "", "", "", "", "", ""], game.gamesPlayed, game.gamesWon, game.gamesLost, true);
            game.checkMoves();
            xWin = false;
            oWin = false;
            boardFull = false;
            localStorage["save"] = JSON.stringify(game);
        }, 1500);
    }

    /**
     * calls the newGame function if the current game has ended
     */
    function gameOver() {
        newGame();
    }

    help.addEventListener("click", function(){
        helpDiv.style.visibility = "visible";
    });

    helpClose.addEventListener("click", function(){
        helpDiv.style.visibility = "hidden";
    });

    /**
     * below are event listeners for all the squares in the game board
     */
    document.getElementById("r1-c1").addEventListener("click", function () {
        if (!game.yourTurn || xWin || oWin) return;
        if (game.yourTurn) {
            game.makeMove(0);
            r1c1Move.innerHTML = "X";
            game.yourTurn = false;
            if (!xWin && !oWin && !boardFull) {
                game.computerMove();
            }
        }
    });

    document.getElementById("r1-c2").addEventListener("click", function () {
        if (!game.yourTurn || xWin || oWin) return;
        game.makeMove(1);
        r1c2Move.innerHTML = "X";
        game.yourTurn = false;
        if (!xWin && !oWin && !boardFull) {
            game.computerMove();
        }
    });

    document.getElementById("r1-c3").addEventListener("click", function () {
        if (!game.yourTurn || xWin || oWin) return;
        game.makeMove(2);
        r1c3Move.innerHTML = "X";
        game.yourTurn = false;
        if (!xWin && !oWin && !boardFull) {
            game.computerMove();
        }
    });

    document.getElementById("r2-c1").addEventListener("click", function () {
        if (!game.yourTurn || xWin || oWin) return;
        game.makeMove(3);
        r2c1Move.innerHTML = "X";
        game.yourTurn = false;
        if (!xWin && !oWin && !boardFull) {
            game.computerMove();
        }
    });

    document.getElementById("r2-c2").addEventListener("click", function () {
        if (!game.yourTurn || xWin || oWin) return;
        game.makeMove(4);
        r2c2Move.innerHTML = "X";
        game.yourTurn = false;
        if (!xWin && !oWin && !boardFull) {
            game.computerMove();
        }
    });

    document.getElementById("r2-c3").addEventListener("click", function () {
        if (!game.yourTurn || xWin || oWin) return;
        game.makeMove(5);
        r2c3Move.innerHTML = "X";
        game.yourTurn = false;
        if (!xWin && !oWin && !boardFull) {
            game.computerMove();
        }
    });

    document.getElementById("r3-c1").addEventListener("click", function () {
        if (!game.yourTurn || xWin || oWin) return;
        game.makeMove(6);
        r3c1Move.innerHTML = "X";
        game.yourTurn = false;
        if (!xWin && !oWin && !boardFull) {
            game.computerMove();
        }
    });

    document.getElementById("r3-c2").addEventListener("click", function () {
        if (!game.yourTurn || xWin || oWin) return;
        game.makeMove(7);
        r3c2Move.innerHTML = "X";
        game.yourTurn = false;
        if (!xWin && !oWin && !boardFull) {
            game.computerMove();
        }
    });

    document.getElementById("r3-c3").addEventListener("click", function () {
        if (!game.yourTurn || xWin || oWin) return;
        game.makeMove(8);
        r3c3Move.innerHTML = "X";
        game.yourTurn = false;
        if (!xWin && !oWin && !boardFull) {
            game.computerMove();
        }
    });
});
