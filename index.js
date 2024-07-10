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


 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1252694799379861606/1260502879069016136/750492DD-32E9-448F-9777-D97B6692F681.jpg?ex=668f8e49&is=668e3cc9&hm=3a306a0e303d168a6bc6c755c2714173aaba99b44ec2c91151e70e60fa2a50da&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('loser') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1252694799379861606/1260503714440020039/Solid_black.png?ex=668f8f10&is=668e3d90&hm=a9f441b82d2c088e031f7bf9e38b7a0af844604a8ab9e7d25c4464dd1485488a&') //You can put links in tenor or discord and etc.
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
