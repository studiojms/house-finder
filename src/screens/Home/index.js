import React, { useEffect, useState } from 'react';
import {
  DetailText,
  HouseList,
  IconButton,
  Input,
  Loader,
  Title,
} from '../../components';
import { listHouses } from '../../services/calls';
import {
  ScreenContainer,
  TitleContainer,
  TopContainer,
  ContentContainer,
} from './styles';

export const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [houseListData, setHouseListData] = useState([]);

  const callListHouses = async () => {
    const result = await listHouses();
    setHouseListData(result?.properties || []);
    setLoading(false);
  };

  useEffect(() => {
    callListHouses();
  }, []);

  return (
    <ScreenContainer>
      <HouseList data={houseListData} loading={loading}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Find your new property here</Title>
            </TitleContainer>
            <IconButton iconName="filter" />
          </TopContainer>
          <Input label="Location" placeholder="Type your address" />

          {loading && <Loader />}
        </ContentContainer>
      </HouseList>
    </ScreenContainer>
  );
};
