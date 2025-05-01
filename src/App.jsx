import { Nav } from "./components";
import { Hero, PopularProducts, SuperQuality } from "./sections";

function App() {
  return (
    <main className="relative">
      <Nav />
      <div className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </div>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      {/* Services */}
      {/* SpecialOffer */}
      {/* CustomerReviews */}
      {/* Subscribe */}
      {/* Footer */}
    </main>
  )
}

export default App
