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
    <div className="w-full my-4">
      <h2 className="text-center mb-2 text-2xl">{question}</h2>
      <div className="flex gap-2 w-full justify-center flex-wrap ">
        {options.map((question) => (
          <button
            className={`p-2 mx-1 w-[470px] flex-grow rounded-full text-white ${
              disabled
                ? "bg-slate-950"
                : "bg-slate-500 hover:bg-slate-700 cursor-pointer"
            }`}
            id={question}
            onClick={onClick}
            onClickCapture={desabilitar}
            disabled={disabled}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pegunta;
