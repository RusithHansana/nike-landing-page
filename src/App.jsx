import { Nav } from "./components";
import {
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
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
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      {/* CustomerReviews */}
      {/* Subscribe */}
      {/* Footer */}
    </main>
  )
}

export default App
