# Skb Test Task

---

### v.1.8.1

- Фиксация бага некорректрого отображения иконки выполненной таски
- Удаление библиотеки gh-pages
- Деплой приложения на github pages

### v.1.8.0

- Деплой приложения на github pages
- Добавил инструкцию для деплоя в README.md
- Удалил из стора моковые данные, которые нужны были для разработки

### v.1.7.1

- Удаление лишней библиотеки @ngrx/effects"
- Корректировка файловой структуры в components
- Добавление конфига автоматичекой сортировки импортов (нужно было в самом начале разработки еще добавить)

### v.1.7.0

- Верстка и стили под мобильные устройства

### v.1.6.0

- Добавлена логика изменения порядка тасок с помощью drag-&-drop
- Update dependencies

### v.1.5.1

- Добавлены информационные тултипы на кнопки в задизейбленном состоянии

### v.1.5.0

- Логика закрытия таски (done)
- Логика запрета редактирования закрытой (done) таски
- Корректировка стилей кнопок

### v.1.4.0

- Логика просмотра таски
- Корректировка структуры проекта - добавлена папка ui в components

### v.1.3.0

- Логика редактирования таски
- Добавлена валидация формы на редактирование
- Добавлена проверка на максимальную длину заголовка таски

### v.1.2.0

- Реализовано отображение списка тасок согласно условию: заголовок и дата
- Реализована логика цветового выделения таски в зависимости от дедлайна соглано условиям задачи
- Логика удаления таски через подтверждающее модальное окно
- Добавлены общие стили для кнопок
- Добавлены мок данные в инишел стейт для удобства разработки списка тасок

### v.1.1.1

- Добавлена директива автофокуса для первого инпута формы добавления таски

### v.1.1.0

- Логика добавления новой таски через модальное окно
- Валидация формы добавления таски (сообщения о минимальных количествах заполненности полей, дизейбл кнопки добавления при незаполненности формы)
- Скорректирована файловая структура: папки с компонентами, стором, моделью перенесены в App
- Добавлены общие глобальные стили для всех кнопок
- Корректировка правил eslint

### v.1.0.1

- Инициализация стора (ngrx)
- Создан редьюсер
- Добавлены основные экшены на добавление, изменение и удаление таски
- Добавлен селектор для списка тасок
- Подключен стор в модуль + devtools

### v.1.0.0

- Генерация проекта, удаление лишнего кода из стандартного шаблона
- Добавлен git репозиторий
- Добавлен базовый конфиг eslint
- Установлена библиотека ngrx
- Добавлен файл CHANGELOG.md
