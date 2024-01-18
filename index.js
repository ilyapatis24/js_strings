"use strict";

/Mission 1/
let product = 'Печенье «Юбилейное», 1 кг';
let inBasket = true;
let quantity = 5;

if (inBasket === true) {
    console.log(`${quantity} x ${product}`);
}
console.log("\n#################################\n");
/Mission2/

let username = "Ilya";
let accountStatus = "regular";
let cashbackPercentage = 0;
let translateAccount = "";

switch(accountStatus) {
    case "extended":
        cashbackPercentage = 0.15; 
        translateAccount = "улучшенный"
        break;
    case "premium":
        cashbackPercentage = 0.2;
        translateAccount = "премиум"
        break;
    case "vip":
        cashbackPercentage = 0.3;
        translateAccount = "вип"
        break;
    default:
        cashbackPercentage = 0.1;
        translateAccount = "обычный"
        break;
}

console.log(`${username} | ${translateAccount} аккаунт`);
console.log(`Вы получаете ${Math.floor(cashbackPercentage*100)} % с покупок на бонусный счёт`);

console.log("\n#################################\n");
/Mission3/
let user = 'admin';
if (user === 'admin') {
    console.log("Привет, админ!\nПроверь нет ли жалоб от пользователей!");
} else {
    console.log('Здравствуйте ' + user + '! У нас новые поступления халвы!');
}

let newOrders = 6;
let errorOrders = 3;
// показываем сколько новых заказов, а сколько заказов с ошибкой
if (newOrders > errorOrders) {
    console.log('В магазине ' + errorOrders + ' новых заказов с ошибкой!');
}

if (newOrders === errorOrders) {
    console.log('ВНИМАНИЕ! Что-то идет не так! Все новые заказы завершились ошибкой!');
}