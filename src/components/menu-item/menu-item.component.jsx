import React from "react";

import "./menu-item.styles.scss";
const MenuItem = (props) => {
  return (
    <div className="menu-item">
      <div className="content">
        <div
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + props.image})`,
          }}
          className="shoe-image"
        ></div>
        <div className="details">
          <div className="title">{props.title}</div>
          <span className="price">
            {props.currency}
            {props.price}
          </span>
          <div className="ratings"></div>
        </div>
      </div>
    </div>
  );
};

/* <div className="menu-item">
          <div className="content">
            <div className="shoe-image"></div>
            <div className="details">
              <div className="title">NIKE VANDU SUPREME</div>
              <span className="price">$50</span>
              <div className="ratings"></div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="shoe-image"></div>
            <div className="details">
              <div className="title">NIKE BLAZER LOW</div>
              <span className="price">$330</span>
              <div className="ratings"></div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="shoe-image"></div>
            <div className="details">
              <div className="title">AIR JORDAN RETRO</div>
              <span className="price">$250</span>
              <div className="ratings"></div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="shoe-image"></div>
            <div className="details">
              <div className="title">NIKE AIR HUARACHE</div>
              <span className="price">$185</span>
              <div className="ratings"></div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="shoe-image"></div>
            <div className="details">
              <div className="title">NIKE AIR FORCE</div>
              <span className="price">$180</span>
              <div className="ratings"></div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="shoe-image"></div>
            <div className="details">
              <div className="title">AIR JORDAN RETRO</div>
              <span className="price">$220</span>
              <div className="ratings"></div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="shoe-image"></div>
            <div className="details">
              <div className="title">AIR JORDAN RETRO</div>
              <span className="price">$220</span>
              <div className="ratings"></div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="shoe-image"></div>
            <div className="details">
              <div className="title">AIR JORDAN RETRO</div>
              <span className="price">$220</span>
              <div className="ratings"></div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <div className="shoe-image"></div>
            <div className="details">
              <div className="title">AIR JORDAN RETRO</div>
              <span className="price">$220</span>
              <div className="ratings"></div>
            </div>
          </div>
        </div> */

export default MenuItem;
