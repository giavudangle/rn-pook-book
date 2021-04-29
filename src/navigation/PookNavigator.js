import React from 'react';

/**
 * Navigation Core
 * 1. Stack
 * 2. Drawer
 * 3. Bottom Tab
 */

import { createStackNavigator, CardStyleInterpolators, TransitionPresets }
  from '@react-navigation/stack'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

/**
 * Icons
 */

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

/**
 * Global Colors Defined
 */
import Colors from '../utils/Colors';

/**
 * Custom Drawer
 */
import CustomDrawer from './CustomDrawer'

import CustomText from '../components/UI/CustomText'
// Do it later

//  Auth Screens

import { AuthScreen } from '../screens/AuthScreen';
import { IntroScreen } from '../screens/IntroScreen';
import { SignUpScreen } from '../screens/SignupScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { TouchIdScreen } from '../screens/TouchIdScreen';
import {ForgetPasswordScreen} from '../screens/ForgetPasswordScreen'
import {FinishResetPasswordScreen} from '../screens/FinishResetPasswordScreen'
// Home Screens
import { HomeScreen } from '../screens/HomeScreen';
import { ContactScreen } from '../screens/ContactScreen';
//Product Screens
import { CartScreen } from '../screens/CartScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { FavoriteScreen } from '../screens/FavoriteScreen';
import { ProductScreen } from '../screens/ProductScreen';
// Order Screens
import { OrderScreen } from '../screens/OrderScreen';
import { PreOrderScreen } from '../screens/PreOrderScreen';
import { PaymentScreen } from '../screens/PaymentScreen';
import { AddCreditCardScreen } from '../screens/PaymentScreen';
import { FinishOrderScreen } from '../screens/FinishOrderScreen';
// Profile Screens
import { ProfileScreen } from '../screens/ProfileScreen';
import { EditProfileScreen } from '../screens/ProfileScreen';
// redux
import { useSelector } from 'react-redux';
import { ResetPasswordScreen } from '../screens/ResetPasswordScreen/ResetPasswordScreen';

/**
|--------------------------------------------------
| App Navigator
|--------------------------------------------------
*/

// Intro Stack
const IntroStack = createStackNavigator();
export const IntroStackScreen = () => (
  <IntroStack.Navigator>
    <IntroStack.Screen
      name='IntroScreen'
      component={IntroScreen}
      options={{ headerShown: false }}
    />
  </IntroStack.Navigator>
);

// Login Stack 
const LoginStack = createStackNavigator();
export const LoginStackScreen = () => (
  <LoginStack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      cardOverlayEnabled: true,
      ...TransitionPresets.ModalPresentationIOS
    }}
    mode='modal'
  >
    <LoginStack.Screen name='LoginScreen' component={LoginScreen} />
    <LoginStack.Screen name='ForgetPasswordScreen' component={ForgetPasswordScreen} />
  </LoginStack.Navigator>
);

// Auth Stack
const AuthStack = createStackNavigator();
export const AuthStackScreen = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name='AuthScreen' component={AuthScreen} />
    <AuthStack.Screen name='LoginScreen' component={LoginStackScreen} />
    <AuthStack.Screen name='SignupScreen' component={SignUpScreen} />
    <AuthStack.Screen
      name='FinishResetPasswordScreen'
      component={FinishResetPasswordScreen}
    />
  </AuthStack.Navigator>
);

// Favorite Stack
const FavoriteStack = createStackNavigator();
export const FavoriteStackScreen = () => (
  <FavoriteStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
    }}
  >
    <FavoriteStack.Screen name='FavoriteScreen' component={FavoriteScreen} />
    <FavoriteStack.Screen name='Detail' component={DetailScreen} />
  </FavoriteStack.Navigator>
);

// Payment Stack
const PaymentStack = createStackNavigator();
export const PaymentStackScreen = () => (
  <PaymentStack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      cardOverlayEnabled: true,
      ...TransitionPresets.ModalPresentationIOS,
    }}
  >
    <PaymentStack.Screen name='PaymentScreen' component={PaymentScreen} />
    <PaymentStack.Screen
      name='AddCreditCardScreen'
      component={AddCreditCardScreen}
    />
  </PaymentStack.Navigator>
);

// Cart Stack
const CartStack = createStackNavigator();
export const CartStackScreen = () => (
  <CartStack.Navigator screenOptions={{ headerShown: false }}>
    <CartStack.Screen name='CartScreen' component={CartScreen} />

    <CartStack.Screen name='PreOrderScreen' component={PreOrderScreen} />
    <CartStack.Screen name='Payment' component={PaymentStackScreen} />
    <CartStack.Screen
      name='AddCreditCardScreen'
      component={AddCreditCardScreen}
    />
  </CartStack.Navigator>
);

// ProductStack
const ProductStack = createStackNavigator();
export const ProductStackScreen = () => (
  <ProductStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
    }}
  >
    <ProductStack.Screen name='ProductScreen' component={ProductScreen} />
    <ProductStack.Screen name='DetailScreen' component={DetailScreen} />
    <ProductStack.Screen name='CartScreen' component={CartStackScreen} />
  </ProductStack.Navigator>
);

