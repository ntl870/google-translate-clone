import { langsAPI } from "../api/languages";
import { detectAPI } from "../api/detect";
import { translateAPI } from "../api/translate";

export const clientService = {
  getLangs: () => langsAPI.get(""),
  detects: (q) =>
    detectAPI.post(
      "",
      JSON.stringify({
        q: q,
      })
    ),
  translate: (q, source, target) =>
    translateAPI.post(
      "",
      JSON.stringify({
        q: q,
        source: source,
        target: target,
      })
    ),
};
