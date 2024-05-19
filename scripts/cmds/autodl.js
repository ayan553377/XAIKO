const axios = require('axios');const fs = require('fs');
const { shortenURL } = global.utils;
module.exports = {
  config: {
    name: "autodl", 
    version: "1.0.1",
    author: "MR.AYAN",
    countDown: 0,
    role: 0,
    description: {
      en: "Auto download video from tiktok, facebook, Instagram, YouTube, and more"
    },
    category: "media",
    guide: {
      en: "[video_link]"
    }
},
  onStart: async function(){},
  onChat: async function ({ api, event }) {

let dipto = event.body ? event.body : '';

  try {
    if (dipto.startsWith('https://vt.tiktok.com') || dipto.startsWith('https://www.tiktok.com/') || dipto.startsWith('https://www.facebook.com') || dipto.startsWith('https://www.instagram.com/') || dipto.startsWith('https://youtu.be/') || dipto.startsWith('https://youtube.com/') || dipto.startsWith('https://x.com/') || dipto.startsWith('https://twitter.com/') || dipto.startsWith('https://vm.tiktok.com') || dipto.startsWith('https://fb.watch')){

      api.setMessageReaction("⏳", event.messageID, (err) => {}, true);

    const path = __dirname + `/cache/diptoo.mp4`;

    const { data } = await axios.get(`https://noobs-api.onrender.com/dipto/alldl?url=${encodeURIComponent(dipto)}`);

    const vid = (await axios.get(data.result, { responseType: "arraybuffer", })).data;

    fs.writeFileSync(path, Buffer.from(vid, 'utf-8'));
       api.setMessageReaction("✅", event.messageID, (err) => {}, true);

    api.sendMessage({

        body: `✨✨✨✨✨`,

      attachment: fs.createReadStream(path)
    }, event.threadID, () => fs.unlinkSync(path), event.messageID)}
} catch (e) {
    api.setMessageReaction("❎", event.messageID, (err) => {}, true);
api.sendMessage(e, event.threadID, event.messageID);
  }
  },
  }
