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


 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/867485720012914689/1212836897139728434/jaydes-jaydeschrist.gif?ex=65f34961&is=65e0d461&hm=44f90c6f2c5fb94e83cbaea5d92a3836db80c832231a2e1d9118bd9b11461292&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('entry four') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/867485720012914689/1212837344177037442/icegif-279.gif?ex=65f349cc&is=65e0d4cc&hm=97d345c677fd520ea34136ab5867b90445e6179cffa34e0c92a87707edce2135&') //You can put links in tenor or discord and etc.
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
