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


 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1239815310396358758/1240149228941217904/trim.0D0FB7CA-9A35-4435-8932-E44EFD352109.gif?ex=66458279&is=664430f9&hm=4f58d1ef26e04c0d20f3dc0fead0e788d3ff754723bfea1caace6a0e4c25bd69&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('loser') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/867485720012914689/1240365871009107978/abstract-surface-textures-white-concrete-stone-wall_74190-8189_1.png?ex=66464c3c&is=6644fabc&hm=373ccb8d56c313791aab3228562f99dd491896af7a95569bb7ac4a1662820c30&') //You can put links in tenor or discord and etc.
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
