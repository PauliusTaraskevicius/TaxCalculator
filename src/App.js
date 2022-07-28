import './App.css';

import Navigation from './components/Navigation';
import TaxForm from './components/TaxForm';
import Description from './components/Description';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <TaxForm />
        <Description />
        <Footer />
      </header>
    </div>
  );
}

export default App;
