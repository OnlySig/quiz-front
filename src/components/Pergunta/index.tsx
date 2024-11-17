import { useState } from "react";

interface IProps {
  question: string;
  options: string[];
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Pegunta = ({ question, options, onClick }: IProps) => {
  const [disabled, setDisabled] = useState(false);
  const desabilitar = () => {
    setTimeout(() => {
      setDisabled(true);
    }, 100);
  };
  return (
    <div>
      <h2>{question}</h2>
      {options.map((question) => (
        <button
          id={question}
          onClick={onClick}
          onClickCapture={desabilitar}
          disabled={disabled}
        >
          {question}
        </button>
      ))}
    </div>
  );
};

export default Pegunta;
