<template>
  <div class = "md-body">
    <h1>История релизов в этом приложении</h1>
    <div>
      <h2>🏆 <a href = "https://github.com/mister-Mandarin/tocode-Notes/releases/tag/v4.0">Release v4.0</a></h2>
      <h3>Реализовано:</h3>
      <ul>
        <li>Приложение из курса по vue 3 вынес в отдельную ветку
          <a href = "https://github.com/mister-Mandarin/tocode-Notes/tree/note-vue3" target = "_blank">note-vue3</a>
        </li>
        <li>Объединил приложения Notes с курса по vue2 и vue3 в одно.</li>
        <li>Навигация через верхние или нижние пункты меню.</li>
        <li>Note vue2 не адаптировано под мобилюную версию. Note vue3 адаптировано.</li>
        <li>Публикую итоговый вариант на GitHub Pages</li>
      </ul>
    </div>
    <br>
    <div>
      <h2>🦁 <a href = "https://github.com/mister-Mandarin/tocode-Notes/releases/tag/v3.9">Release v3.9</a></h2>
      <h3>Реализовано:</h3>
      <ul>
        <li>ДЗ вынесено в отдельную ветку проекта
          <a href = "https://github.com/mister-Mandarin/tocode-Notes/tree/note-vue2" target = "_blank">note-vue2</a>
        </li>
        <li>Легкое ДЗ - добавление приоритета заметки и менять цвет заметки в зависимости от приоритета.</li>
        <li>Сложное ДЗ - редактирование заметки при клике на заголовок.
          <ul>
            <li>По Enter принимать изменения и менять время;</li>
            <li>По Esc сбрасывать изменения, время не должно измениться;</li>
          </ul>
        </li>
      </ul>
    </div>
    <br>
    <div>
      <h2>🥇 <a href = "https://github.com/mister-Mandarin/tocode-Notes/releases/tag/v3.0">Release v3.0</a></h2>
      <h3>Реализовано:</h3>
      <ul>
        <li>Легкое ДЗ - перенести notes на vuex без local storage</li>
        <li>Сложное ДЗ - перенести все приложение notes на vuex, включая local storage</li>
      </ul>
    </div>
    <br>
    <div>
      <h2>🐼 <a href = "https://github.com/mister-Mandarin/tocode-Notes/releases/tag/v2.5">Release v2.5</a></h2>
      <h3>Реализовано:</h3>
      <ul>
        <li>Отправка заметки по Enter</li>
        <li>Новые стили вынесены в отдельный файл notes.scss</li>
        <li>Легкое ДЗ - при клике менять класс тегов</li>
        <li>Сложное ДЗ - добавлять активные теги к заметке</li>
        <li>Дополнительно сделалал, чтобы после отправки сбрасывались активные теги</li>
      </ul>
    </div>
    <br>
    <div>
      <h2>😍 <a href = "https://github.com/mister-Mandarin/tocode-Notes/releases/tag/v2.0">Release v2.0</a></h2>
      <h3>О релизе:</h3>
      <ul>
        <li>Соединил файлы с Release v1.7 для переноса на vue-cli</li>
        <li>Сборка настроена для дальнейших приложений курса</li>
      </ul>
    </div>
    <br>
    <div>
      <h2>😎 <a href = "https://github.com/mister-Mandarin/tocode-Notes/releases/tag/v1.7">Release v1.7</a></h2>
      <h3>Ревью от преподавателя и ДЗ:</h3>
      <ul>
        <li>Исправлены ошибки и недочеты</li>
        <li>Добавлена проверка на длину заметки и trim</li>
      </ul>
    </div>
    <br>
    <div>
      <h2>🍏 <a href = "https://github.com/mister-Mandarin/tocode-Notes/releases/tag/v1.0">Release v1.0</a></h2>
      <h3>Сделано:</h3>
      <ul>
        <li>Приложение без vue-cli</li>
        <li>ДЗ - редактирование заметки</li>
      </ul>
    </div>
    <br>
    <p>Сделано на курсе <a href = "https://tocode.ru/courses/vuejs-3-s-nulya-do-rezultata/?r=l0j">
      Vue.js 3 С нуля до результата</a>
    </p>
  </div>
</template>
