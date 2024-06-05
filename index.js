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
    .setDetails('#jugg')


 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1226636743642714205/1229455572529713212/IMG_5697.jpg?ex=6661d7ba&is=6660863a&hm=0b23e4a28027bd71be890e84c56f4c0874021965b2aaba240c40b9004ea1341b&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('loser') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/867485720012914689/1247962284911759460/Black.png?ex=6661eef2&is=66609d72&hm=c8c7a7fab82cbc5ba7a213cf5334b13783f62456a15763955584489f8ac9538a&') //You can put links in tenor or discord and etc.
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
