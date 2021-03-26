import React from 'react';
import { IconButton, Input, Title } from '../../components';
import { ScreenContainer, TitleContainer, TopContainer } from './styles';

export const HomeScreen = () => {
  return (
    <ScreenContainer>
      <TopContainer>
        <TitleContainer>
          <Title>Find your new property here</Title>
        </TitleContainer>
        <IconButton iconName="filter" />
      </TopContainer>
      <Input label="Location" placeholder="Type your address" />
    </ScreenContainer>
  );
};
