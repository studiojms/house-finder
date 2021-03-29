import React, { useEffect, useState } from 'react';
import { HouseList, IconButton, Input, Title } from '../../components';
import { listHouses } from '../../services/calls';
import {
  ScreenContainer,
  TitleContainer,
  TopContainer,
  ContentContainer,
} from './styles';

export const HomeScreen = () => {
  const [houseListData, setHouseListData] = useState([]);

  const callListHouses = async () => {
    const result = await listHouses();
    setHouseListData(result?.properties || []);
  };

  useEffect(() => {
    callListHouses();
  }, []);

  return (
    <ScreenContainer>
      <HouseList data={houseListData}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Find your new property here</Title>
            </TitleContainer>
            <IconButton iconName="filter" />
          </TopContainer>
          <Input label="Location" placeholder="Type your address" />
        </ContentContainer>
      </HouseList>
    </ScreenContainer>
  );
};
