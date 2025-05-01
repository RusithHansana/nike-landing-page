import { Button } from "../components"

const Subscribe = () => {
    return (
        <section
            id="contact-us"
            className="max-container flex justify-between items-center max-lg:flex-col gap-10"
        >
            <h3 className="text-4xl leading-[68px] lg:max-w-md font-bold">
                Sign Up For
                <span className="text-red-300">Updates </span>
                & Newsletter
            </h3>
            <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border-gray-500 rounded-full">
                <input
                    type="email"
                    placeholder="john@mail.com"
                    className="max-sm:w-full sm:flex-1 leading-2 placeholder:text-gray-500 outline-red-500 border border-gray-500 rounded-full p-3.5 "
                />
                <div className="flex max-sm:justify-end items-center max-sm:w-full">
                    <Button label="Sign Up" fullWidth={true} />
                </div>
            </div>
        </section>
    )
}

export default Subscribe