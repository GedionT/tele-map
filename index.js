var TelegramBot = require('node-telegram-bot-api');

const telegram = new TelegramBot("BOTOKEN", { polling: true });

telegram.on('text', (message) => {

	if(message.text.toLowerCase().indexOf("/start") === 0) {
		parse_mode: "Markdown"
		telegram.sendMessage(message.chat.id, `Welcome to **tele-mapper**`);
	}
	
});

