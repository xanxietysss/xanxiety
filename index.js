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
    .setState('r,l')
    .setName('xanxietys')
    .setDetails('#losersclub')


 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1226636743642714205/1229454303454957699/IMG_6225.jpg?ex=662fbd8c&is=661d488c&hm=b05c935fab7a104c2d9a952fea09ce65850a06943dcb482bd5262c89d27d9d9f&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('loser') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1226636743642714205/1229455572743491665/IMG_5011.jpg?ex=662fbeba&is=661d49ba&hm=4eb7d8231c1d193b6f9b0173f5a34e99613f1677ea4d69586617ef6755abc840&=&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('ok') //Text when you hover the Small image
    .addButton('percs', 'https://www.youtube.com/watch?v=72noANFOhdA')
    .addButton('xans', 'https://www.youtube.com/watch?v=Gbqa9n1XOes');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `#losersclub `;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
