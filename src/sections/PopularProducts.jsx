import { PopularProductCard } from "../components"
import { products } from "../constants"

const PopularProducts = () => {
    return (
        <section className="max-container max-sm:mt-12" id="products">
            <div className="flex flex-col justify-start gap-5">
                <h2 className="text-4xl font-bold">
                    Our <span className="text-red-300">Popular</span> Products
                </h2>
                <p className="lg:max-w-lg mt-2 text-gray-500">
                    Experience top notch quality and comfort with our exclusive range of shoes.

                </p>
            </div>
            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
                {
                    products.map((shoe) => (
                        <PopularProductCard key={shoe.name} shoe={shoe} />
                    ))
                }
            </div>
        </section>
    )
}

export default PopularProducts