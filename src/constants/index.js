import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
} from "../assets/images";

import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const products = [
  {
    shoeImg: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    shoeImg: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    shoeImg: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    shoeImg: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    shoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    shoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    shoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1K+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250K+", label: "Customers" },
];

export const services = [
  {
    icon: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    icon: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    icon: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    customerImage: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    customerImage: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { icon: facebook, alt: "facebook logo" },
  { icon: twitter, alt: "twitter logo" },
  { icon: instagram, alt: "instagram logo" },
];
