import Header from './components/Header';
import ConciergePanel from './components/ConciergePanel';
import ShowroomPanel from './components/ShowroomPanel';
import HowItWorks from './components/HowItWorks';
import ForProperties from './components/ForProperties';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-luxury-dark">
      <Header />

      <main>
        <section className="luxury-layout max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <ConciergePanel />
            </div>

            <div className="lg:col-span-7">
              <ShowroomPanel />
            </div>
          </div>
        </section>

        <HowItWorks />
        <ForProperties />
      </main>

      <Footer />
    </div>
  );
}

export default App;
