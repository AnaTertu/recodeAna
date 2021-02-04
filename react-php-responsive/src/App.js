import logo from './logo.svg';
import './App.css';
import { Suspense, lazy } from 'react'


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
                <p> Carregando... um momento, grata!</p>
            }>
                <Slogan />
            </Suspense>
            <Suspense fallback= {
                <p> Carregando... um momento, grata!</p>
            }>
                <Rodape />
            </Suspense>
      </header>
    </div>
  );
}

export default App;
