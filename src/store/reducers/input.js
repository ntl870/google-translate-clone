let languages = JSON.parse(localStorage.getItem("input_lang")) || {
  langs: [
    {
      code: "detect",
      name: "Languages Detection",
    },
  ],
  active: 0,
};

const inputLang = (state = languages, action) => {
  switch (action.type) {
    case "INPUT":
      state = action.payload.data;
      localStorage.setItem("input_lang", JSON.stringify(state));
      return {
        ...action.payload.data,
        langs: state.langs,
      };
    case "DETECT":
      state = action.payload.data;
      localStorage.setItem("input_lang", JSON.stringify(state));
      return {
        ...action.payload.data,
        langs: state.langs,
      };
    default:
      return state;
  }
};

export default inputLang;
