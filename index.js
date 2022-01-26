class Game {
  #player1DiceImg = document.querySelector(".img1");
  #player2DiceImg = document.querySelector(".img2");
  #gameHeading = document.querySelector(".game-heading");
  #player1DiceValue;
  #player2DiceValue;
  constructor() {
    this.#setIntialDice(6);
  }
  #setIntialDice(dice) {
    this.#player1DiceImg.src = `images/dice${dice}.png`;
    this.#player2DiceImg.src = `images/dice${dice}.png`;
  }

  #setDice(dice1, dice2) {
    this.#player1DiceImg.src = `images/dice${dice1}.png`;
    this.#player2DiceImg.src = `images/dice${dice2}.png`;
    this.#player1DiceValue = dice1;
    this.#player2DiceValue = dice2;
    this.#setHeading();
  }
  #setHeading() {
    if (this.#player1DiceValue > this.#player2DiceValue)
      return (this.#gameHeading.textContent = "Player 1 Wins!");

    if (this.#player1DiceValue < this.#player2DiceValue)
      return (this.#gameHeading.textContent = "Player 2 Wins!");

    return (this.#gameHeading.textContent = "Draw");
  }

  #getRandNum() {
    return Math.ceil(Math.random() * 6);
  }

  rollDice() {
    this.#setDice(this.#getRandNum(), this.#getRandNum());
  }
}

const game = new Game();

window.addEventListener("click", function (e) {
  game.rollDice();
});
