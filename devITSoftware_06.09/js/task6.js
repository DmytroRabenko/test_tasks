/*
6. Есть функция `primitiveMultiply`, которая умножает числа, но случайным образом может выбрасывать 
исключения типа: `NotificationException`, `ErrorException`. Задача написать функцию обертку которая 
будет повторять вычисление при исключении `NotificationException`, но прекращать работу при исключениях 
`ErrorException`

Пример:

function NotificationException() {}
function ErrorException() {}

function primitiveMultiply(a, b) {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if(rand > 0.85) {
    throw new ErrorException()
  } else {
    throw new NotificationException()
  }
}

function reliableMultiply(a, b) {
  // Ваш код
}

console.log(reliableMultiply(8, 8));

*/

function NotificationException() {}
function ErrorException() {}

function primitiveMultiply(a, b) {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if (rand > 0.85) {
    throw new ErrorException();
  } else {
    throw new NotificationException();
  }
}

function reliableMultiply(a, b) {
  while (true) {
    try {
      return primitiveMultiply(a, b);
    } catch (error) {
      if (error instanceof ErrorException) {
        // Якщо виникло ErrorException, завершуємо роботу і викидаємо помилку наверх.
        throw error;
      } else if (error instanceof NotificationException) {
        // Якщо виникло NotificationException, просто продовжуємо цикл і повторюємо спробу.
        continue;
      } else {
        // Інші типи помилок не повинні оброблятися і просто прокидуються наверх.
        throw error;
      }
    }
  }
}


try {
  console.log(reliableMultiply(8, 8));
} catch (error) {
  if (error instanceof ErrorException) {
    console.log("Помилка ErrorException - робота завершилась.");
  } else {
    console.log("Виникла інша помилка.");
  }
}

/*
Спочатку ми визначили два спеціальних типи помилок: NotificationException і ErrorException. 
Функція primitiveMultiply генерує ці помилки в залежності від випадкового значення.

Функція primitiveMultiply(a, b) виконує множення двох чисел a і b. Випадковим чином, з ймовірностями 
вказаними , які ми вказали, вона може згенерувати NotificationException або ErrorException.

Функція reliableMultiply(a, b) - це обгортка над primitiveMultiply, яка вирішує проблему надійності 
операції множення. Ось як вона працює:

1. Ми використовуємо нескінченний цикл while (true), оскільки ми хочемо повторювати спробу до тих пір, 
поки не отримаємо валідний результат або не виникне ErrorException.

2. У циклі ми спробуємо викликати primitiveMultiply(a, b).

3. Ми використовуємо конструкцію try...catch, щоб обробити винятки.

4. Якщо виникає NotificationException, ми просто продовжуємо цикл за допомогою continue. Це означає, 
що ми не припиняємо виконання функції, а лише повторюємо спробу отримати валідний результат.

5. Якщо виникає ErrorException, ми прокидуємо цю помилку наверх за допомогою throw error. Це означає, 
що функція reliableMultiply завершить своє виконання.

6. Якщо виникає будь-яка інша помилка, вона також прокидується наверх і функція завершується.


Ми викликаємо функцію reliableMultiply(8, 8) і обробляємо можливі помилки. 
Якщо виникає ErrorException, в консоль виведеться повідомлення "Помилка ErrorException - робота завершилась." 
Якщо виникає інша помилка, виведеться "Виникла інша помилка..".

*/