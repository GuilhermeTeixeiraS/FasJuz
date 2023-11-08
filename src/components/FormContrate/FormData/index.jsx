import { FiChevronLeft } from "react-icons/fi";

function FormData({ step, setStep }) {
  return (
    <div className="conteinerForm">
      <span>Quando você pretende realizar o serviço?</span>
      <div className="selecaoBT">
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={() => {
            setStep(step + 1);
          }}
          value={""}
        >
          URGENTE (O QUANTO ANTES POSSÍVEL)
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={() => {
            setStep(step + 1);
          }}
          value={""}
        >
          PRÓXIMOS 10 DIAS
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={() => {
            setStep(step + 1);
          }}
          value={""}
        >
          PRÓXIMOS 30 DIAS
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={() => {
            setStep(step + 1);
          }}
          value={""}
        >
          SEM DATA DEFINIDA
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
          <FiChevronLeft/>
        </button>
    </div>
  );
}

export default FormData;
