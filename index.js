require('dotenv').config();
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Self Bot Rich Presence working');
});
app.listen(process.env.PORT, () => {
    console.log('Self Bot Rich Presence working on port ' + process.env.PORT);
});

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});

client.on('ready', async () => {

    const rpc = new Discord.RichPresence()
        .setApplicationId('1218756363551772673')
        .setType('STREAMING')
        .setURL(`https://www.youtube.com/watch?v=55F8bT91KG4&list=RDJ7fc0OZ85Oc&index=1`)
        .setDetails(`Trinho`)
        .setName(`tranhdau.net`)
        .setState(`tranhdau.net Đừng kiếm tao`)
        .setParty({

            max: 5001,
            current: 4690,
            id: Discord.getUUID(),
        })
        .setAssetsLargeImage('https://media.discordapp.net/attachments/1091717501831872590/1164474654468096010/X.gif?ex=65435888&is=6530e388&hm=cf59417222aa31f32de8f7c194ab489a7f0abd6956b00d287ebc669a0eeab4ac&=')
        .setAssetsLargeText(`Trinho`)
        .setAssetsSmallImage(`https://media.discordapp.net/attachments/1158287251541872690/1164475866303184976/N.gif?width=30&height=30`)
        .setAssetsSmallText(`Caylắm`)
        .addButton(`FB`, `https://www.facebook.com/trinhohads`)
        .addButton(`tranhdau.rac`, `http://tranhdau.net/`);
    client.user.setActivity(rpc.toJSON());

    console.log(`${client.user.tag} is ready!`);

});


//Account Token
client.login(process.env.TOKEN);
