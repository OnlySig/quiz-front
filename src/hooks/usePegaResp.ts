import quiz from "../../quiz.json";

export const usePegaResp = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  pergunta: string
) => {
  const currentValue = (e.target as HTMLButtonElement).textContent;
  const answer = quiz.questions.filter(
    (question) => question.question === pergunta
  )[0].answer;
  return {
    currentValue,
    answer,
  };
};
