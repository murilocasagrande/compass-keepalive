import './App.css';
import Router from './routes';
import { GlobalStyle } from './components/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
