module.exports = {
    config: {
        name: "🙈",
        version: "1.0",
        author: "MR.AYAN", //** original author fb I'd : https://m.me/MR.AYAN.2X **//
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "🙈") return message.reply("𝗕𝗮𝗽 𝗿𝗲 𝗯𝗮𝗽 𝘁𝗺𝗿 𝗮𝗯𝗿 𝗹𝗼𝗷𝗷𝗮 𝗼 𝗮𝘀𝗲-!!😗");
}
}; 
