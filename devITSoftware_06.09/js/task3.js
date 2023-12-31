/*
3. Напишите функцию обертку, которая на вход принимает массив функций и их параметров, 
а возвращает массив  результатов их выполнения. Количество аргументов исполняемой функции **не ограничено**!

Пример:

const f1 = (cb) => {cb(1)}
const f2 = (a, cb) => {cb(a)}
const f3 = (a, b, cb) => {setTimeout(() => cb([a, b]), 1000)}

bulkRun(
  [
    [f1, []],
    [f2, [2]]
    [f3, [3, 4]]
  ]
).then(console.log) // Output: [1, 2, [3, 4]]
*/


async function bulkRun(functionsAndArgs) {

    const results = []; // Масив для збереження результатів виконання функцій.
  
    for (const [func, args] of functionsAndArgs) {  // Перебирається масив
      const result = await new Promise((resolve) => { 
        func(...args, (result) => {
          resolve(result);
        });
      });
      results.push(result); // Додаємо результат виконання функції до масиву результатів.
    }
  
    return results; // Повертаємо масив результатів виконання всіх функцій.
}

  

const f1 = (cb) => cb(1);
const f2 = (a, cb) => cb(a);
const f3 = (a, b, cb) => setTimeout(() => cb([a, b]), 1000);


bulkRun(
    [
        [f1, []],
        [f2, [2]],
        [f3, [3, 4]]
    ]
).then(console.log); // Output: [1, 2, [3, 4]]

/*
Асинхронна функція bulkRun приймає аргумент functionsAndArgs, який є масивом, в якому кожен елемент 
представляє пару, де перший елемент це функція, а другий елемент це масив аргументів для цієї функції.

Створюємо порожній масив results, який буде використовуватися для збереження результатів виконання функцій.
Використовуємо цикл for of, перебираємо масив functionsAndArgs, де кожен елемент має функцію та масив її 
аргументів.

Для виклику кожної функції використовуємо await та promise, передаюємо функцію resolve в конструктор 
обіцянки, яка буде викликана після завершення виконання функції.

Потім викликається функція, за допомогою спред оператора в якості аргумента 
    func(...args, (result) => { resolve(result); });

Оскільки кількість аргументів може бути різною, використовуємо спред оператор для розпакування елементів 
масиву.

Також передаємо функції зворотній виклик, яка отримає результат виконання функції і викличе resolve 
для завершення обіцянки.

Результат виконання функції додається до масиву результатів.
В кінці повертається масив результатів виконання всіх функцій.
*/