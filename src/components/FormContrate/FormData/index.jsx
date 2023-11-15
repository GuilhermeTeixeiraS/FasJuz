import { FiChevronLeft } from "react-icons/fi";

function FormData({ step, next, retun }) {
  return (
    <div className="conteinerForm">
      <p>Quando você pretende realizar o serviço?</p>
      <div className="selecaoBT">
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={()=>next("URGENTE (O QUANTO ANTES POSSÍVEL)")}
          value={"URGENTE (O QUANTO ANTES POSSÍVEL)"}
        >
          URGENTE (O QUANTO ANTES POSSÍVEL)
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={()=>next("PRÓXIMOS 10 DIAS")}
          value={"PRÓXIMOS 10 DIAS"}
        >
          PRÓXIMOS 10 DIAS
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={()=>next("PRÓXIMOS 30 DIAS")}
          value={"PRÓXIMOS 30 DIAS"}
        >
          PRÓXIMOS 30 DIAS
        </button>
        <button
          type={step === 6 ? "submit" : "button"}
          onClick={()=>next("SEM DATA DEFINIDA")}
          value={"SEM DATA DEFINIDA"}
        >
          SEM DATA DEFINIDA
        </button>
      </div>
      <button
      className="setaRetorno"
          onClick={retun}
          disabled={step === 1}
          type="button"
        >
          <FiChevronLeft/>
        </button>
    </div>
  );
}

export default FormData;
