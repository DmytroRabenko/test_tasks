#### **=== GIT ===**

**Рабочее окружение**

Вы закончили работу над задачей для клиента и у вас есть рабочий код, который был создан без использования git. Клиент создал пустой репозиторий [git@example.com](mailto:git@example.com):example/test.git и расшалил для вас доступ.

**Задание**

Опишите ваши дальнейшие действия что бы ваш код появился в ветке master в репозитории [git@example.com](mailto:git@example.com):example/test.git



**ВІДПОВІДЬ**

1. Спочатку потрібно відкрити термінал в папці з нашими проектом.

2. Потрібно клонувати пустий репозиторій клієнта, виконавши команду: 

            git clone git@example.com:example/test.git

3. Додати всі файли проекту до репозиторію, виконавши команду: 

            git add .

4. Закомітити всі внесенні зміни, виконавши команду: 
    
            git commit -m "added all files"

5. Запушити всі зміни в гілку master репозиторію, виконавши команду: 

            git push origin master

