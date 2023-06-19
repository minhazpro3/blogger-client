import { pythonData } from "./python";
import { type SectionTypes } from "./types";
const languages: {
  python: SectionTypes;
  [key: string]: SectionTypes;
} = {
  python: pythonData,
};
export default languages;
