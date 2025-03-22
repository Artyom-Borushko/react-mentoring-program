import './App.css';
import {Counter} from "./components/Counter";
import Header from "./components/Header";
import './styles/header.css';
import Main from "./components/Main";

function App() {
  return (
      <div className={'app'}>
          <Counter initialCounter={123}></Counter>
          <Header></Header>
          <div className={'header-from-main-divider'}></div>
          <Main></Main>
      </div>
  );
}

export default App;
