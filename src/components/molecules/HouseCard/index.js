import { useNavigation } from '@react-navigation/core';
import React from 'react';
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

  // const formattedPrice = new Intl.NumberFormat('en-US', {
  //   style: 'currency',
  //   currency: 'USD',
  // });

  const onItemContainerClick = () => {
    navigator.navigate('HouseDetail', {
      selectedHouse: item,
    });
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
