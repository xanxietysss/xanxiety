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
    .setDetails('#oxy')


 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1245540160758747250/1266941857393283082/IMG_5181.jpg?ex=66ace9cd&is=66ab984d&hm=e64d8cd2c0ca949c38e86b3a9a169ac8d8524e9cf565c7f1abf2516019dab132&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('what we have') //Text when you hover the Large image

    .setAssetsSmallText('ok') //Text when you hover the Small image
    .addButton('molly', 'https://www.youtube.com/watch?v=pEWB_PqmNpE')
    .addButton('codeine', 'https://www.youtube.com/watch?v=Gbqa9n1XOes');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `#oxy `;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

 const mySecret = process.env['TOKEN'];
client.login(mySecret);
