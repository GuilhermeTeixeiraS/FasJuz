function FormServico({ step, setStep }) {
  return (
    <div className="conteinerForm">
      <span>Qual serviço de Advogado está precisando?</span>
      <div className="selecaoBT">
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={() => {
            setStep(step + 1);
          }}
        >
          CIVIL
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={() => {
            setStep(step + 1);
          }}
        >
          CONSUMIDOR
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={() => {
            setStep(step + 1);
          }}
        >
          EMPRESARIAL
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={() => {
            setStep(step + 1);
          }}
        >
          PREVIDENCIÁRIO
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={() => {
            setStep(step + 1);
          }}
        >
          CRIMINAL
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={() => {
            setStep(step + 1);
          }}
        >
          FAMÍLIA
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={() => {
            setStep(step + 1);
          }}
        >
          TRABALHISTA
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={() => {
            setStep(step + 1);
          }}
        >
          OUTROS
        </button>
      </div>
    </div>
  );
}

export default FormServico;
