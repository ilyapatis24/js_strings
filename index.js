"use strict";

/Mission 1/
let product = 'Печенье «Юбилейное», 1 кг', inBasket = true, quantity = 5;

if (inBasket === true) {
    console.log(`${quantity} x ${product}`);
}
console.log("\n#################################\n");
/Mission2/

let username = "Ilya", accountStatus = "regular", cashbackPercentage = 0;

console.log(`${username} | ${accountStatus} аккаунт`);
switch(accountStatus) {
    case "extended":
        cashbackPercentage = Math.floor((cashbackPercentage + 0.15)*100); 
        console.log(`Вы получаете ${cashbackPercentage} % с покупок на бонусный счёт`);
        break;
    case "premium":
        cashbackPercentage = Math.floor((cashbackPercentage + 0.2)*100);
        console.log(`Вы получаете ${Math.floor(cashbackPercentage)} % с покупок на бонусный счёт`);
        break;
    case "vip":
        cashbackPercentage = Math.floor((cashbackPercentage + 0.3)*100);
        console.log(`Вы получаете ${Math.floor(cashbackPercentage)} % с покупок на бонусный счёт`);
        break;
    default:
        cashbackPercentage = Math.floor((cashbackPercentage + 0.1)*100);
        console.log(`Вы получаете ${Math.floor(cashbackPercentage)} % с покупок на бонусный счёт`);
        break;
}

console.log("\n#################################\n");
/Mission3/
let user = 'Killer2001';
if (user === 'admin') {
    console.log("Привет, админ!/n Проверь нет ли жалоб от пользователей!");
} else {
    console.log('Здравствуйте ' + user + '! У нас новые поступления халвы!');
}

let newOrders = 3;
let errorOrders = 3;
// показываем сколько новых заказов, а сколько заказов с ошибкой
if (newOrders > errorOrders) {
    console.log('В магазине ' + errorOrders + ' новых заказов с ошибкой!');
}

if (newOrders === errorOrders) {
    console.log('ВНИМАНИЕ! Что-то идет не так! Все новые заказы завершились ошибкой!');
}