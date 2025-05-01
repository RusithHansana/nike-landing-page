import { reviews } from "../constants"
import { ReviewCard } from "../components"

const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="text-4xl text-center font-bold">
                What Our
                <span className="text-red-300"> Customers </span>
                Say?
            </h3>
            <p className="m-auto mt-4 max-w-lg text-center info-text">
                Hear from our satisfied customers about their experiences with our products and services.
                We value your feedback and strive to provide the best quality and service possible.
            </p>

            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                {
                    reviews.map((review, index) => (
                        <ReviewCard
                            key={index}
                            customerImage={review.customerImage}
                            customerName={review.customerName}
                            rating={review.rating}
                            feedback={review.feedback}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default CustomerReviews