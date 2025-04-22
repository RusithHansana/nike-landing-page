const Button = ({
    label,
    icon,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth
}) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none
                ${backgroundColor
                    ? `${backgroundColor} ${textColor} ${borderColor}`
                    : "bg-red-300 text-white border-red-500"}
                rounded-full ${fullWidth && "w-full"} cursor-pointer`}
        >
            {label}
            {
                icon &&
                <img
                    src={icon}
                    alt="arrow-right"
                />
            }
        </button>
    )
}

export default Button