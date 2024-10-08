import Hbanner from './components/banner/Hbanner';
import CarrerP from './components/carrer/CarrerP';
import Explore from './components/explore/Explore'
import Train from './components/train/train';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <Hbanner />
      <section></section>
      <CarrerP />
      <section></section>
      <Explore/>
      <section></section>
      <Train />
    </div>
  );
}

export default App;
