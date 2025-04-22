import { Button } from "../components"

import { shoe8 } from "../assets/images"

const SuperQuality = () => {
    return (
        <section
            id="about-us"
            className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
        >
            <div className="flex flex-1 flex-col">
                <h2 className="capitalize text-4xl lg:max-w-lg font-bold">
                    We provide you
                    <span className="text-red-300"> Super </span>
                    <span className="text-red-300"> Quality </span>
                    Shoes
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Premium quality shoes are designed to provide the best comfort, support, and durability.
                    They are made from high-quality materials and often feature advanced technologies to enhance performance.
                    Whether for sports or everyday use, our premium range of shoes got you covered.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                    Our shoes are crafted with precision and care, ensuring that every pair meets the highest standards of quality.
                    From the stitching to the sole, we pay attention to every detail to provide you with a product that not only looks good but also feels great on your feet.
                </p>
                <div className="mt-11">
                    <Button label="Learn More" />
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <img
                    src={shoe8}
                    alt="about image"
                    width={570}
                    height={522}
                    className="object-contain"
                />
            </div>
        </section>
    )
}

export default SuperQuality