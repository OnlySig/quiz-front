import quiz from "../quiz.json";
import Pegunta from "./components/Pergunta";
import { usePegaResp } from "./hooks/usePegaResp";
import { useQuestao } from "./hooks/useQuestao";
import { IQuiz } from "./types/IQuiz";

function App() {
  const { setAcerto, setErrado, acerto, errado } = useQuestao();
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    questão: IQuiz
  ) => {
    const { answer, currentValue } = usePegaResp(e, questão.question);
    if (answer === currentValue) {
      return setAcerto((acetPrev) => [...acetPrev, questão]);
    }
    return setErrado((erroPrev) => [...erroPrev, questão]);
  };
  if (acerto.length + errado.length === quiz.questions.length) {
    alert(`Você acertou: ${acerto.length} e errou: ${errado.length}`);
    window.location.reload();
  }
  return (
    <section className="flex flex-col items-center w-[75%] mx-auto">
      {quiz.questions.map((questão, index) => (
        <Pegunta
          question={questão.question}
          options={questão.options}
          key={index}
          onClick={(e) => handleClick(e, questão)}
        />
      ))}
    </section>
  );
}

export default App;
