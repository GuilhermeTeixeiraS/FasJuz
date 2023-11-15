import { FiChevronLeft } from "react-icons/fi";
function FormContato({ step, retun, email, setEmail, fone, setFone }) {
  return (
    <div className="conteinerForm">
      <p>Qual serviço de Advogado está precisando?</p>
      <div className="selecaoBT">
        <label htmlFor="email">Informe seu melhor Email</label>
        <input
          type="email"
          required={true}
          name="email"
          id="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <label htmlFor="tel">Informe seu Número de celular:</label>
        <input
          type="tel"
          required={true}
          name="tel"
          id="tel"
          placeholder="( 00 ) 00000000"
          pattern="([0-9]{2})[0-9]{9}"
          value={fone}
          onChange={(event) => setFone(event.target.value)}
        ></input>
        <span>
          Esse dado é importante para que o profissional possa falar com você.
        </span>
      </div>
      <div className="buttonRetornoEnvio">
        <button className="typeSubmitOrButton" type={"submit"}>
          Enviar
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

export default FormContato;
