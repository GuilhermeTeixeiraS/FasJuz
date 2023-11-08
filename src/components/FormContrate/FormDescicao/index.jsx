import { FiChevronLeft } from "react-icons/fi";

function FormDescicao({ step, setStep }) {
  return (
    <div className="conteinerForm">
      <span>Explique o que você precisa com o máximo de detalhes?</span>
      <div className="selecaoBT">
        <textarea
          name="descicao"
          id="descicao"
          autoCorrect="on"
          placeholder="Traga todos os detalhes do seu pedido.."
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="buttonRetornoEnvio">
        <button
          className="typeSubmitOrButton"
          type={"submit"}
          onClick={() => {
            setStep(step + 1);
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

export default FormDescicao;
