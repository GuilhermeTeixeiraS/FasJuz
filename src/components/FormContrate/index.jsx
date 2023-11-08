import FormContato from "./FormContato";
import FormData from "./FormData";
import FormDescicao from "./FormDescicao";
import FormServico from "./FormServico";
import FormOcameto from "./FormOcameto";
import "./index.css";
import { useState } from "react";

function FormContrate() {
  const [step, setStep] = useState(1);
  const getCompStep = () => {
    switch (step) {
      case 1:
        return <FormServico step={step} setStep={setStep} />;
      case 2:
        return <FormOcameto step={step} setStep={setStep} />;
      case 3:
        return <FormData step={step} setStep={setStep} />;
      case 4:
        return <FormDescicao step={step} setStep={setStep} />;
      case 5:
        return <FormContato step={step} setStep={setStep} />;
      default:
        return <FormServico step={step} setStep={setStep} />;
    }
  };
  return (
    <form>
      <ul>
        <li className={step >= 1 ? "check" : "dontCheck"}></li>
        <li className={step >= 2 ? "check" : "dontCheck"}></li>
        <li className={step >= 3 ? "check" : "dontCheck"}></li>
        <li className={step >= 4 ? "check" : "dontCheck"}></li>
        <li className={step >= 5 ? "check" : "dontCheck"}></li>
      </ul>
      {getCompStep()}
    
    </form>
  );
}

export default FormContrate;
