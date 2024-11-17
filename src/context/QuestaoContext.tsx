import { createContext, ReactNode, useState } from "react";
import { IQuiz } from "../types/IQuiz";

interface IQuestaoContext {
  acerto: IQuiz[];
  errado: IQuiz[];
  setAcerto: React.Dispatch<React.SetStateAction<IQuiz[]>>;
  setErrado: React.Dispatch<React.SetStateAction<IQuiz[]>>;
}

const initialState: { acerto: IQuiz[]; errado: IQuiz[] } = {
  acerto: [],
  errado: [],
};

const QuestaoContext = createContext<IQuestaoContext>({
  acerto: initialState.acerto,
  errado: initialState.errado,
  setAcerto: () => null,
  setErrado: () => null,
});

export const QuestaoProvider = ({ children }: { children: ReactNode }) => {
  const [acerto, setAcerto] = useState<IQuiz[]>(initialState.acerto);
  const [errado, setErrado] = useState<IQuiz[]>(initialState.errado);

  const context = {
    acerto,
    errado,
    setAcerto,
    setErrado,
  };
  return (
    <QuestaoContext.Provider value={context}>
      {children}
    </QuestaoContext.Provider>
  );
};

export default QuestaoContext;
