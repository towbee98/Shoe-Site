//import { getShoeDetails } from "./shop.action";
import { shopActionType } from "./shop.types";

const initial_State = [
  {
    id: 1,
    title: "NIKE VANDU SUPREME",
    image: "/images/sneaker-img-1.jpg",
    price: 50,
    currency: "$",
    variations: [41, 42, 43, 44],
  },
  {
    id: 2,
    title: "NIKE BLAZER LOW",
    image: "/images/sneaker-img-2.jpg",
    price: 330,
    currency: "$",
    variations: [41, 42, 43, 44],
  },
  {
    id: 3,
    title: "AIR JORDAN RETRO",
    image: "/images/sneaker-img-3.jpg",
    price: 250,
    currency: "$",
    variations: [39, 40, 41, 42, 43, 44],
  },
  {
    id: 4,
    title: "NIKE FORCE LV8",
    image: "/images/sneaker-img-4.jpg",
    price: 350,
    currency: "$",
    variations: [40, 41, 42, 43, 44, 45],
  },
  {
    id: 5,
    title: "NIKE BLAZER LOW",
    image: "/images/sneaker-img-5.jpg",
    price: 630,
    currency: "$",
    variations: [40, 41, 42, 44, 45],
  },
  {
    id: 6,
    title: "NIKE AIR FORCE",
    image: "/images/sneaker-img-6.jpg",
    price: 450,
    currency: "$",
    variations: [40, 41, 42, 43, 44, 45],
  },
  {
    id: 7,
    title: "NIKE SB ZOOM",
    image: "/images/sneaker-img-7.jpg",
    price: 750,
    currency: "$",
  },
  {
    id: 8,
    title: "NIKE AIR HUARACHE",
    image: "/images/sneaker-img-8.jpg",
    price: 230,
    currency: "$",
  },
  {
    id: 9,
    title: "NIKE AIR SPAN",
    image: "/images/sneaker-img-9.jpg",
    price: 150,
    currency: "$",
  },
];

const shopReducer = (state = null, action) => {
  if (action.type === shopActionType.GET_A_SHOE_DETAILS) {
    state = { ...initial_State };
    return {
      shoeItems: state[action.payload - 1],
    };
  }
  return {
    shoeItems: initial_State,
  };
};

export default shopReducer;
