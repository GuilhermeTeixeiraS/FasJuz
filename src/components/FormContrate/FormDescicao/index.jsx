import { FiChevronLeft } from "react-icons/fi";

function FormDescicao({ step, next, retun, mensag, setMendsag }) {
  return (
    <div className="conteinerForm">
      <p>Explique o que você precisa com o máximo de detalhes?</p>
      <div className="selecaoBT">
        <textarea
          name="descicao"
          id="descicao"
          autoCorrect="on"
          placeholder="Traga todos os detalhes do seu pedido.."
          cols="30"
          rows="10"
          value={mensag}
          onChange={(event) => setMendsag(event.target.value)}
        ></textarea>
      </div>
      <div className="buttonRetornoEnvio">
        <button className="typeSubmitOrButton" type={"submit"} onClick={next}>
          Próximo
        </button>
        <button
          className="setaRetorno"
          onClick={retun}
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
