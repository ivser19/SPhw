// Задание 1
let password = 'Пароль';
let enterPassword = prompt('Введите пароль');

if (password === 'Пароль') {
  alert('Пароль введен верно')
} else {
  alert('Пароль введен неправильно')
}

// Задание 2
let cNumber = Number(prompt('Введите число'));
let c = 5;

if (c > 0 && c < 10) {
    alert('Верно')
} else if ((c < 0 && c > 10)) {
    alert('Неверно')
}

// Задание 3
let d = 1, e = 9;

if (d > 100 || e > 100) {
    alert('Верно')
} else {
    alert('Неверно')
}

// Задание 4
let a = '2';
let b = '3';

a = Number(2);
b = Number(3);

alert(a + b);

// Задание 5
let monthNumber = Number(prompt(`Введите номер месяца`));
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        alert('Зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна');
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето');
        break;
    case 9:
    case 10:
    case 11:
        alert('Осень');
        break;

    default: alert('Такого месяца не существует')
    break; 
}

// Задание 6
...

// Задание 7
let randomNumber = prompt('Пожалуйста, введите любое число');
let x = Number;

if (typeof num === 'number' && x % 2) {
    alert(num, 'Число четное');
} else {
    alert(Number.isNaN(num), 'Число нечетное');
}

// Задание 8
let clientOS = Number(prompt('Введите "0" если ОС - iOS, "1" - Android'));
console.log(clientOS);

if (clientOS === 0) {
    alert('Установите версию приложения для iOS по ссылке');
} else {
    alert('Установите версию приложения для Android по ссылке');
}

// Задание 9
let clientOS = Number(prompt('Введите "0" если ОС - iOS, "1" - Android'));
console.log(clientOS);
const deviceYear = 2015;
let clientDeviceYear = Number(prompt('Введите год выпуска вашей модели устройства в формате "ГГГГ"'));
console.log(clientDeviceYear);
switch (clientOS) {
    case 0:
        if (clientDeviceYear >= deviceYear) {
            alert('Установите версию приложения для iOS по ссылке');
        } else {
            alert('Установите версию приложения для Android по ссылке');
        }
        break;
    case 1:
        if (clientDeviceYear <= deviceYear) {
            alert('Установите облегченную версию приложения для iOS по ссылке');
        } else {
            alert('Установите облегченную версию приложения для Android по ссылке');
        }
        break;
    default: alert('Введено неверное значение');
    break;
}











