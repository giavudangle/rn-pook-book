import React, { useState } from "react";

//Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//Reducer
import {
  authReducer,
  cartReducer,
  favoriteReducer,
  orderReducer,
  productReducer,
} from "./src/reducers";
//Navigator
import { AppNavigator } from "./src/navigation";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

//redux form
import { reducer as formReducer } from "redux-form";
import { StatusBar } from "expo-status-bar";
//Notification
import LocalNotication from "./src/components/Notification/LocalNotification";




//Screens
import {TouchIdScreen} from './src/screens/TouchIdScreen'

import { SignUpScreen } from "./src/screens/SignupScreen";
import { LoginScreen } from "./src/screens/LoginScreen";
import {IntroScreen} from "./src/screens/IntroScreen";
import {AuthScreen} from './src/screens/AuthScreen';
import { ResetPasswordScreen } from "./src/screens/ResetPasswordScreen";
import {ProfileScreen} from './src/screens/ProfileScreen'
import {CartScreen} from './src/screens/CartScreen'
import {PreOrderScreen} from './src/screens/PreOrderScreen'
import {ForgetPasswordScreen} from './src/screens/ForgetPasswordScreen'
import {PaymentScreen} from './src/screens/PaymentScreen'
import {AddCreditCardScreen} from './src/screens/PaymentScreen'
import {FinishOrderScreen} from './src/screens/FinishOrderScreen'

import {ProductScreen} from './src/screens/ProductScreen'
import { OrderScreen } from "./src/screens/OrderScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
import { DetailScreen } from "./src/screens/DetailScreen";

import {FinishResetPasswordScreen} from './src/screens/FinishResetPasswordScreen'


const rootReducer = combineReducers({
  store: productReducer,
  cart: cartReducer,
  order: orderReducer,
  auth: authReducer,
  fav: favoriteReducer,
  form: formReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
const LoadAssets = async () => {
  const imageAssets = Asset.loadAsync([
    require("./src/assets/Images/banner1.jpg"),
    require("./src/assets/Images/banner3.jpg"),
    require("./src/assets/Images/banner4.jpg"),
    require("./src/assets/Images/banner5.jpg"),
    require("./src/assets/Images/banner6.jpg"),
    require("./src/assets/Images/bg1.jpg"),
    require("./src/assets/Images/bg2.jpg"),
    require("./src/assets/Images/bg3.jpg"),
    require("./src/assets/Images/defaultprofile.jpg"),
    require("./src/assets/Images/flower3.jpg"),
    require("./src/assets/Images/logoNoText.png"),
    require("./src/assets/Images/logo1.png"),
    require("./src/assets/Images/logoTextWhite.png"),
    require("./src/assets/Images/slide1.png"),
    require("./src/assets/Images/slide2.png"),
    require("./src/assets/Images/slide3.png"),
    require("./src/assets/Images/social1.png"),
    require("./src/assets/Images/social2.png"),
    require("./src/assets/Images/social3.png"),
    require("./src/assets/Images/creditcards.png"),
    require("./src/assets/Images/faceid.png"),
  ]);
  const fetchFonts = Font.loadAsync({
    "Roboto-Bold": require("./src/assets/Fonts/Roboto-Bold.ttf"),
    "Roboto-BoldItalic": require("./src/assets/Fonts/Roboto-BoldItalic.ttf"),
    "Roboto-Italic": require("./src/assets/Fonts/Roboto-Italic.ttf"),
    "Roboto-LightItalic": require("./src/assets/Fonts/Roboto-LightItalic.ttf"),
    "Roboto-Medium": require("./src/assets/Fonts/Roboto-Medium.ttf"),
    "Roboto-MediumItalic": require("./src/assets/Fonts/Roboto-MediumItalic.ttf"),
    "Roboto-Regular": require("./src/assets/Fonts/Roboto-Regular.ttf"),
  });

  return await Promise.all([imageAssets, fetchFonts]);
};
export default function App() {
  const [assetLoaded, setAssetLoaded] = useState(false);
  if (!assetLoaded) {
    return (
      <AppLoading
        startAsync={LoadAssets}
        onFinish={() => setAssetLoaded(true)}
      />
    );
  }
  return (
    <Provider store={store}>
      <StatusBar />
      <LocalNotication />
      <AppNavigator />
    </Provider>
  );
}

/**
 * ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
|--------------------------------------------------
| Code above use for running all screens of app (real app)
|--------------------------------------------------
*/







/**
|--------------------------------------------------
| Use this component to implement screen
| ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
|--------------------------------------------------
*/




// const App = () => {
//   const [assetLoaded, setAssetLoaded] = useState(false);
//   if (!assetLoaded) {
//     return (
//       <AppLoading
//         startAsync={LoadAssets}
//         onFinish={() => setAssetLoaded(true)}
//       />
//     );
//   }
//   return (
//     <Provider store={store}>
//       <LoginScreen/>


//     </Provider>

//   )
// }

//export default App