// Profile Stack
const ProfileStack = createStackNavigator();
export const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      cardOverlayEnabled: true,
      ...TransitionPresets.ModalPresentationIOS,
    }}
    mode='modal'
  >
    <ProfileStack.Screen name='Profile' component={ProfileScreen} />
    <ProfileStack.Screen name='ProfileEdit' component={EditProfileScreen} />
  </ProfileStack.Navigator>
);

// Home Stack
const HomeStack = createStackNavigator();
export const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
    }}
  >
    <HomeStack.Screen
      name='Home'
      component={HomeScreen}
    //animationEnabled: false , nằm trong option
    />
    <HomeStack.Screen name='Detail' component={DetailScreen} />
    <HomeStack.Screen name='Cart' component={CartStackScreen} />
    <HomeStack.Screen name='Product' component={ProductStackScreen} />
    <HomeStack.Screen name='FinishOrder' component={FinishOrderScreen} />
    <HomeStack.Screen name='ResetPassword' component={ResetPasswordScreen} />
  </HomeStack.Navigator>
);

// MaterialBottomTab
const Tab = createMaterialBottomTabNavigator();

export const TabScreen = () => {
  const carts = useSelector((state) => state.cart.cartItems);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          const color = focused ? Colors.lighter_green : Colors.grey;
          if (route.name === 'HomeTab') {
            iconName = 'home';
          } else if (route.name === 'Favorite') {
            iconName = 'hearto';
          } else if (route.name === 'Cart') {
            iconName = 'shoppingcart';
          }
          return <AntDesign name={iconName} size={23} color={color} />;
        },
      })}
      barStyle={{
        backgroundColor: Colors.light_grey,
        height: 50,
        justifyContent: 'center',
      }}
      activeColor={Colors.lighter_green}
      inactiveColor={Colors.grey}
    >
      <Tab.Screen
        name='HomeTab'
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Trang chủ',
        }}
      />
      <Tab.Screen
        name='Favorite'
        component={FavoriteStackScreen}
        options={() => ({
          tabBarLabel: 'Yêu thích',
        })}
      />
      <Tab.Screen
        name='Cart'
        component={CartStackScreen}
        options={() => ({
          tabBarLabel: 'Giỏ hàng',
          tabBarBadge: carts.items.length === 0 ? null : carts.items.length,
        })}
      />
    </Tab.Navigator>
  );
};

//Drawer Navigator
const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => {
  const user = useSelector((state) => state.auth.user);
  const drawers = [
    {
      name: 'HomeTab',
      screen: TabScreen,
      label: 'Trang Chủ',
      icon: 'home-outline',
    },
    {
      name: 'Order',
      screen: OrderScreen,
      label: 'Đơn Hàng',
      icon: 'receipt',
    },
    {
      name: 'Contact',
      screen: ContactScreen,
      label: 'Liên Hệ',
      icon: 'contacts',
    },
  ];

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      drawerContentOptions={{
        activeTintColor: Colors.grey,
        itemStyle: { marginVertical: 3 },
      }}
    >
      {drawers.map(({ name, icon, label, screen }) => (
        <Drawer.Screen
          key={name}
          name={name}
          component={screen}
          options={() => ({
            title: ({ focused }) => (
              <CustomText
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  color: focused ? Colors.lighter_green : Colors.grey,
                  fontFamily: 'Roboto-Medium',
                }}
              >
                {label}
              </CustomText>
            ),
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={icon}
                size={23}
                color={focused ? Colors.lighter_green : Colors.grey}
              />
            ),
          })}
        />
      ))}

      
      {Object.keys(user).length === 0 ? ( // Use this for check current user has been logged in ?
        // if has not user => display login screen tab
        // else => display touchid & profile screen
        <Drawer.Screen
          name='SignUp'
          component={AuthStackScreen}
          options={() => ({
            title: ({ focused }) => (
              <CustomText
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  color: focused ? Colors.lighter_green : Colors.grey,
                  fontFamily: 'Roboto-Medium',
                }}
              >
                Đăng nhập
              </CustomText>
            ),
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name='login'
                size={23}
                color={focused ? Colors.lighter_green : Colors.grey}
              />
            ),
          })}
        />
      ) : (
        <>
          <Drawer.Screen
            name='TouchId'
            component={TouchIdScreen}
            options={() => ({
              title: ({ focused }) => (
                <CustomText
                  style={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: focused ? Colors.lighter_green : Colors.grey,
                    fontFamily: 'Roboto-Medium',
                  }}
                >
                  Touch/Face ID
                </CustomText>
              ),
              drawerIcon: ({ focused }) => (
                <MaterialCommunityIcons
                  name='security'
                  size={25}
                  color={focused ? Colors.lighter_green : Colors.grey}
                />
              ),
            })}
          />
          <Drawer.Screen
            name='Profile'
            component={ProfileStackScreen}
            options={() => ({
              title: ({ focused }) => (
                <CustomText
                  style={{
                    fontSize: 14,
                    fontWeight: '500',
                    color: focused ? Colors.lighter_green : Colors.grey,
                    fontFamily: 'Roboto-Medium',
                  }}
                >
                  Thông Tin Cá Nhân
                </CustomText>
              ),
              drawerIcon: ({ focused }) => (
                <MaterialCommunityIcons
                  name='face-profile'
                  size={25}
                  color={focused ? Colors.lighter_green : Colors.grey}
                />
              ),
            })}
          />
        </>
      )}
    </Drawer.Navigator>
  );
};
