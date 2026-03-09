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
    if (localStorage["save"]) {
        let saveFile = JSON.parse(localStorage["save"]);
        game = new TicTacToe(saveFile.moves, saveFile.gamesPlayed, saveFile.gamesWon, saveFile.gamesLost, saveFile.yourTurn);
        game.checkMoves();

    }
    else {
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

    help.addEventListener("click", function () {
        helpDiv.style.visibility = "visible";
    });

    helpClose.addEventListener("click", function () {
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

    const c = document.getElementById("splash-canvas");
    const ctx = c.getContext("2d");

    function drawLine(x1, x2, y1, y2) {
        ctx.strokeStyle = "rgb(157, 196, 219)";
        ctx.lineWidth = 5;
        ctx.lineCap = "round";

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    let verticalY1 = -240;
    let verticalY2 = 0;
    let leftHorizontalX1 = -260;
    let leftHorizontalX2 = 0;
    let rightHorizontalX1 = 300;
    let rightHorizontalX2 = 560;
    let line1Done = false;
    let line2Done = false;
    let line3Done = false;

    function incrementLines() {
        if (verticalY1 <= 30) {
            verticalY1++;
            verticalY2++;
        }
        else {
            line1Done = true;
        }

        if (leftHorizontalX1 <= 20) {
            leftHorizontalX1++;
            leftHorizontalX2++;
        }
        else {
            line2Done = true;
        }

        if (rightHorizontalX1 >= 20) {
            rightHorizontalX1--;
            rightHorizontalX2--;
        }
        else {
            line3Done = true;
        }
    }

    function update() {
        ctx.clearRect(0, 0, 300, 600);
        drawLine(100, 100, verticalY1, verticalY2);
        drawLine(200, 200, verticalY1, verticalY2);
        drawLine(leftHorizontalX1, leftHorizontalX2, 100, 100);
        drawLine(rightHorizontalX1, rightHorizontalX2, 190, 190);
    }

    function draw() {
        incrementLines();
        update();
        if (line1Done && line2Done && line3Done) {
            clearInterval(timerId);
            drawGame();
        }
    }

    ctx.font = "bold 90px Arial";
    ctx.fillStyle = "rgb(157, 196, 219)";

    function drawGame() {
        if (line1Done && line2Done && line3Done) {
            ctx.fillText("X", 120, 180);
            setTimeout(function () {
                ctx.fillText("O", 20, 270);
            }, 300);
            setTimeout(function () {
                ctx.fillText("X", 30, 90);
            }, 600);
            setTimeout(function () {
                ctx.fillText("O", 115, 270);
            }, 900);
            setTimeout(function () {
                ctx.fillText("X", 210, 270);
            }, 1200);

            setTimeout(function () {
                ctx.font = "bold 45px Arial";
                ctx.fillText("TIC TAC TOE", 10, 400);
            }, 1500);

            setTimeout(function () {
                c.style.visibility = "hidden";
            }, 2300);
        }

    }

    timerId = setInterval(draw, 12);
});
