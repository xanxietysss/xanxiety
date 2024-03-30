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
    .setState('noxxyware')
    .setName('xanxietys')
    .setDetails('10 xans')


 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/867485720012914689/1223499780437704814/w2fmim.jpg?ex=661a13f7&is=66079ef7&hm=ef1ab0e8c15e3e5ecfa15b836487e30a28b111fccfe5d97ec76f31ea3096c552&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('entry four') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/867485720012914689/1223500048294346783/Black.png?ex=661a1437&is=66079f37&hm=fed87338408ed388666a8ef7b81f8f505f312960eda1be8cba6876d6eb19934c&') //You can put links in tenor or discord and etc.
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
