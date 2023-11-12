import './style/Reset/index.css'
import Contrate from "./pages/Contrate"
import { useState } from 'react';
import HomePage from './pages/HomePage';
import NavbarBase from './components/NavbarBase/index';

function App() {
  const [page, setPage] = useState(1);
  const getCompPage = () => {
    switch (page) {
      case 1:
        return <HomePage page={page} setPage={setPage} />;
        case 2:
          return <Contrate page={page} setPage={setPage} />;
          case 3:
            return <Contrate page={page} setPage={setPage} />;
          default:
        return <HomePage page={page} setPage={setPage} />;
    }
  };

  return (
    <>
    <NavbarBase page={page} setPage={setPage} />
    {getCompPage()}
    </>
  )
}

export default App
