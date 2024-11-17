import { useContext } from "react";
import QuestaoContext from "../context/QuestaoContext";

export const useQuestao = () => {
  return useContext(QuestaoContext);
};
