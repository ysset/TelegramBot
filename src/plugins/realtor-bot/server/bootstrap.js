'use strict';
process.env.NTBA_FIX_319 = 1;

const TgBot = require('node-telegram-bot-api');
const { tokens, languages } = require('../../utils/getBotToken')('REALTOR_BOT_TOKEN');

const eventStorage = require('../botUtils/events/storage');
const { commands, inlineCallBacks } = require('./bot/components');
const { modifyRequestWithUserData } = require('../../utils');

module.exports = async () => {
    for (let token of tokens) {
        const bot = await new TgBot(token, { polling: true });
        bot.language = languages[token];
        bot.type = 'realtor';

        await bot.setMyCommands([
            {
                command: 'start',
                description: 'Добро пожаловать',
            },
            {
                command: 'help',
                description: 'Помощь',
            },
        ]);

        bot.onText(commands.START.regex, async (msg) =>
            commands.START.fn(await modifyRequestWithUserData({ msg, bot }))
        );

        bot.on('callback_query', async (query) => {
            console.log(query);
            try {
                query.data = JSON.parse(query.data);
                const data = await modifyRequestWithUserData({ msg: query, bot });
                //debug shit
                console.log('===START====>', '\nACTION:', query.data.action, '\nUSER_ID:', data.user.id);
                console.log(data.data);
                await inlineCallBacks[query.data.action](data);
                console.log('===END====>');
            } catch (e) {
                console.error(e);
            }
        });

        bot.on('polling_error', console.error);

        /**
         * contact listener
         */
        bot.on('contact', async (msg) => {
            if (eventStorage.isEvent(msg.from.id)) {
                const event = eventStorage.callEvent(msg.from.id);
                await event(msg);
            }
        });

        bot.on('text', async (msg) => {
            try {
                if (
                    (!msg.entities || msg?.entities[0].type !== 'bot_command') &&
                    eventStorage.isEvent(msg.from.id)
                ) {
                    const event = eventStorage.callEvent(msg.from.id);
                    await event(msg);
                }
            } catch (e) {
                console.error(e);
            }
        });

        bot.on('message', async (query) => {
            console.log(query);
            if (query.web_app_data) {
                const data = JSON.parse(query.web_app_data.data);

                if (data.favorite)
                    return inlineCallBacks.FAVORITE_HOUSINGS(
                        await modifyRequestWithUserData({ msg: query, bot })
                    );

                return inlineCallBacks.SEARCH_FLATS({
                    filters: data,
                    ...(await modifyRequestWithUserData({ msg: query, bot })),
                });
            }

            if (
                query.text === 'start' ||
                query.text === 'старт' ||
                query.text === 'Start' ||
                query.text === 'Старт'
            ) {
                return commands.START.fn(await modifyRequestWithUserData({ msg: query, bot })).catch(
                    console.error
                );
            }
        });
    }
    console.log('REALTOR is ready!');
};
