import { Nav } from "./components";
import {
  Hero,
  PopularProducts,
  Services,
  SuperQuality
} from "./sections";

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
      <section className="padding-x py-10">
        <Services />
      </section>
      {/* SpecialOffer */}
      {/* CustomerReviews */}
      {/* Subscribe */}
      {/* Footer */}
    </main>
  )
}

export default App
