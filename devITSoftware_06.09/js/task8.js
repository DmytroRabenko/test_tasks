/*
8. Напишите функцию `combos`, которая принимает положительное целое число `num` и возвращает массив массивов положительных целых чисел, где сумма каждого массива равна  `num`.  Массивы не должны повторяться.

Пример:

combos(3);
// Output: 
[
  [ 3 ],
  [ 1, 1, 1 ],
  [ 1, 2 ] 
]

combos(10); 
// Output: 
[ 
  [ 10 ],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 2 ],
  [ 1, 1, 1, 1, 1, 1, 1, 3 ],
  [ 1, 1, 1, 1, 1, 1, 4 ],
  [ 1, 1, 1, 1, 1, 5 ],
  [ 1, 1, 1, 1, 6 ],
  [ 1, 1, 1, 7 ],
  [ 1, 1, 8 ],
  [ 1, 9 ],
  [ 1, 1, 1, 1, 1, 1, 2, 2 ],
  [ 1, 1, 1, 1, 1, 2, 3 ],
  [ 1, 1, 1, 1, 2, 4 ],
  [ 1, 1, 1, 1, 2, 2, 2 ],
  [ 1, 1, 1, 1, 3, 3 ],
  [ 1, 1, 1, 2, 5 ],
  [ 1, 1, 1, 2, 2, 3 ],
  [ 1, 1, 1, 3, 4 ],
  [ 1, 1, 2, 6 ],
  [ 1, 1, 2, 2, 4 ],
  [ 1, 1, 2, 2, 2, 2 ],
  [ 1, 1, 2, 3, 3 ],
  [ 1, 1, 3, 5 ],
  [ 1, 1, 4, 4 ],
  [ 1, 2, 7 ],
  [ 1, 2, 2, 5 ],
  [ 1, 2, 2, 2, 3 ],
  [ 1, 2, 3, 4 ],
  [ 1, 3, 6 ],
  [ 1, 3, 3, 3 ],
  [ 1, 4, 5 ],
  [ 2, 8 ],
  [ 2, 2, 6 ],
  [ 2, 2, 2, 4 ],
  [ 2, 2, 2, 2, 2 ],
  [ 2, 2, 3, 3 ],
  [ 2, 3, 5 ],
  [ 2, 4, 4 ],
  [ 3, 7 ],
  [ 3, 3, 4 ],
  [ 4, 6 ],
  [ 5, 5 ]
]
*/
function combos(num) {
    // Перевірка на позитивне ціле число
    if (!Number.isInteger(num) || num <= 0) {
        console.error('Параметр "num" повинен бути позитивним цілим числом.');
        return [];
    }
    const results = []; // Cтворюю порожній масив results, в якому зберігатимуться знайдені комбінації
    
    function generateCombinations(targetSum, currentCombination, startNum) {
      if (targetSum === 0) {
        results.push([...currentCombination]);
        return;
      }
      
      for (let i = startNum; i <= targetSum; i++) {
        currentCombination.push(i);
        generateCombinations(targetSum - i, currentCombination, i);
        currentCombination.pop();
      }
    }
    
    generateCombinations(num, [], 1);
    
    return results;
}
  

  console.log(combos(3));
  console.log(combos(10));

/*
В першу чергу перевіряю, що приходить позитивне ціле число

Cтворюю порожній масив results, в якому зберігатимуться знайдені комбінації.

Функція generateCombinations виконує генерацію комбінацій. Вона приймає в якості аргументів
targetSum - суму, яка повинна вийти;
currentCombination - поточна комбінація;
start - початкове число для генерації.

У функції generateCombinations, якщо targetSum дорівнює 0, то це означає, що знайдено комбінацію, і вона додається до результату.

Використовую цикл for, щоб спробувати всі можливі числа від start до targetSum.

Додаю поточне число до currentCombination, викликаю generateCombinations рекурсивно для залишку targetSum - i, і потім видаляю поточне число з currentCombination, щоб спробувати інше число.

На кожному кроці рекурсії ми переходить до наступного числа, якщо попереднє число вже було використане, це дозволяє уникнути повторень.

Завершивши всі рекурсивні виклики, функція generateCombinations повертає знайдені комбінації.

На виході ми повертається results, який містить всі знайдені комбінації.
 */