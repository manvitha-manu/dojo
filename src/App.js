
// import Button from './Button';
// import Story from './Text';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const name='Manvitha';
  // const number= 1000
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {/* dynamic usage of values */}
      {/* <h1>My name is {name}</h1>
      <h4>you are {number}times </h4>
      <h1>"manvitha"</h1> */}
      {/* <button>Click me ! if you like me </button> */}
      {/* <Button message="Hello"></Button>
      <Button message="Click me ..you like me "></Button>
      <Button message="Click me ..even if you don't like me"></Button>
      <Story stories="HElloo,Heyy,Hiii"></Story> */}
    </div>
  );
}

export default App;
