import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { IconButtonContainer } from './styles';

export const IconButton = ({ transparent, iconName, onPress }) => {
  return (
    <IconButtonContainer transparent={transparent} onPress={onPress}>
      <Icon name={iconName} color="white" size={20} />
    </IconButtonContainer>
  );
};
