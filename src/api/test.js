const axios = require("axios");

const x = async () => {
  try {
    const data = await axios.post("https://libretranslate.de/translate", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: "Hello",
        source: "en",
        target: "es",
      }),
    });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

x();
