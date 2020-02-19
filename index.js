require('dotenv').config();
var TelegramBot = require('node-telegram-bot-api');

// token to be moved to .env file
const token = process.env.TOKEN

const bot = new TelegramBot(token, { polling: true });

bot.on('text', (message) => {

	if(message.text.toLowerCase().indexOf("/start") === 0) {
		parse_mode: "Markdown"
		telegram.sendMessage(message.chat.id, `Welcome to **tele-mapper**`);
	}
	
});

