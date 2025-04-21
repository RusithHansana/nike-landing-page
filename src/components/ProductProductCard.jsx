import { star } from "../assets/icons"

const ProductProductCard = ({ shoe }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img src={shoe.shoeImg} alt={shoe.name} />
            <div className="flex mt-8 justify-start gap-2.5">
                <img src={star} alt="rating" width={24} height={24} />
                <p className="text-xl leading-normal text-gray-500">(4.5)</p>
            </div>
            <h3 className="mt-2 text-2xl leading-normal font-semibold">{shoe.name}</h3>
            <p className="mt-2 font-semibold text-red-300 text-2xl leading-normal">{shoe.price}</p>
        </div>
    )
}

export default ProductProductCard