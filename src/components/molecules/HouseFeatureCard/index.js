import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';

import { DetailText } from '../../atoms';
import { FeatureCardContainer } from './styles';

export const HouseFeatureCard = ({ iconName, featureText, iconLib }) => {
  return (
    <FeatureCardContainer>
      {iconLib === 'fontawesome' && (
        <IconFontAwesome name={iconName} color="white" size={36} />
      )}
      {iconLib === 'material' && (
        <Icon name={iconName} color="white" size={36} />
      )}
      <DetailText>{featureText}</DetailText>
    </FeatureCardContainer>
  );
};
