module.exports = {
    WELCOME: 'Добро пожаловать в Xatta Бот!',
    START: {
        text: '/start',
        regex: /\/start/,
    },
    NO_FLATS: 'К сожалению квартиры закончились(',
    NO_CARS: 'К сожалению машины закончились(',
    SERVER_ERROR: 'К сожалению произошла ошибка, попробуйте еще раз или позже!',
    SAVED: 'Добавлено в избранное',
    FAVORITE: {
        text: 'Сохраненные❤️',
    },
    FAVORITE_FLATS: {
        text: 'Недвижимость ❤️',
    },
    SEARCH: {
        text: 'Поиск 🔍',
    },
    SEARCH_FLATS: {
        text: 'Недвижимость 🔍',
    },
    SELECT_SUBGROUP: {
        text: 'Выберите подгруппу',
    },
    REPEAT_SEARCH_FLATS: {
        text: 'Искать Недвижимость заново',
    },
    NO_FAVORITE_NOW: 'У вас пока нет сохраненной недвижимости!',
    UN_AUTHORIZE: 'Кажется мы не смогли найти избранные квартиры, пожалуйста перезапустите бота!',
    WRITE_AGENT_INLINE: {
        text: 'Связаться с агентом',
    },
    CHOOSE_THE_ACTION: {
        text: (flatId) => `Квартира номер: ${flatId} \nВыберите действие:`,
    },
    GO_BACK_ACTION: {
        text: '<<Назад',
    },
    DELETE_ACTION: {
        text: 'Удалить из избранного',
    },
    FULL_DESCRIPTION: {
        text: 'Подробное описание',
    },
    SAVE_INLINE: {
        text: 'Сохранить',
    },
    NEXT_INLINE: {
        text: 'Следующая',
    },
    FIRST_TIME_START_PRESS: {
        text:
            'Каталог-бот для выбора недвижимости\n' +
            '\n' +
            '\n' +
            '\n' +
            ' • Зачем я могу Вам понадобится?\n' +
            '\n' +
            'Я облегчу Вам выбор любой недвижимости.\n' +
            'Теперь Вам не нужно будет подолгу листать профильные телеграмм-каналы, пытаясь где-нибудь сохранить понравившиеся варианты, для просмотра просто нажимайте кнопку «Следующая➡️», если какая-то квартира приглянулась, кнопку «Сохранить❤️»\n' +
            '\n' +
            'Вы можете приглядеть для себя квартиру, посмотреть цены на жилье в Алании, сразу забронировать и купить понравившийся Вам вариант.\n' +
            '\n' +
            ' • Что я умею?\n' +
            '\n' +
            'Подробнее о командах\n' +
            '\n' +
            'Хотите изучить каталог? — Нажмите «Поиск🔍»\n' +
            '\n' +
            'Заново просмотреть понравившиеся варианты? — «Сохраненные❤️»\n' +
            '\n' +
            'Пропали командные кнопки? — Нажмите на иконку слева от микрофона\n' +
            '\n' +
            'Сохранить понравившуюся квартиру? — «Сохранить❤️» (Когда вы сохраняете квартиру, она пропадает из общего списка и появляется во вкладке «Сохранённые❤️»)\n' +
            '\n' +
            'Перейти к следующей квартире? — «Следующая➡️»\n' +
            '\n' +
            'Связаться с продавцом? — «Связаться📶»\n' +
            '\n' +
            'Нужна помощь? — Нажмите «Меню», затем  «Помощь».\n' +
            '\n' +
            '\n' +
            'Также, у меня есть удобное разделение на сегменты.\n' +
            '\n' +
            ' 1. На стадии строительства.\n' +
            '\n' +
            'Вы хотите инвестировать в недвижимость? \n' +
            'Тогда смело выбирайте этот пункт, в него мы добавляем лучшие варианты недвижимости от котлована до чистовой отделки.\n' +
            '\n' +
            ' 2. Новостройки.\n' +
            '\n' +
            'Хотите приобрести квартиру в новом доме?\n' +
            'Здесь найдётся лучший вариант для Вас, от однушек до дуплексов.\n' +
            '\n' +
            ' 3. Вторичка.\n' +
            '\n' +
            'Если у Вас есть желание бюджетно приобрести квартиру, изучите данный сегмент рынка. Порой, здесь появляются настоящие брильянты)\n' +
            '\n' +
            ' 4. Виллы.\n' +
            '\n' +
            'Элитная недвижимость. \n' +
            'Помимо очевидных плюсов вроде собственной территории и бассейна, у Вас будет возможность практически моментально получить гражданство Турции.\n' +
            '\n' +
            '\n' +
            'Возможность связи с продавцом прямо из бота.\n' +
            '\n' +
            'Вы подобрали для себя квартиру? — Можете смело нажимать на кнопку «Связаться📶». Откроется чат, где Вы сможете уточнить любые интересующие вас детали и договориться о приобретении недвижимости.\n',
    },
};
