import { Nav } from "./components";
import { Hero, PopularProducts } from "./sections";

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
      {/* SuperQuality */}
      {/* Services */}
      {/* SpecialOffer */}
      {/* CustomerReviews */}
      {/* Subscribe */}
      {/* Footer */}
    </main>
  )
}

export default App
