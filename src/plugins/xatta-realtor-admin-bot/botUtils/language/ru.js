module.exports = {
    WELCOME:
        'Добро пожаловать в Xatta admin bot!\n\n' +
        'Данные бот предназначен для пользователей которые уже прошли регистрацию своего агентства.\n' +
        'Если вы все еще не зарегистрированы пожалуйста обратитесь к https://t.me/ku3menko\n\n' +
        'Для получения инструкций по регистрации напишите в чат /help',
    HELP:
        'Данный бот сообщает вам о пользователях которым необходима консультация о выбранной квартире\n\n' +
        'Для начала работы вам потребуется пройти процедуру регистрации, напишите в чат /registration\n\n' +
        'По всем вопросам обращайтесь к https://t.me/ku3menko',
    GET_USERNAME: 'Пожалуйста отправьте имя которое будут видеть клиенты',
    GET_USER_EMAIL: 'Пожалуйста отправьте email',
    GET_AGENCY_NAME: 'Пожалуйста отправьте название агентства',
    GET_BOT_TOKEN: 'Пожалуйста отправьте бот токен.',
    INPUT_ERROR: {
        botToken: 'Неправильный токен',
        agencyName: 'Неправильное название агентства',
        email: 'Неправильная почта',
        ownerName: 'Неправильное имя',
    },
    COMPLETE_ADMIN_REGISTRATION: (registrationToken) =>
        `Теперь у вас есть доступ к xatta админке.\nhttps://xatta.ru/admin/auth/register?registrationToken=${registrationToken}\n` +
        `Пожалуйста, продолжите регистрацию перейдя по этой ссылке.`,
};
