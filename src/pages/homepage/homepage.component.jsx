import React from "react";
import "./homepage.styles.scss";
//import MenuItem from "../../components/menu-item/menu-item.component";
import Directory from "../../components/directory/directory.component";
const Homepage = (props) => {
  //console.log(props);
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Homepage;
