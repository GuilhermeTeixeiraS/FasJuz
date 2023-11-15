import "./index.css";

function Principal({ page, setPage }) {
  return (
    <section className="sectConteinerPrincipal">
      <div className="conteinerPrincipal">
        <h1>
          Principais talentos jurídicos, sob <i>demanda.</i>
        </h1>
        <div>
          <button
            onClick={() => {
              setPage(2);
            }}
          >
            Contrate um Talento
          </button>
          <button>Sou um Talento Jurídico</button>
        </div>
      </div>
    </section>
  );
}

export default Principal;
