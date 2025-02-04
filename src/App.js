import './App.css';
import Header from './components/Header';
import Entry from './components/Entry';
import data from './components/data'

function App() {

  const text = data.map((x)=> {
  return(<Entry {...x} />)}
  )

  return (
    <div className="App">
      <Header/>
      {text}
    </div>  
  );
}

export default App;
