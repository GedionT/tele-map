const express      = require('express');
const TelegramBot  = require('node-telegram-bot-api');
const bodyParser   = require('body-parser');

// dependencies 
const token = process.env.TOKEN;
const url   = 'http://<public-url>';
const port  = process.env.PORT;


const bot = new TelegramBot(token);
// this informs  the telegram servers of the new webhook
bot.setWebHook('${url}/bot${token}');

const app = express();
// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post(`/bot${token}`, (req, res) => {

	bot.processUpdate(req.body);
	res.sendStatus(200);
});

app.listen(port, () => console.log('Express server is listening on port ${port}'));

// just to ping
bot.on('message', msg => {
	bot.sendMessage(msg.chat.id, 'I am alive!');
});