// Задание 1
let a = 10;
a = 20;
alert(a);

// Задание 2
const year = 2007;
alert(year);

// Задание 3
const JSname = 'Brendan Eich';
alert(JSname);

// Задание 4
let x = 10, y = 2;
alert(x+y);
alert(x-y);
alert(x*y);
alert(x/y);

// Задание 5
let x1 = 2;
Result = x1**5;
alert(Result);

// Задание 6
let a1 = 9, b = 2;
Result = a1%b;
alert(Result);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

// Задание 8
let age = Number(prompt('Сколько вам лет?'));
alert(age);

// Задание 9.0
let user = {
    name: "Qwe",
    age: 30,
    isAdmin: true,
};

// Задание 9.1
user.сityOfresidence= "Moscow";

// Задание 9.2
user.age = 27;

// Задание 9.3
delete user.сityOfresidence;

// Задание 9.3
let info = prompt(`Какую информацию хотите узнать о пользователе?`, `name`);
alert(user[info]);

// Задание 10
let name = prompt('Введите ваше имя');
alert(`Привет, ${name}!`);