import Navigation from './components/ui/Navigation';
import Hero from './components/sections/Hero';
import SummitOverview from './components/sections/SummitOverview';
import WhyAttend from './components/sections/WhyAttend';
import Speakers from './components/sections/Speakers';
import Agenda from './components/sections/Agenda';
import Exhibition from './components/sections/Exhibition';
import HackathonFinale from './components/sections/HackathonFinale';
import Prizes from './components/sections/Prizes';
import Partnership from './components/sections/Partnership';
import News from './components/sections/News';
import VenueTravel from './components/sections/VenueTravel';
import Registration from './components/sections/Registration';
import Organizers from './components/sections/Organizers';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-primary">
      <Navigation />
      <Hero />
      <SummitOverview />
      <WhyAttend />
      <Speakers />
      <Agenda />
      <Exhibition />
      <HackathonFinale />
      <Prizes />
      <Partnership />
      <News />
      <VenueTravel />
      <Registration />
      <Organizers />
      <Footer />
    </div>
  );
}

export default App;
