// №1
// let num1 = Number (prompt('Введите начльную цифру диапазона'));
// let num2 = Number (prompt('Введите конечную цифру'));
// let sum = 0;
// if (num1 < num2) {
//     while (num1 <= num2) {
//         sum += num1;
//         num1++;
//     }
// }else if (num1 > num2) {
//     while (num1 >= num2) {
//         sum += num2;
//         num2++;
//     }
// }
// alert(`Сумма всех чисел в указанном диапазоне равна ${sum}`)

// №2
// let num1 = Number(prompt('Введите первую цифру'));
// let num2 = Number(prompt('Введите вторую цифру'));
// while(num1 != 0 && num2 != 0) {
//     if(num1 > num2) {
//         num1 = num1 % num2;
//     }else {
//         num2 = num2 % num1;
//     }
// }
// alert(`Наибольший общий делитель двух указанных чисел равен ${num1 + num2}`)

// №3
// let num = Number(prompt('Введите число'));
// let number = [];
// for(let i = 2; i < num; i++) {
//     if(num % i == 0 && num !== 1) {
//         console.log(i);
//         number.push(i);
//     }
// }
// alert(`Все делители числа ${num}: ${number}`)

// №4
// let num = prompt('Введите число');
// let count = 0;
// for(let i = 0; i < num.length; i++) {
//     count += 1;
// }
// alert(`Число состоит из ${count} цифр`)

// №5
// let positive = 0;
// let negative = 0;
// let zero = 0;
// let even = 0;
// let odd = 0;
// for(let i = 1; i <= 10; i++) {
//     const num = prompt('Введите число');
//     if(num > 0) {
//         positive++;
//     };
//     if(num < 0) {
//         negative++;
//     };
//     if(num == 0) {
//         zero++;
//     };
//     if(num % 2 == 0) {
//         even++;
//     };
//     if(num % 2 !== 0) {
//         odd++;
//     }
// }
// alert(`Из введенных чисел - положительных: ${positive}, отрицательных: ${negative}, нулей: ${zero}, четных: ${even}, нечетных: ${odd}.`)

// №6
// do {
//     let num1 = prompt('Введите первое число');
//     let num2 = prompt('Введите второе число');
//     let symbol = prompt('Введите знак', '+, -, *, /');
//     let answer = eval(`${num1} ${symbol} ${num2}`);
//     alert(`Ответ ${answer}`)
// }while(confirm('Решить еще один пример?'))

// №7
// do {
//     let x = prompt('Введите число');
//     let move = Number(prompt('На сколько цифр сдвинуть?'));
//     alert(x.slice(move) + x.slice(0, move))
// }while(confirm('Ещё одно число?'))

// №8
// const day = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// let today = 0;
// let nextday;
// do {
//     alert(`День недели - ${day[today]}`);
//     nextday = confirm('Хотите увидеть следующий день?');
//     today++;
//     if(today === day.length) {
//         today = 0;
//     }
// }while(nextday)

// №9
// let table = [];
// for (let i = 2; i <= 9; i++) {
//     table.push(`\n Таблица умножения ${i}: \n`);
//     for(let j = 1; j <= 10; j++) {
//         table.push(`${i} * ${j} = ${i*j}`);
//     }
// }
// alert(table.join(''));
// console.log(table.join(''))

// №10
// let num = Number(alert('Загадайте число от 1 до 100'));
// let small = 0;
// let big = 100;
// let N = 50;
// while(num !== N) {
//     let answer = prompt(`Ваше число >, <, или = ${N}?`, `>, <, =`);
//     if(answer == '>') {
//         small = N;
//         N = Math.ceil((big - small) / 2 + small);
//     }else if(answer == '<') {
//         big = N;
//         N = Math.ceil((big - small) / 2 + small);
//     }else {
//         break;
//     }
// }
// alert(`Задуманное число ${N}`)