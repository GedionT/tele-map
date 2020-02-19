var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const axios = require(axios);

require('dotenv').config();
var TelegramBot = require('node-telegram-bot-api');


app.use(bodyParser.json());
app.use( bodyParser.urlencoded({ extended: true }));
// token to be moved to .env file
const token = process.env.TOKEN

const bot = new TelegramBot(token, { polling: true });

app.post('/connect', (req, res) => {
bot.on('text', (message) => {

	if(message.text.toLowerCase().indexOf("/start") === 0) {
		parse_mode: "Markdown"
		telegram.sendMessage(message.chat.id, `Welcome to **tele-mapper**`);
	}
	
});
});

app.listen(3000, () => console.log('Telegram app listening on port 3000!'));