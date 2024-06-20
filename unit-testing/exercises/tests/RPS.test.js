const whoWon = require("../RPS.js");

describe("test who won rock paper scissors!", function() {
    test("test returns 'Tie!' when both players choose the same option", function() {
        let output = whoWon("rock","rock");
        expect(output).toEqual("TIE!");
    })
    test("test returns 'Player 2 wins!' when P1 is Rock and P2 is Paper", function () {
        let output = whoWon("rock", "paper");
        expect(output).toEqual("Player 2 wins!");
    })
    test("test returns 'Player 2 wins!' when P1 is paper and P2 is scissors", function () {
        let output = whoWon("paper", "scissors");
        expect(output).toEqual("Player 2 wins!");
    })
    test("test returns 'Player 2 wins!' when P1 is scissors and P2 is rock", function () {
        let output = whoWon("scissors", "rock");
        expect(output).toEqual("Player 2 wins!");
    })
    test("test returns 'Incorrect Parameter' when a parameter is given that is not RPS", function () {
        let output = whoWon("sound of music", "scissors");
        expect(output).toEqual("Incorrect parameter");
    })
})