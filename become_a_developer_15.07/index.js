const findFirstUniqueCharacter = (text) => {
    const chars = [];
    const counts = {};
    const words = text.split(/\s+/);
  
    for (let word of words) {
        if(!word.slice(1).includes(word[0])){
            chars.push(word[0])
        }  
    }

    for (let char of chars) {
      if (counts[char] === undefined) {
        counts[char] = 1;
      } else {
        counts[char]++;
      }
    }
   
    for (let char of chars) {
        if (counts[char] === 1) {
        return char; 
        }
    }

    return null;
  }
  
  let text = `C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (c) Bjarne Stroustrup`;
  
  const result = findFirstUniqueCharacter(text);
  console.log(`The first unique character is: ${result}`);




/*
Description

1 Функція findFirstUniqueElement приймає в якості аргумента строку.
2 Створюємо необхідні нам змінні.
3 Методом split - розбиваємо цю строку на масив слів.
4 Проходимось по цьому масиві циклом і кожне слово перевіряємо на умову, чи не повторюється перший символ цього слова в слові ще раз?, якщо ні то додаємо цей символ в новий масив.
5 Проходимося по кожному елементу масива. Для кожного елемента перевіряється, чи вже існує відповідний ключ у об'єкті counts. Якщо ключ відсутній, це означає, що це перше входження елемента, тому ми присвоюємо йому значення 1. В іншому випадку, якщо ключ вже існує, ми збільшуємо значення на 1.
6 Проходимося по кожному елементу масива. Для кожного елемента перевіряється, чи його кількість входжень дорівнює 1. Якщо це так, то ми знаходимо перший унікальний елемент і повертаємо його.
Якщо жоден елемент не виявився унікальним, функція повертає null.

Використовував цикли, тому що код виконується трішки швидше
*/
  