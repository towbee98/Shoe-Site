import React from "react";

import { Route, Routes, Navigate } from "react-router-dom";

import { connect } from "react-redux";
import {
  onAuthState,
  auth,
  createUserProfileDocument,
} from "./firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import ShoeDetailPage from "./pages/shoeDetail/shoedetail.component";
import ShoePage from "./pages/shopPage/shop.component";
import Header from "./components/header/header.component";
import SignIn from "./pages/Auth Page/SignIn/sign-in.component";
import SignUp from "./pages/Auth Page/SignUp/SignUp.component";
import ForgetPassword from "./pages/Auth Page/ForgetPassword/forget-password.component";
import { setCurrentUser } from "./redux/user/user.action";
import { getShoeDetails } from "./redux/shop/shop.action";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   //   this.state = {
  //   //     currentUser: null,
  //   //     errorMessage: "",
  //   //     error: false,
  //   //   };
  // }

  unsuscribeFromAuth = null;
  componentDidMount() {
    this.unsuscribeFromAuth = onAuthState(auth, async (userAuth) => {
      if (userAuth) {
        // this.setState({ currentUser: user });
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (snapshot) => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });

          // },
          // () => {
          // console.log(this.props);
          // }
        });
        // });
      } else {
        //user is signed out
        this.props.setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }
  render() {
    console.log(this.props.shoeItems);
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route
            exact
            path="/sneakers/:sneakerId"
            element={<ShoeDetailPage />}
          />
          <Route path="/collections" element={<ShoePage />} />
          <Route
            exact
            path="/login"
            element={
              this.props.currentUser ? <Navigate replace to="/" /> : <SignIn />
            }
          />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = ({ user, shop }) => ({
  shoeItems: shop.shoeItems,
  currentUser: user.currentUser,
  errorMessage: "",
  error: false,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  getShoeDetails: (shop) => dispatch(getShoeDetails(shop)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
