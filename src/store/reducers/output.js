let languages = JSON.parse(localStorage.getItem("output_lang")) || {
  langs: ["Vietnamese"],
  active: 0,
};

const outputLang = (state = languages, action) => {
  switch (action.type) {
    case "OUTPUT":
      state = action.payload.data;
      localStorage.setItem("output_lang", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default outputLang;
