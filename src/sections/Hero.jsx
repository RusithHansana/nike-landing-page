import { useState } from "react"

import { Button, ShoeCard } from "../components"
import { statistics, shoes } from "../constants"
import { arrowRight } from "../assets/icons";

const Hero = () => {
    const [activeShoe, setActiveShoe] = useState(shoes[0].shoe);

    return (
        <section
            id="#home"
            className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p className="text-xl text-red-300">Our Summer Collection</p>

                <h1 className="mt-10 text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
                    <br />
                    <span className="text-red-300 inline-block mt-3">Nike</span> Shoes
                </h1>
                <p className="text-gray-500 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                    Discover the latest trends in footwear with our new Nike collection.
                </p>

                <Button label="Shop Now" icon={arrowRight} />

                <div className="flex justify-start item-start flex-wrap w-full mt-20 gap-16">
                    {statistics.map((stat, index) => (
                        <div key={index}>
                            <p className="text-4xl font-bold">{stat.value}</p>
                            <p className="leading-7 text-slate-500">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-[url(/src/assets/images/collection-background.svg)] bg-cover bg-center">
                <img
                    src={activeShoe}
                    alt="shoe collection"
                    width={610}
                    height={502}
                    className="object-contain relative z-10"
                />

                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {
                        shoes.map((shoe, index) => (
                            <div key={index}>
                                <ShoeCard
                                    shoe={shoe}
                                    changeActiveImage={(image) => { setActiveShoe(image) }}
                                    ActiveImage={activeShoe}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Hero