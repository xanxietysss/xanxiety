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
    .setState('confusion')
    .setName('xanxietys')
    .setDetails('xanax')


 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/852639023482798161/1190099463784644730/giphy_2.gif?ex=65a0917f&is=658e1c7f&hm=21fa458206b16dd6a0074a0fc494067759a96a805b6d676475c58d84e3b0d713&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('entry four') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/852639023482798161/1190100720532340866/d309ca96cbbd106dcc3b9549219152d1.gif?ex=65a092aa&is=658e1daa&hm=feadc1be08b2f31efdb41a0a9ab90034be6122870179106b7450eccd1b2bfc26&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('ok') //Text when you hover the Small image
    .addButton('percs', 'https://www.youtube.com/watch?v=72noANFOhdA')
    .addButton('xans', 'https://www.youtube.com/watch?v=Gbqa9n1XOes');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `entry log `;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
