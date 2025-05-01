import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import { Button } from "../components"

const SpecialOffer = () => {
    return (
        <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
            <div className="flex-1">
                <img src={offer} alt="Special Offer" width={773} height={687} className="object-contain w-full" />
            </div>
            <div className="flex flex-1 flex-col">
                <h2 className="text-4xl font-bold mt-8">
                    <span className="text-red-300">Special </span>
                    Offer
                </h2>
                <p className="mt-4 info-text">
                    Get 30% off on your first order. Use code <span className="text-red-300">FIRST30</span> at checkout.
                </p>
                <p className="mt-6 info-text">
                    Limited time offer. Hurry up and grab your favorite shoes at a discounted price.
                </p>
                <div className="mt-11 flex flex-wrap gap-4">
                    <Button label="Shop Now" icon={arrowRight} />
                    <Button
                        label="Learn More"
                        backgroundColor="bg-white"
                        textColor="text-gray-500"
                        borderColor="border-gray-300"
                    />
                </div>
            </div>
        </section>
    )
}

export default SpecialOffer