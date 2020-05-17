const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message

//   const chatId = msg.chat.id;
//   const resp = match[1]; // the captured "whatever"

//   // send back the matched "whatever" to the chat
//   bot.sendMessage(chatId, resp);
// });

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
  // const url = 'http://mirrors.standaloneinstaller.com/video-sample/jellyfish-25-mbps-hd-hevc.mp4';
// bot.sendPhoto(chatId, url , {caption : "edigo"});
bot.sendVideo(chatId , "jellyfish-25-mbps-hd-hevc.mp4" );   
});

// bot.onText("message", (msg) => {

// bot.sendPhoto(msg.chat.id,"https://raw.githubusercontent.com/hosein2398/node-telegram-bot-api-tutorial/master/pics/CaptionJPG.JPG",{caption : "Here we go ! \nThis is just a caption "}  );
    
// });



// bot.onText(/\/hey/, (msg) => {
    
// bot.sendMessage(msg.chat.id, "Welcome", {
// "reply_markup": {
//     "keyboard": [["Sample text", "Second sample"],   ["Keyboard"], ["I'm robot😂 🤣"]]
//     }
// });
    
// });
// bot.on('message', (msg) => {

//  const Hi = "hi";
//  if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
//    bot.sendMessage(msg.chat.id,"<b>bold</b> \n <i>italic</i> \n <em>italic with em</em> \n <a href=\"http://www.example.com/\">inline URL</a> \n <code>inline fixed-width code</code> \n <pre>pre-formatted fixed-width code block</pre>" ,{parse_mode : "HTML"});
//    }
// });




// bot.on('message', (msg) => {
//     // const location = "location";
//     // if (msg.text.indexOf(location) === 0) {
//         bot.sendLocation(msg.chat.id,44.97108, -104.27719);
//         bot.sendMessage(msg.chat.id, "Here is the point");

//     // }
// });
