'use strict' ;


const comp_n = Math.ceil( Math.random() * 100);
console.log('Число:' + comp_n);
let message = 'Я загадал число от 0 до 100!Попробуй отгадать!';

const starttime = Date.now();
let user_n = + prompt(message);
while ( user_n !== comp_n) {
    if (user_n > comp_n) user_n = + prompt('Моё число меньше чем' +  user_n);
        else user_n = + prompt('Моё число больше чем' +  user_n);
    }
const GameTime = Date.now() - starttime;
alert('Да,это моё число')
alert('Итого ушло:'+ (GameTime/1000).toFixed(3) + 'секунд!')