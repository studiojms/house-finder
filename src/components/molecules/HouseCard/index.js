import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { useHousesStore } from '../../../stores/houses';
import { CardDescription, CardHighlightText, CardTitle } from '../../atoms';
import {
  CardContainer,
  CardImage,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

export const HouseCard = ({ imgSource, title, description, price, item }) => {
  const navigator = useNavigation();
  const { setSelectedHouse } = useHousesStore();

  // const formattedPrice = new Intl.NumberFormat('en-US', {
  //   style: 'currency',
  //   currency: 'USD',
  // });

  const onItemContainerClick = () => {
    setSelectedHouse(item);
    navigator.navigate('HouseDetail');
  };

  return (
    <CardContainer onPress={onItemContainerClick}>
      <CardImage source={{ uri: imgSource }} />
      <TextContainer>
        <TextContainerLeft>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </TextContainerLeft>
        <TextContainerRight>
          <CardHighlightText>US$ {Number(price).toFixed(2)}</CardHighlightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
