import { FiChevronLeft } from "react-icons/fi";

function FormOcameto({ step, next, retun }) {
  return (
    <div className="conteinerForm">
      <p>Qual seu orçamento para investir em um Advogado?</p>
      <div className="selecaoBT">
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={()=>next("NEGOCIAR")}
          value={"NEGOCIAR"}
        >
          NEGOCIAR
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={()=>next("ATÊ 1.000")}
          value={"ATÊ 1.000"}
        >
          ATÊ 1.000
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={()=>next("2.000 - 5.000")}
          value={"2.000 - 5.000"}
        >
          2.000 - 5.000
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={()=>next("5.000 OU MAIS")}
          value={"5.000 OU MAIS"}
        >
          5.000 OU MAIS
        </button>
      </div>
      <button
      className="setaRetorno"
          onClick={retun}
          disabled={step === 1}
          type="button"
        >
          <FiChevronLeft />
        </button>
    </div>
  );
}

export default FormOcameto;
