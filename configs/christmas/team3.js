module.exports = {
  "port": "3002",
  dbName: "team3",
  "failMessages": [
    "Ахаха, нет. Пойду пока отопью вашего шампусика",
    "Неа. Ребята, вы точно с этого проекта?",
    "Такими темпами вы до Нового года будете бороться со мной",
    "И это.... Неверный ответ, продолжайте",
    "Ура! Вы смогли найти еще один неверный ответ на этот вопрос",
    "Вы точно помните, что шампанское нагревается? Советую шевелить извилинами активнее"
  ],
  "failSounds": [
    "/audio/you will never win.mp3",
    "/audio/1 sound.mp3",
    "/audio/2 sound.mp3",
    "/audio/3 sound.mp3",
    "/audio/4 sound.mp3"
  ],
  "failMessagesFrequency": 0.2,
  "defaultHintsConfig": [3, 6],
  "rounds": [
    {
      "success": [
        "start",
        "начать",
        "старт",
        "hello"
      ],
      "hints": [
        "type \"start\""
      ]
    },
    {
      "output": [
        {
          "text": "Ну привет, ребята 😈",
          "timer": 0
        },
        {
          "text": "Для начала, я хочу проверить насколько вы знаете свой проект.",
          "timer": 2000
        },
        {
          "text": "И вот первый вопрос: сколько на нашем проекте человек?",
          "timer": 4000
        }
      ],
      "success": [
        "96",
        "97",
        "98",
        "99",
        "100",
      ],
      eggs: {
        "телескоп": ["Неплохо, попросите подсказки у него, если не знаете ответа"]
      },
      "hints": ["Ну вы совсем... Посмотрите, через что ищут звезды?"]
    },
    {
      "output": [
        {
          "text": "Ничесе, вы что, умеете пользоваться телескопом??",
          "timer": 0
        },
        {
          "text": "Ну ладно, вот вам следующий вопрос:",
          "timer": 5000
        },
        {
          "text": "Кто главный по деньгам?",
          "timer": 2500
        }
      ],
      "eggs": {
        "настя": ["Настя просто главная, а чисто по деньгам?"],
        "наташа": ["Наташа главная по бегу, а не по деньгам"],
        "вова": ["Вова главный по воркауту, а когда нужны деньги вы идете к другому человеку"]
      },
      "success": ["полина", "полина вячеславовна", "хонькина", "полина хонькина", "polina", "palina"],
      hints: ["мдааа, вас из чата что-ли удалили и забыли вернуть? " +
      "Иначе я не понимаю, как можно не знать такого. Попросите кого-нибудь, кто есть в чате поискать там"]
    },
    {
      output: [
        {
          text: "Именно, вы наверное знаете, кто выделял деньги на pull up competition:",
          timer: 0
        },
        {
          text: "/img/polina.gif",
          timer: 4500,
        },
        {
          text: "Ладно, пойдем к следующему вопросу",
          timer: 5500
        },
        {
          text: "Разгадайте ребус:",
          timer: 3000
        },
        {
          text: "/img/пицца.jpg",
          timer: 2000,
        },
        {
          text: "/img/сосиска.jpg",
          timer: 3000,
        }
      ],
      eggs: {
        "сосиска": ["кроме сосиски еще кое что"],
        "пицца": ["кроме пиццы еще кое что"],
      },
      success: ["сосисочный борт", "пицца с сосисочным бортом",],
      hints: ["Походите, поспрашивайте"]
    },
    {
      output: [
        {
          text: "В точку, у вас что ли Паша Глебов в команде?",
          timer: 0
        },
        {
          text: "Вот вам следующий вопрос:",
          timer: 3000
        },
        {
          text: "Кто был капитаном нашей команды на турслете?",
          timer: 2000
        }
      ],
      eggs: {
        "паша": ["знаете сколько у нас Паш на проекте? Говорите точнее, какой"],
        "павел": ["знаете сколько у нас Паш на проекте? Говорите точнее, какой"],
        "вова": ["не, он только отвечал за спортивную подготовку команды"],
        "наташа": ["не, она только отвечала за беговую подготовку команды"],
        "настя": ["не, Настя просто главная"],
        "полина": ["нет, Полина главная по деньгам, мы же уже решили это"],
      },
      success: ["паша г", "паша глебов", "павел г", "павел глебов"],
      hints: ["найдите кого-то, кто был там"]
    },
    {
      output: [
        {
          text: "Да, действительно так! Вы наверное присутствовали там и видели это:",
          timer: 0,
        },
        {
          text: "/img/success.gif",
          timer: 4000,
        },
        {
          text: "На этом вопросе вы точно завалитесь 😈",
          timer: 5000
        },
        {
          text: "Напишите фамилию Прасаны не подсматривая. Я слежу!",
          timer: 3000
        }
      ],
      success: ["vaithiswaran"],
      hints: ["гугловые звезды ищут в гугловом телескопе"]
    },
    {
      output: [
        {
          text: "Ого, вы умеете пользоваться интернал тулами гугла? Ладно, погнали дальше",
          timer: 0,
        },
        {
          text: "Кто самый злой на проекте?",
          timer: 5000
        }
      ],
      success: [{type:'regex', regex: '[а-яa-z]{3,}'}],
      hints: ["выразите свое мнение"]
    },
    {
      output: [
        {
          text: "ХохО... я передам!!! Be careful in new year!",
          timer: 0
        },
        {
          text: "Ну лаааадно, видимо вы знакомы с проектом, погнали дальше",
          timer: 3000
        },
        {
          text: "Вот вам новая задачка... Все равно вы не справитесь дальше, ведь там еще сложнее.",
          timer: 5000,
        },
        {
          text: "3-242-30-38",
          timer: 7000
        },
        {
          text: "3-106-1-15",
          timer: 1000
        },
        {
          text: "А разгадку вы найдете в библиотеке проекта.",
          timer: 7000
        },
        {
          text: "Потом возвращайтесь ко мне!",
          timer: 7000
        },
        {
          text: "Ну и что вы там наотгадывали?",
          timer: 180000
        },
      ],
      success: ["ci", "си"]
    },
    {
      output: [
        {
          text: "Именно! Это японское серде вам в помощь. Топайте к нему!",
          timer: 0,
        },
        {
          text: "Я пока отойду, напишите \"хохохо и бутылка шампанского\", если у вас получится разгадать загадку",
          timer: 30000
        }
      ],
      hints: ["Natsume Sōseki"],
      success: ["хохохо и бутылка шампанского"]
    },
    {
      output: [
        {
          text: "Ох, вы и это нашли, ну тогда вы сможете ввести стронг пассворд для взлома базы с фотоархивом на основании подсказки",
          timer: 0,
        },
        {
          text: "max_length=16",
          timer: 120000
        }
      ],
      caseSensitive: true,
      success: ["5S::p+M]%wBwu!ns"],
      hints: ["на подсказке фраза для запоминания пароля, введите пароль, который она помогает запомнить"]
    },
    {
      output: [
        {
          text: "Ух ты, ну вы даете, вы взламывали когда-то такие пароли? Ну ладно, это на вашей совести.",
          timer: 0,
        },
        {
          text: "Следующую подсказку вы найдете здесь:",
          timer: 7500
        },
        {
          text: "/img/3 team location.jpg",
          timer: 3000
        },
        {
          text: "побегайте по офису 😈",
          timer: 7000
        }
      ],
      hints: ["Это ж серпентарий"],
      eggs: {
        "2 этаж": ["чего вы это вводите? Идите ищите там"],
        "второй этаж": ["чего вы это вводите? Идите ищите там"],
        "кухня": ["чего вы это вводите? Идите ищите там"],
        "кухня второго этажа": ["чего вы это вводите? Идите ищите там"],
        "кухня 2 этажа": ["чего вы это вводите? Идите ищите там"]
      },
      success: [
        // english pp
        "2938 pp-7",
        "2938pp7",
        "2938pp-7",
        "2938 pp7",
        "2938 pp 7",
        // russian pp
        "2938 рр-7",
        "2938рр7",
        "2938рр-7",
        "2938 рр7",
        "2938 рр 7"
      ]
    },
    {
      output: [
        {
          text: "Ерунда какая-то :Р",
          timer: 0,
        },
        {
          text: "Звезды ищут тут",
          timer: 10000
        },
        {
          text: "/img/telescope.jpg",
          timer: 2000
        },
        {
          text: "Впишите имя владельца",
          timer: 20000
        }
      ],
      hints: ["/img/epam telescope.png"],
      success: ["паша", "павел", "pavel", "khatkovski", "хатковский", "паша х", "паша к"]
    },
    {
      output: [
        {
          text: "Вот он знает куда вам дальше.",
          timer: 0
        },
        {
          text: "Вы что-нибудь нашли под замком?",
          timer: 300000
        },
      ],
      success: ["conference"]
    },
    {
      output: [
        {
          text: "Чорт! Вы справились, так и быть. Ваш праздник на 7ом этаже, приходите и возьмите",
          timer: 0
        },
        {
          text: "/img/success.jpg",
          timer: 5000
        }
      ],
      success: ["askldfjlkasj dlkja sldfkjalksdjflkasdj flkjasdlkf jalksdj"]
    }
  ],
  "easterEggs": {},
  "jarvis": ["GRIIINCH"]
};