import React from 'react';
import { CardDescription, CardHighlightText, CardTitle } from '../../atoms';
import {
  CardContainer,
  CardImage,
  TextContainer,
  TextContainerLeft,
  TextContainerRight,
} from './styles';

export const HouseCard = ({ imgSource }) => {
  return (
    <CardContainer>
      <CardImage source={{ uri: imgSource }} />
      <TextContainer>
        <TextContainerLeft>
          <CardTitle>House for sale</CardTitle>
          <CardDescription>39, Test Street</CardDescription>
        </TextContainerLeft>
        <TextContainerRight>
          <CardHighlightText>US$ 200.000,00</CardHighlightText>
        </TextContainerRight>
      </TextContainer>
    </CardContainer>
  );
};
