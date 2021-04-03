import React, { useEffect, useState } from 'react';
import { HouseList, IconButton, Input, Loader, Title } from '../../components';
import { listHouses } from '../../services/calls';
import { useHousesStore } from '../../stores/houses';
import {
  ScreenContainer,
  TitleContainer,
  TopContainer,
  ContentContainer,
} from './styles';

export const HomeScreen = () => {
  const { housesList, setHouseList } = useHousesStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await listHouses();
      setHouseList(result?.properties || []);
      setLoading(false);
    })();
  }, [setHouseList]);

  return (
    <ScreenContainer>
      <HouseList data={housesList} loading={loading}>
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
