import React, { useState } from 'react';
import { Linking } from 'react-native';
import { FAB } from 'react-native-paper';
import Colors from '../../../../utils/Colors';

export const FloatButton = () => {
  const [state, setState] = useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  return (
    <FAB.Group
      open={open}
      icon={open ? 'send' : 'square-edit-outline'}
      color='#fff'
      fabStyle={{
        backgroundColor: Colors.red,
        bottom: 10,
      }}
      actions={[
        {
          icon: 'phone',
          onPress: () => Linking.openURL('tel:0967781273'),
        },
        {
          icon: 'chat-processing',
          onPress: () => Linking.openURL('https://zalo.me/0967781273'),
        },
        {
          icon: 'facebook-messenger',
          onPress: () =>
            Linking.openURL(
              'https://www.messenger.com/t/codingwithvudang',
            ),
        },
      ]}
      onStateChange={onStateChange}
      onPress={() => {
        if (open) {
          // do something if the speed dial is open
        }
      }}
    />
  );
};
