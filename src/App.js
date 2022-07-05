import './App.css';

import Navigation from './components/Navigation';
import UserInput from './components/UserInput';
import MainTable from './components/MainTable';
import Description from './components/Description';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <UserInput />
        <MainTable />
        {/* <Description /> */}
      </header>
    </div>
  );
}

export default App;
