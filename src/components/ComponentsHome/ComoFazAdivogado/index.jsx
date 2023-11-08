import "./index.css";
import groupFA1 from "../../../img/groupFA-1.svg";
import groupFA2 from "../../../img/groupFA-2.svg";
import groupFA3 from "../../../img/groupFA-3.svg";
import groupFA4 from "../../../img/groupFA-4.svg";

function ComoFazAdivogado({ page, setPage }) {
  return (
    <section className="selectionCFAdivogado">
      <h2>
        Como a <i>Fazjus</i> funciona para o Advogado ?
      </h2>
      <div>
        <div>
          <img src={groupFA1} alt="" />
          <h3>Faça seu cadastro</h3>
          <span>
            Em apenas 5 passos você realiza seu cadastro. É rápido e fácil!
          </span>
        </div>
        <div>
          <img src={groupFA2} alt="" />
          <h3>Receba Solicitações</h3>
          <span>
            Através da nossa plataforma receba solicitações de clientes de
            diversas areas.
          </span>
        </div>
        <div>
          <img src={groupFA3} alt="" />
          <h3>Compre Moedas Juscoin</h3>
          <span>
            Compre moedas Juscoin para desbloquear os contatos dos clientes.
          </span>
        </div>
        <div>
          <img src={groupFA4} alt="" />
          <h3>Receba 100% do serviço</h3>
          <span>
            Realize negócios e receba 100% do valor do serviço. E sem
            mensalidade!
          </span>
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            setPage(2);
          }}
        >
          Entre em contato com clientes agora!
        </button>
      </div>
    </section>
  );
}

export default ComoFazAdivogado;
