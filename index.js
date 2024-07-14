const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1103491371005915176')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=zdfacEpzDIA') //Must be a youtube video link 
    .setState('x_-')
    .setName('xanxietys')
    .setDetails('#jugg')


 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1226636743642714205/1229507516833202206/IMG_6306.jpg?ex=6694211b&is=6692cf9b&hm=8296cca8b1226ee3056ca3535c9e68adcae320d7d731a0de69f8c88ee22e9ad7&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('loser') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1226636743642714205/1229509232894808134/Black.png?ex=669422b4&is=6692d134&hm=ee5532181b83a0d7549808e1d062921e2719d3321c94b8e3ccb1f43b8b147127&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('ok') //Text when you hover the Small image
    .addButton('percs', 'https://www.youtube.com/watch?v=72noANFOhdA')
    .addButton('xans', 'https://www.youtube.com/watch?v=Gbqa9n1XOes');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `#jugg `;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
