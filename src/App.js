import './App.css';
import Portfolio from './Portfolio';
import Store from './Store';

function App() {
  return (
    <>
      <div className='task'>Портфолио с фильтрами</div>
      <Portfolio  />
      <div className='task'>Расположение товаров</div>
      <Store />
    </>
  );
}

export default App;
