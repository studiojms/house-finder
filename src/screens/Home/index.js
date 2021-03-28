import React from 'react';
import { HouseCard, IconButton, Input, Title } from '../../components';
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

      <HouseCard
        imgSource={
          'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        }
      />
    </ScreenContainer>
  );
};
