/*
4. Напишите метод arrayToObject, который превращает массив в объект (использовать рекурсию). Пример:

var arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];

arrayToObject(arr)
// Outputs: {
	name: 'developer',
	age: 5,
	skills: {
		html: 4,
		css: 5,
		js: 5
	}
*/
function arrayToObject(arr) {
    const obj = {}; // Створюю порожній об'єкт, в який буде додаватися ключ-значення.
  
    for (const item of arr) {
      const [key, value] = item; // Деструктуризую поточний елемент масиву на ключ і значення.
  
      if (Array.isArray(value)) {
        // Перевірка, чи значення є масивом.
        // Якщо так, то застосовую рекурсивно функцію arrayToObject для перетворення вкладеного масиву в об'єкт.
        obj[key] = arrayToObject(value);
      } else {
        // Якщо значення не є масивом, то просто призначаю його ключу в об'єкті.
        obj[key] = value;
      }
    }
  
    return obj; // Повертаю сформований об'єкт.
  }

  
  // Приклад використання:
  var arr = [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]];
  
  console.log(arrayToObject(arr));
  