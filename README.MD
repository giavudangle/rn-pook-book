 
## PookBook Mobile App ( powered by Coding with Vudang ) 🚀

### <img width="500px" height="500px" src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/151284066_207254161142817_5812038792384707893_n.png?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=KAVSahpcm04AX_lEqGb&_nc_ht=scontent.fsgn2-1.fna&oh=f8f95fca5dcb99c3592f41127391cf3c&oe=609E2BB1" >
[![](https://img.shields.io/badge/Facebook-CodingwithVudang-blue)](https://www.facebook.com/codingwithvudang)
[![](https://img.shields.io/badge/Gmail-codingwithvudang@gmail.com-red)](mailto:codingwithvudang@gmail@gmail.com)

## 🚀 Get Started

```bash
# install expo cli
npm install -g expo-cli
```
``` bash
# install dependencies
npm install
```
Or use `yarn`
``` bash
yarn install
```
``` bash

# run project
expo start
```
``` bash
Change the API in config.js to the server that you're running. 
```
## 🚀 Functional Requirements
- Authentication
 - Allow any customer can register to become a member.
 - Allow user request to get a new password ( forgot password )
 - Auto sends email when customers register, order successfully, or request to get a new password.
 - Users (both customers and the admin ) will be logged out if inactive for 20 minutes. 
 - Allow customers and admins to log in as FaceID, TouchID
- Profile 
 - Allow customers to update their information.
 - Allow customers to upload their profile picture.
- Product
 - Show a listing of available products 
 - Products are to be displayed in ascending alphabetical order by title (default).
 - Each product will list the following from top to bottom
 - Allow user view product detail, add to cart or wish lish if they want.
 - Product detail will show title, image, description , author and price ...
- Shopping Cart
 - Anyone can add one or more products to the shopping cart.
- Wish List
 - Anyone can add one or more products to the wishlist.
- Checkout
 - Checkout is only available to logged-in customers. A user that is not logged in as a customer is given a chance to log in
 - Member customers may pick a promotion code to apply (in progress ).
 - Only one promotion code may be used per purchase (in progress ).
 - The promotion is a fixed value discount that is to be applied to an entire order (in progress ).
 - The discount is specified by the admin at the time of the promotion’s creation or most recent update/edit (in progress ).
- Payment
 - Users can choose two payment methods between COD (Cash On Delivery ) and Online Payment ( Mastercard, Visa, American Express ) via Stripe.
 - Log / record / tracking the transaction.
 - Push notification when the transaction successful.
- Tracking
 - Users can track their orders
 - Orders will be displayed by list
 - Each order contain ID,Date,List products and Order Status
- Contact
 - Users can intertract with Pook Book via Phone Call,Instagram,Facebook Messenger.
 - Users can follow PookBook via Facebook, Youtube, Skype.



## ✈️ Contributors
- VuDang
- AnhPhan
- KhangTran

## 🚀 App Features
- Authentication (Signup, Login, Reset Password)( JWT)
- Login with Touch/Face ID.
- User Profile (Upload, Edit Profile Picture, Address).
- Lottie Animation Icon (https://lottiefiles.com/)
- Header Animation.
- Add Items to Cart, Wish List.
- Create an order.
- Tracking orders
- Payment Methods:  COD, CREDIT CARD .
- Push notification to user whenever order status, user information change. 
- Send email for reseting password as well as submit new order information.
- Share Products to Social Media.
- Support from store : Messenger, Call, Message
- Review, Comment, Rating Product (In Processing)


## 🚀 Technical details
- React Native
- Expo 
- React Native Paper
- Animated, On Scroll Event Animation.
- Header Animation: Animated, React Animatable.
- Form: Redux form validation.
- Icon: Lottie, RN Vector Icons.
- Payment: React native credit card, Stripe server for card validation checking.
- Loader: Skeleton loader, Linear gradient.
- Reducer: Redux. 
- Image Picker: Expo image picker.
- Deep Link: Expo Linking.
- Touch/Face ID: react native touch id, react native keychain, expo authentication 





