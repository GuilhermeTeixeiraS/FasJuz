function FormServico({ step, next }) {
  return (
    <div className="conteinerForm">
      <p>Qual serviço de Advogado está precisando?</p>
      <div className="selecaoBT">
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={()=>next("CIVIL")}
          value={"CIVIL"}
        >
          CIVIL
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={()=>next("CONSUMIDOR")}
          value={"CONSUMIDOR"}
        >
          CONSUMIDOR
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={()=>next("EMPRESARIAL")}
          value={"EMPRESARIAL"}
        >
          EMPRESARIAL
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={()=>next("PREVIDENCIÁRIO")}
          value={"PREVIDENCIÁRIO"}
        >
          PREVIDENCIÁRIO
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={()=>next("CRIMINAL")}
          value={"CRIMINAL"}
        >
          CRIMINAL
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={()=>next("FAMÍLIA")}
          value={"FAMÍLIA"}
        >
          FAMÍLIA
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={()=>next("TRABALHISTA")}
          value={"TRABALHISTA"}
        >
          TRABALHISTA
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={()=>next("OUTROS")}
          value={"OUTROS"}
        >
          OUTROS
        </button>
      </div>
    </div>
  );
}

export default FormServico;
