import ComoFazAdivogado from "../../components/ComponentsHome/ComoFazAdivogado";
import CustoFazJus from "../../components/ComponentsHome/CustoFazJus";
import EzemploFaz from "../../components/ComponentsHome/EzemploFaz";
import OqueFazJus from "../../components/ComponentsHome/OqueFazJus";
import Principal from "../../components/ComponentsHome/Principal";
import FuterBase from "../../components/FuterBase";
import "/src/img/maskMroup.svg"
import './index.css'

function HomePage({ page, setPage }) {

  return (
    <>
      <main className="mainHomePage">
        <Principal/>
        <OqueFazJus page={page} setPage={setPage}/>
        <CustoFazJus/>
        <ComoFazAdivogado page={page} setPage={setPage}/>
        <EzemploFaz/>
      </main>
      <FuterBase/>
    </>
  );
}

export default HomePage;
