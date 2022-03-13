import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      shoeItems: [
        {
          id: 1,
          title: "NIKE VANDU SUPREME",
          image: "/images/sneaker-img-1.jpg",
          price: 50,
          currency: "$",
        },
        {
          id: 2,
          title: "NIKE BLAZER LOW",
          image: "/images/sneaker-img-2.jpg",
          price: 330,
          currency: "$",
        },
        {
          id: 3,
          title: "AIR JORDAN RETRO",
          image: "/images/sneaker-img-3.jpg",
          price: 250,
          currency: "$",
        },
        {
          id: 4,
          title: "NIKE FORCE LV8",
          image: "/images/sneaker-img-4.jpg",
          price: 350,
          currency: "$",
        },
        {
          id: 5,
          title: "NIKE BLAZER LOW",
          image: "/images/sneaker-img-5.jpg",
          price: 630,
          currency: "$",
        },
        {
          id: 6,
          title: "NIKE AIR FORCE",
          image: "/images/sneaker-img-6.jpg",
          price: 450,
          currency: "$",
        },
        {
          id: 7,
          title: "NIKE SB ZOOM",
          image: "images/sneaker-img-7.jpg",
          price: 750,
          currency: "$",
        },
        {
          id: 8,
          title: "NIKE AIR HUARACHE",
          image: "images/sneaker-img-8.jpg",
          price: 230,
          currency: "$",
        },
        {
          id: 9,
          title: "NIKE AIR SPAN",
          image: "images/sneaker-img-9.jpg",
          price: 150,
          currency: "$",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.shoeItems.map((item) => {
          return (
            <MenuItem
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              currency={item.currency}
            />
          );
        })}
      </div>
    );
  }
}

export default Directory;
