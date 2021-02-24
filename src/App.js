import './App.css';
import Board from './components/Board';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src="./images/title.png" alt="title" />
      </header>
      <div className="main-content" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/images/background.png'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize:'cover'
      }}>
        <Board/>
      </div>
    </div>
  );
}

export default App;
