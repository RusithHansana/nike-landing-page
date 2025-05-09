import { star } from "../assets/icons"

const ReviewCard = ({ customerImage, customerName, rating, feedback }) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img
                src={customerImage}
                alt="Customer"
                className="rounded-full object-cover w-[120px] h-[120px]"
            />
            <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
                <img
                    src={star}
                    alt="Star"
                    width={24}
                    height={24}
                    className="object-contain m-0"
                />
                <p className="text-xl text-gray-500">({rating})</p>
            </div>
            <h3 className="mt-1 text-3xl text-center font-bold">
                {customerName}
            </h3>
        </div>
    )
}

export default ReviewCard