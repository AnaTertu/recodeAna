import logo from './logo.svg';
import './App.css';
import { Suspense, lazy } from 'react'
import Navbar from './components/NavBar';
import img from './images/img.png';
import carreg from './videos/carreg.mp4';


// import Slogan from './code-splintting/Slogan';
// import Rodape from './code-splintting/Rodape';

const Slogan = lazy(() => import('./code-splintting/Slogan'));
const Rodape = lazy(() => import('./code-splintting/Rodape'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

            <Suspense fallback= {
                <img src={img} alt=""/>
                }>
            <Slogan />
            </Suspense>

            <Suspense fallback= {
                <p> Carregando... um momento, grata!</p>
              }>
                <Rodape />
            </Suspense>

            <Suspense fallback= {
                <p> Carregando... um momento, grata!</p>
             
            }>
                <Navbar/>
            </Suspense>
      </header>
    </div>
  );
}

export default App;
