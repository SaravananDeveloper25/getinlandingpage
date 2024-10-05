import Hbanner from './components/banner/Hbanner';
import CarrerP from './components/carrer/CarrerP';
import Explore from './components/explore/Explore'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <Hbanner />
      <section></section>
      <CarrerP />
      <section></section>
      <Explore/>
    </div>
  );
}

export default App;
