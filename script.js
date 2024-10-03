function rollDice() {
    const dice = [];
    for (let i = 1; i <= 5; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        document.getElementById(`die${i}`).value = roll;
        dice.push(roll);
    }
    console.log("Dice rolled:", dice);
}
