import './App.css';

import Navigation from './components/Navigation';
import TaxForm from './components/TaxForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <TaxForm />
      </header>
    </div>
  );
}

export default App;
