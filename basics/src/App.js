import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <>
    <h1>Hello from reactjs</h1>
    <Header />
    <Home name = {'pooja'} age = {24}/>
    <About />
    <Contact />
    </>
  );
}

export default App;
