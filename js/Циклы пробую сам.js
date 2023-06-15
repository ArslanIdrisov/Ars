let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess;
let attempts = 0;

while (guess !== randomNumber) {
    guess = parseInt(prompt('Угадайте число от 1 до 10:'));
    attempts++;

    if (guess < randomNumber) {
        console.log('Загаданное число больше.');
    } else if (guess > randomNumber) {
        console.log('Загаданное число меньше');
    } else {
        console.log('Поздравляю! Вы угадали число ${randomNumber} за ${attempts} попыток')
    }
}