/* Дипломы, сертификаты и свидетельства (раздел «Об учителе → Достижения»).
   Новый документ: 1) положите скан в папку source/Achievements/;
   2) скопируйте блок ниже и поменяйте данные; не забудьте запятую между блоками.
   thumb (маленькое превью) можно не указывать — тогда в списке покажется сам скан. */
var ACHIEVEMENTS = [
  {
    kind: "Сертификат",
    title: "Публикация статьи «учитель-олигофренопедагог»",
    org: "Международный центр образования и педагогики (МЦОиП)",
    date: "29 мая 2026",
    file: "source/Achievements/2026-05-article-oligophrenopedagog.jpg",
    thumb: "source/Achievements/thumbs/2026-05-article-oligophrenopedagog.jpg"
  },
  {
    kind: "Диплом",
    title: "Использование современных образовательных технологий",
    org: "Международный центр образования и педагогики (МЦОиП)",
    date: "30 декабря 2025",
    file: "source/Achievements/2025-12-diploma-edtech.jpg",
    thumb: "source/Achievements/thumbs/2025-12-diploma-edtech.jpg"
  },
  {
    kind: "Сертификат",
    title: "Публикация статьи о современных коррекционно-развивающих технологиях и их адаптации",
    org: "Международный центр образования и педагогики (МЦОиП)",
    date: "30 декабря 2025",
    file: "source/Achievements/2025-12-article-correctional-tech.jpg",
    thumb: "source/Achievements/thumbs/2025-12-article-correctional-tech.jpg"
  },
  {
    kind: "Диплом",
    title: "Семинар «Дорожная культура на каждом уроке» (16 часов)",
    org: "АНО «Агентство поддержки государственных инициатив»",
    date: "25 марта 2024",
    file: "source/Achievements/2024-03-seminar-road-culture.png",
    thumb: "source/Achievements/thumbs/2024-03-seminar-road-culture.jpg"
  },
  {
    kind: "Свидетельство",
    title: "Публикация презентации «Подготовка сезонной обуви к хранению»",
    org: "«Мультиурок»",
    date: "29 декабря 2017",
    file: "source/Achievements/2017-12-multiurok-shoes.png",
    thumb: "source/Achievements/thumbs/2017-12-multiurok-shoes.jpg"
  }
];

/* Достижения учеников: олимпиады и конкурсы (раздел «Об учителе → Достижения учеников»).
   Новый документ добавляется так же: скан в папку source/Achievements/students/ и блок ниже.
   note (например, количество баллов) указывать необязательно. */
var STUDENT_ACHIEVEMENTS = [
  {
    kind: "Сертификат",
    title: "Олимпиада «Основы светской этики»: 1 место",
    note: "20 баллов из 21 · для школьников",
    org: "Высшая школа делового администрирования (S-BA.RU)",
    date: "21 мая 2026",
    file: "source/Achievements/students/2026-05-ethics-place1.jpg",
    thumb: "source/Achievements/students/thumbs/2026-05-ethics-place1.jpg"
  },
  {
    kind: "Сертификат",
    title: "Олимпиада «Экологическая грамотность»: 2 место",
    note: "15 баллов из 17 · для школьников",
    org: "Высшая школа делового администрирования (S-BA.RU)",
    date: "21 мая 2026",
    file: "source/Achievements/students/2026-05-eco-place2-a.jpg",
    thumb: "source/Achievements/students/thumbs/2026-05-eco-place2-a.jpg"
  },
  {
    kind: "Сертификат",
    title: "Олимпиада «Правила дорожного движения»: 1 место",
    note: "17 баллов из 17",
    org: "Высшая школа делового администрирования (S-BA.RU)",
    date: "20 мая 2026",
    file: "source/Achievements/students/2026-05-road-rules-place1.jpg",
    thumb: "source/Achievements/students/thumbs/2026-05-road-rules-place1.jpg"
  },
  {
    kind: "Сертификат",
    title: "Олимпиада «Экологическая грамотность»: 2 место",
    note: "15 баллов из 17 · для школьников",
    org: "Высшая школа делового администрирования (S-BA.RU)",
    date: "20 мая 2026",
    file: "source/Achievements/students/2026-05-eco-place2-b.jpg",
    thumb: "source/Achievements/students/thumbs/2026-05-eco-place2-b.jpg"
  },
  {
    kind: "Сертификат",
    title: "Олимпиада «10 чудес России, сотворённых природой»: 3 место",
    note: "9 баллов из 12",
    org: "Высшая школа делового администрирования (S-BA.RU)",
    date: "20 мая 2026",
    file: "source/Achievements/students/2026-05-wonders-place3.jpg",
    thumb: "source/Achievements/students/thumbs/2026-05-wonders-place3.jpg"
  },
  {
    kind: "Сертификат",
    title: "Олимпиада «Знатоки живой природы»: 1 место",
    note: "20 баллов из 21 · для дошкольников",
    org: "Высшая школа делового администрирования (S-BA.RU)",
    date: "20 мая 2026",
    file: "source/Achievements/students/2026-05-living-nature-place1.jpg",
    thumb: "source/Achievements/students/thumbs/2026-05-living-nature-place1.jpg"
  },
  {
    kind: "Сертификат",
    title: "Олимпиада «Основы светской этики»: 2 место",
    note: "17 баллов из 21 · для школьников",
    org: "Высшая школа делового администрирования (S-BA.RU)",
    date: "20 мая 2026",
    file: "source/Achievements/students/2026-05-ethics-place2.jpg",
    thumb: "source/Achievements/students/thumbs/2026-05-ethics-place2.jpg"
  },
  {
    kind: "Диплом",
    title: "Олимпиада «Правила дорожного движения»: 1 место",
    note: "17 баллов из 17",
    org: "Высшая школа делового администрирования (S-BA.RU)",
    date: "22 января 2026",
    file: "source/Achievements/students/2026-01-road-rules-diploma-place1.jpg",
    thumb: "source/Achievements/students/thumbs/2026-01-road-rules-diploma-place1.jpg"
  },
  {
    kind: "Сертификат",
    title: "Олимпиада «Правила дорожного движения»: 1 место",
    note: "17 баллов из 17",
    org: "Высшая школа делового администрирования (S-BA.RU)",
    date: "22 января 2026",
    file: "source/Achievements/students/2026-01-road-rules-place1.jpg",
    thumb: "source/Achievements/students/thumbs/2026-01-road-rules-place1.jpg"
  },
  {
    kind: "Диплом",
    title: "Олимпиада «Безопасность в зимний период»: 1 место",
    note: "17 баллов из 17 · для дошкольников",
    org: "Высшая школа делового администрирования (S-BA.RU)",
    date: "22 января 2026",
    file: "source/Achievements/students/2026-01-winter-safety-place1.jpg",
    thumb: "source/Achievements/students/thumbs/2026-01-winter-safety-place1.jpg"
  },
  {
    kind: "Сертификат",
    title: "Олимпиада «За полярным кругом»: 1 место",
    note: "13 баллов из 14 · для учащихся начальной школы",
    org: "Высшая школа делового администрирования (S-BA.RU)",
    date: "22 января 2026",
    file: "source/Achievements/students/2026-01-polar-place1.jpg",
    thumb: "source/Achievements/students/thumbs/2026-01-polar-place1.jpg"
  }
];
