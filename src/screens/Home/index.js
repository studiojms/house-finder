import React, { useEffect, useState } from 'react';
import {
  FilterModal,
  HouseList,
  IconButton,
  Input,
  Loader,
  Title,
} from '../../components';
import { useHousesHook } from '../../hooks/houseHooks';
import { useHousesStore } from '../../stores/houses';
import {
  ScreenContainer,
  TitleContainer,
  TopContainer,
  ContentContainer,
} from './styles';

export const HomeScreen = () => {
  const { onGetHouses } = useHousesHook();
  const { housesList, loadingHouseList } = useHousesStore();
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  useEffect(() => {
    onGetHouses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScreenContainer>
      <HouseList
        data={housesList}
        loading={loadingHouseList}
        onEndReached={onGetHouses}>
        <ContentContainer>
          <TopContainer>
            <TitleContainer>
              <Title>Find your new property here</Title>
            </TitleContainer>
            <IconButton
              iconName="filter"
              onPress={() => setFilterModalVisible(true)}
            />
          </TopContainer>
          <Input label="Location" placeholder="Type your address" />

          {loadingHouseList && <Loader />}
        </ContentContainer>
      </HouseList>
      <FilterModal
        visible={filterModalVisible}
        onClose={() => setFilterModalVisible(false)}
      />
    </ScreenContainer>
  );
};

// TODO continue aula 5 -> 1:14:00
