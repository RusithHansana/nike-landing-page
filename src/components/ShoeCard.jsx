const ShoeCard = ({ shoe, changeActiveImage, ActiveImage }) => {
    const handleClick = () => {
        changeActiveImage(shoe.shoe)
    }
    return (
        <div
            className={`border-2 rounded-xl ${ActiveImage === shoe.shoe ? "border-red-300" : "border-transparent"
                } cursor-pointer max-sm:flex-1`}
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-[url(/src/assets/images/thumbnail-background.svg)] bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img
                    src={shoe.thumbnail}
                    alt="shoe thumbnail"
                    width={127}
                    height={103.34}
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default ShoeCard