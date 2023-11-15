import "./index.css";
import groupOQ1 from "../../../img/groupOQ1.svg";
import groupOQ2 from "../../../img/groupOQ2.svg";
import groupOQ3 from "../../../img/groupOQ3.svg";

function OqueFazJus({ page, setPage }) {
  return (
    <section className="sectionOque">
      <div>
        <h2>
          O que é a <i>Fazjus?</i>
        </h2>
        <p>
          FazJus é a maior plataforma de contratação de serviços jurídicos do
          brasil. Conectamos profissionais de todo o País com pessoas que
          precisam acessar a justiça, com qualidade, facilidade e rapidez a
          todos os tipos de necessidades jurídicas.
        </p>
        <div>
          <div>
            <img src={groupOQ1} alt="" />
            <h3>Faça sua Solicitação</h3>
            <span>
              Em apenas 5 passos você realiza sua solicitação. Conte sobre seu
              caso. É rápido e de graça!
            </span>
          </div>
          <div>
            <img src={groupOQ2} alt="" />
            <h3>Receba até quatro orçamentos</h3>
            <span>
              Em alguns instantes advogados especializados entram em contato com
              você.{" "}
            </span>
          </div>
          <div>
            <img src={groupOQ3} alt="" />
            <h3>Escolha o Melhor</h3>
            <span>
              Negocie direto com eles. Escolha o melhor profissional que atenda
              a sua demanda.
            </span>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              setPage(2);
            }}
            type="button"
          >
            Solicitar Advogado
          </button>
        </div>
      </div>
    </section>
  );
}

export default OqueFazJus;
