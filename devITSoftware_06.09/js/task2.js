/*
2. Напишите функцию генератор chunkArray, которая возвращает итератор возвращающий части массива указанной длинны.

Пример:

const iterator = chunkArray([1,2,3,4,5,6,7,8], 3);
iterator.next() // { value: [1,2,3], done: false }
iterator.next() // { value: [4,5,6], done: false }
iterator.next() // { value: [7,8], done: false }
iterator.next() // { value: undefined, done: true }
*/

function* chunkArray(arr, chunkSize) {
    if (Array.isArray(arr)) {
        let index = 0; // змінна вказує на поточний індекс масива
        while (index < arr.length) {        
        yield arr.slice(index, (index += chunkSize));
        }
    }
    
}
  
const iterator = chunkArray([1,2,3,4,5,6,7,8], 3);
  

console.log(iterator.next()); // { value: [1, 2, 3], done: false }
console.log(iterator.next()); // { value: [4, 5, 6], done: false }
console.log(iterator.next()); // { value: [7, 8], done: false }
console.log(iterator.next()); // { value: undefined, done: true }


/*
Дана функція генератор приймає два аргументи, масив arr, який потрібно розділити на частини, і chunkSize, розмір кожної частини.
Створюю змінну index, яка вказуватиме на поточний індекс масива.
За допомогою циклу while, створюю ітератор, він буде виконуватись, доки поточний індекс буде менший довжини масиву.
За допомогою ключового слова yield ми зупиняємо і поновлюємо виконання функцію генератор.
Повертаю ту частину масиву яка передається параметром, починаючи з поточного індексу index і закінчуючи index + chunkSize. Після цього значення index збільшується і в подальшому повернеться наступна частина масиву.
Потім, викликаючи метод next(), повертається об'єкт з двома властивостями value і done:
value - частина масиву, яка повертається;
done - якщо ітератор може створити наступне значення в послідовності буде false, в протилежному випадку буде  true;
*/