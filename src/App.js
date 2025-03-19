import './App.css';
import {Counter} from "./components/Counter";
import Header from "./components/Header";
import './styles/header.css';

function App() {
  return (
      <div className={'app'}>
          <Counter initialCounter={123}></Counter>
          <Header></Header>
          <div className={'header-from-main-divider'}></div>
      </div>
  );
}

export default App;
