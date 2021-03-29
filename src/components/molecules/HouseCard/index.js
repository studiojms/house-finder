import React from 'react';
import { CardDescription, CardHighlightText, CardTitle } from '../../atoms';
import {
  CardContainer,
  CardImage,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

export const HouseCard = ({ imgSource, title, description, price }) => {
  // const formattedPrice = new Intl.NumberFormat('en-US', {
  //   style: 'currency',
  //   currency: 'USD',
  // });
  return (
    <CardContainer>
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
