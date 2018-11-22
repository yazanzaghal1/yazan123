const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});




client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Simple`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Simple `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`#KING#`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});



 client.login("NDQ5OTUzODUzMDc3NTg1OTI1.Dtc7sw.hDIhfNnNqrt-lP7EXP2PwLxryv4");