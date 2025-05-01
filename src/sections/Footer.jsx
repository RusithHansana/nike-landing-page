import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
    return (
        <footer className="max-container">
            <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                <div className="flex flex-col items-start">
                    <a href="/">
                        <img
                            src={footerLogo}
                            alt="logo"
                            width={150}
                            height={50}
                            className="m-0"
                        />
                    </a>
                    <p className="mt-6 text-base leading-7 text-white sm:max-w-sm">
                        Find the best shoes for you and your family at our online store.
                        We offer a wide range of styles and sizes to suit every taste and need.
                        Shop now and enjoy fast shipping and easy returns.
                    </p>
                    <div className="flex items-center gap-5 mt-8 mb-8">
                        {
                            socialMedia.map((social) => (
                                <div
                                    key={social.alt}
                                    className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                                >
                                    <img
                                        src={social.icon}
                                        alt={social.alt}
                                        width={30}
                                        height={30}
                                        className="m-0"
                                    />
                                </div>

                            ))
                        }
                    </div>
                </div>

                <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                    {
                        footerLinks.map((section) => (
                            <div key={section.title}>
                                <h4 className="text-2xl leading-normal font-medium mb-6 text-white">
                                    {section.title}
                                </h4>
                                <ul>
                                    {
                                        section.links.map((link) => (
                                            <li
                                                key={link.name}
                                                className="mt-3 text-base leading-normal text-white hover:text-gray-500"
                                            >
                                                <a href={link.link}>
                                                    {link.name}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 justify-start items-center gap-2 cursor-pointer">
                    <img
                        src={copyrightSign}
                        alt="copyright sign"
                        width={20}
                        height={20}
                        className="rounded-full m-0"
                    />
                    <p>Copyright. All rights reserved.</p>
                </div>
                <p className="cursor-pointer">Terms & Conditions</p>
            </div>
        </footer>
    )
}

export default Footer