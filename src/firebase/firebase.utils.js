import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const config = {
  apiKey: "AIzaSyC8Lyt8dv1eaSBAQQU0eTDrP4cCkoC2-Po",

  authDomain: "ot-shoes-db.firebaseapp.com",

  projectId: "ot-shoes-db",

  storageBucket: "ot-shoes-db.appspot.com",

  messagingSenderId: "1068972862362",

  appId: "1:1068972862362:web:752d28895466379cdd2823",

  measurementId: "G-1C7EGBBKRZ",
};
const app = initializeApp(config);
export const firestore = getFirestore(app);
///
//store a user data in firebase db
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(firestore, `Users/${userAuth.uid}`);
  const Snapshot = await getDoc(userRef);
  //console.log(Snapshot);
  if (!Snapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error occured while saving data", error.message);
    }
  }
  return userRef;
};

export const auth = getAuth(app);
//export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

//Sign in with Google
export const signInWithGoogle = (props) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      props.user = result.user;
      props.errorMessage = "Hello world";
      console.log(props, token);
    })
    .catch((err) => {
      console.log(props);

      //const errorCode = err.code;
      //const errorMessage = err.message;
      //const email = err.email;
      //const credential = GoogleAuthProvider.credentialFromError(err);
      console.log(err.message);
    });
};

//Sign in with email and password
export const LoginWithUserCredentials = (props) => {
  return signInWithEmailAndPassword(auth, props.email, props.password)
    .then((userCredential) => {
      console.log(userCredential);
      return userCredential;
    })
    .catch((err) => {
      console.log(err.message);
      return err;
    });
};
export const onAuthState = onAuthStateChanged;
export const SignOut = signOut;
export { createUserWithEmailAndPassword };
