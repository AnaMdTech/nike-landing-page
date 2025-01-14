import {
  Hero,
  Services,
  SpecialOffer,
  CustomerReviews,
  PopularProducts,
  SuperQuality,
  Subscribe,
  Footer,
} from "./sections";
import Nav from "./components/Nav";

const App = () => {
  return (
    <main className="relative">
      <Nav />

      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>

      <section className="padding">
        <PopularProducts />
      </section>

      <section>
        <SuperQuality />
      </section>

      <section>
        <Services />
      </section>

      <section>
        <SpecialOffer />
      </section>

      <section>
        <CustomerReviews />
      </section>

      <section>
        <Subscribe />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
};

export default App;
