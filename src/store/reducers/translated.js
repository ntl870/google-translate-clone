let text = JSON.parse(sessionStorage.getItem("input_text")) || "";

const translatedText = (state = text, action) => {
  switch (action.type) {
    case "TRANSLATE":
      state = action.payload.data;
      sessionStorage.setItem("input_text", JSON.stringify(action.payload.text));
      return state;
    default:
      return state;
  }
};

export default translatedText;
