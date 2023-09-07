/*1. Напишите функцию deepEqual для проверки двух обьектов на идентичность. 
Пример:

deepEqual({name: 'test'}, {name: 'test'}) // output true
deepEqual({name: 'test'}, {name: 'test1'}) // output false
deepEqual({name: 'test', data: {value: 1}}, {name: 'test', data: {value: 2}}) // output false
deepEqual({name: 'test'}, {name: 'test', age: 10}) // false

*/

function deepEqual(obj1, obj2) {

    // Перевіряємо, чи передані аргументи є об'єктами
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false;
    }
    
    // Перевіряємо, чи кількість властивостей у об'єктів однакова
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
    
    // Перевіряємо кожну властивість та її значення
    for (const key of keys1) {
      const value1 = obj1[key];
      const value2 = obj2[key];

      // Рекурсивно перевіряємо вкладені об'єкти
      if (typeof value1 === 'object' && typeof value2 === 'object') {
        if (!deepEqual(value1, value2)) {
          return false;
        }
      } else if (value1 !== value2) {
        return false;
      }
    }

    return true;
}
  
// Приклади об'єктів:
const object1 = { name: 'Test', id: 175, price: 30};
const object2 = { id: 175, price: 30, name: 'Test'};
const object3 = { name: 'Test', id: 175, price: 30};
const object4 = { name: 'Test', id: 175, price: {price: 30, sale: 5}};
const object5 = { name: 'Test', id: 175, price: {price: 30, sale: 5}};
const object6 = { name: 'Test', id: 175, price: {price: '30', sale: 5}};
  

console.log(deepEqual(object1, object2)); // Поверне true
console.log(deepEqual(object1, object3)); // Поверне true
console.log(deepEqual(object1, object4)); // Поверне false
console.log(deepEqual(object4, object5)); // Поверне true
console.log(deepEqual(object5, object6)); // Поверне false

  

/*
Дана функція порівнює два обєкти на ідентичність їх властивостей.

Спочатку перевіряємо чи є передані аргументи об'єктами, потім чи однакова кількість властивостей 
у двох об'єктах. 
Якщо кількість властивостей не співпадає, то вони вже не можуть бути ідентичними. 
Потім порівнюємо кожну властивість та її значення між об'єктами.
Перевіряємо чи є наші властивості об'єктами, якщо так, - то використовуємо для порівняння рекурсію, якщо 
ні то порівнюємо властивості
Якщо всі властивості та їх значення однакові, функція повертає true, в іншому випадку - false.
*/
