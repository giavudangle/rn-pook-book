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

console.disableYellowBox = true; 



import { categoryReducer } from "./src/reducers/category/categoryReducer";


const rootReducer = combineReducers({
  store: productReducer,
  cart: cartReducer,
  order: orderReducer,
  auth: authReducer,
  fav: favoriteReducer,
  category: categoryReducer,
  form: formReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
const LoadAssets = async () => {
  const imageAssets = Asset.loadAsync([
    require("./src/assets/Images/banner1.png"),
    require("./src/assets/Images/banner2.png"),
    require("./src/assets/Images/banner3.png"),
    require("./src/assets/Images/banner4.png"),
    require("./src/assets/Images/banner5.png"),
    require("./src/assets/Images/defaultprofile.png"),
    require("./src/assets/Images/logo1.png"),
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



// export default  App = () => {
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
//       <ResetPasswordScreen/>
//     </Provider>

//   )
// }

