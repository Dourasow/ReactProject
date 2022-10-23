import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet';
import Welcome from './Component/Welcome';
import Hello from './Component/Hello';
import Message from './Component/Message';
import Counter from './Component/Counter';
import FunctionClick from './Component/FunctionClick';
import ClassClick from './Component/ClassClick';

function App() {
  return (
    <div className="App">
      <FunctionClick />
      <ClassClick />
      {/*<Counter />
      {/*<Message />*/}
     {/*<Greet name='Abdul' heroName='Sow'>
      <p>This is the big brother</p></Greet>
     <Greet name='Ousmane' heroName='Diallo'>
        <button>Read More</button>
     </Greet>
     <Greet name='Hadja' heroName='Bah'>
        <p>The last born</p>
     </Greet>

     <Welcome  name='Abdul' heroName='Sow' />
     <Welcome name='Ousmane' heroName='Diallo' />
  <Welcome name='Hadja' heroName='Bah' />*/}

    {/* <Hello />*/}
    </div>
  );
}

export default App;
