module.exports = {
  config: {
    name: "spam",
    aurthor:"MR.AYAN",// Convert By MR.AYAN
     role: 2,
    shortDescription: "spam msg",
    longDescription: "spam msg using bot",
    category: "admin",
    guide: "{pn}"
  },

  onStart: async function ({ api, event, args }) {
	const amount = parseInt(args[0]);
	const message = args.slice(1).join(" ");

	if (isNaN(amount) || !message) {
		return api.sendMessage("✨ spam cmd using Usage: %1spam (amount) (message)", event.threadID);
	}

	for (let i = 0; i < amount; i++) {
		api.sendMessage(message, event.threadID);
	}
  },
};

