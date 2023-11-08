import { FiChevronLeft } from "react-icons/fi";

function FormOcameto({ step, setStep }) {
  return (
    <div className="conteinerForm">
      <span>Qual seu orçamento para investir em um Advogado?</span>
      <div className="selecaoBT">
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={() => {
            setStep(step + 1);
          }}
          value={""}
        >
          NEGOCIAR
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={() => {
            setStep(step + 1);
          }}
          value={""}
        >
          ATÊ 1.000
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={() => {
            setStep(step + 1);
          }}
          value={""}
        >
          2.000 - 5.000
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={() => {
            setStep(step + 1);
          }}
          value={""}
        >
          5.000 OU MAIS
        </button>
      </div>
      <button
      className="setaRetorno"
          onClick={() => {
            setStep(step - 1);
          }}
          disabled={step === 1}
          type="button"
        >
          <FiChevronLeft />
        </button>
    </div>
  );
}

export default FormOcameto;
