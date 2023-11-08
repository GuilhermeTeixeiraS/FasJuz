import { FiChevronLeft } from "react-icons/fi";

function FormContato({ step, setStep }) {
  return (
    <div className="conteinerForm">
      <span>Qual serviço de Advogado está precisando?</span>
      <div className="selecaoBT">
        <label htmlFor="email">Informe seu melhor Email</label>
        <input type="email" name="email" id="email" placeholder="E-mail"></input>
        <label htmlFor="tel">Informe seu Número de celular:</label>
        <input type="tel" name="tel" id="tel" placeholder="( 00 ) 0000-0000"></input>
      </div>
      <div className="buttonRetornoEnvio">
        <button
          className="typeSubmitOrButton"
          type={"submit"}
          onClick={() => {
            setStep(1);
          }}
        >
          {step === 5 ? "Enviar" : "Próximo"}
        </button>
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
    </div>
  );
}

export default FormContato;
