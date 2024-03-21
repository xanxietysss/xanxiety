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
    .setDetails('entry log')


 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/867485720012914689/1220193103965589624/jaydes-jaydeschrist.gif?ex=660e0c62&is=65fb9762&hm=488fab1f91f5069e43f60ce702b448374a73103981d83f782d56fceaa162318e&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('entry four') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/867485720012914689/1220193315920679023/icegif-282.gif?ex=660e0c94&is=65fb9794&hm=f6d749e1e9cb5c96b672baa4fa95d55bac91e657b0462a8727b775c8251a13da&') //You can put links in tenor or discord and etc.
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
