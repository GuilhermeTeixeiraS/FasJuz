import FormContato from "./FormContato";
import FormData from "./FormData";
import FormDescicao from "./FormDescicao";
import FormServico from "./FormServico";
import FormOcameto from "./FormOcameto";
import "./index.css";
import { useState } from "react";
import emailjs from '@emailjs/browser'

function FormContrate() {
  const [step, setStep] = useState(1);
  const [mensag, setMendsag] = useState("")
  const [email, setEmail] = useState("")
  const [fone, setFone] = useState("")
  const [servico, setServico] = useState("")
  const [orcamento, setOrcamento] = useState("")
  const [dataAtendimento, setDataAtendimento] = useState("")
  

  const next = (obj) => {
    if (typeof obj === "string") {
      if(step == 1){
        setServico(obj)

      setStep(step + 1);
        
      }else if(step == 2){
        setOrcamento(obj)

        setStep(step + 1);

      }else if (step == 3){
        setDataAtendimento(obj)

        setStep(step + 1);

      }else
      setStep(step + 1);
      

    } else {
      setStep(step + 1);
    }

  };
  const retun = () => {
    setStep(step - 1);
  };
  const getCompStep = () => {
    switch (step) {
      case 1:
        return <FormServico step={step} next={next} />;
      case 2:
        return <FormOcameto step={step} next={next} retun={retun} />;
      case 3:
        return <FormData step={step} next={next} retun={retun} />;
      case 4:
        return <FormDescicao step={step} next={next} retun={retun} mensag={mensag} setMendsag={setMendsag}/>;
      case 5:
        return <FormContato step={step} retun={retun} email={email} setEmail={setEmail} fone={fone} setFone={setFone}/>;
      default:
        return <FormServico step={step} next={next} />;
    }
  };
  function sendEmail(e) {
    e.preventDefault();
    const templateParams = {mensag:mensag, email:email, fone:fone,servico:servico,orcamento:orcamento,dataAtendimento:dataAtendimento}
    if(templateParams.mensag == ""){
      alert("Prencha o campo: Explique o que você precisa com o máximo de detalhes?")
      setStep(4)
      return;
    }
    emailjs.send("service_rrtkylf","template_o9sy2i8",templateParams,"ZojbnjgYftJXKCqnd")
    .then((response)=>{
      setStep(1)
      setMendsag("")
      setEmail("")
      setFone("")
    }, (err)=>{
      alert("erro: ", err)
    })
  }
  return (
    <form className="form" onSubmit={sendEmail}>
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
