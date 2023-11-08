import "./index.css";
import "../../../public/headerLogo.svg";
function NavbarBase({ page, setPage }) {
  return (
    <header>
      <nav>
        <div className="logoNaveBar">
          <button
            type="button"
            onClick={() => {
              setPage(1);
            }}
          >
            <img src="headerLogo.svg" alt="Logo FazJus" />
          </button>
        </div>
        <div className="referencia">
          <button
            type="button"
            onClick={() => {
              setPage(1);
            }}
          >
            Como Funciona?
          </button>
          <button
            type="button"
            onClick={() => {
              setPage(1);
            }}
          >
            Blog
          </button>
        </div>
        <div className="logoContato">
          <button className="butonLogin">Log in</button>
          <button
            type="button"
            onClick={() => {
              setPage(2);
            }}
            className="butonEmContato"
          >
            Entrar em Contato
          </button>
        </div>
      </nav>
    </header>
  );
}

export default NavbarBase;
