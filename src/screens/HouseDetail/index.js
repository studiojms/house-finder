import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import {
  DetailSectionTitle,
  DetailSubtitle,
  DetailText,
  DetailTitle,
  IconButton,
  Loader,
  HouseFeatureCard,
} from '../../components';
import { getHouseDetail } from '../../services/calls';
import {
  BottomScreenContainer,
  FeaturesContainer,
  ImageBackground,
  ScreenContainer,
} from './styles';

export const HouseDetail = ({ route }) => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();
  const { selectedHouse } = route.params;

  const navigator = useNavigation();

  const callGetHouseDetail = useCallback(async () => {
    const result = await getHouseDetail(selectedHouse.property_id);
    setDetails(result.properties[0] ? result.properties[0] : null);
    setLoading(false);
  }, [selectedHouse.property_id]);

  useEffect(() => {
    callGetHouseDetail();
  }, [callGetHouseDetail]);

  const image = selectedHouse.photos[0].href;
  // console.log('img', image);

  const onArrowBackClick = () => {
    navigator.goBack();
  };

  return (
    <ScreenContainer>
      <ImageBackground source={{ uri: image }}>
        <IconButton
          iconName="chevron-back"
          transparent
          onPress={onArrowBackClick}
        />
        <IconButton iconName="star-outline" transparent />
      </ImageBackground>
      <BottomScreenContainer>
        {loading ? (
          <Loader />
        ) : (
          <>
            <DetailTitle>{details.address.line}</DetailTitle>
            <DetailSubtitle>
              US$ {Number(details.community.price_max).toFixed(2)}/mo
            </DetailSubtitle>
            <DetailText>{`${details.address.neighborhood_name} - ${details.address.state}`}</DetailText>

            <DetailSectionTitle mt={24} mb={12}>
              Details
            </DetailSectionTitle>

            <FeaturesContainer>
              <HouseFeatureCard
                iconLib="material"
                iconName="arrow-collapse-all"
                featureText={`${details.lot_size.size} ${details.lot_size.units}`}
              />
              <HouseFeatureCard
                iconLib="material"
                iconName="bed-king-outline"
                featureText={`${details.community.beds_min} - ${details.community.beds_max} beds`}
              />
              <HouseFeatureCard
                iconLib="fontawesome"
                iconName="bath"
                featureText={`${details.community.baths_min} - ${details.community.baths_max}`}
              />
            </FeaturesContainer>

            <DetailSectionTitle mt={24} mb={12}>
              Property Benefits
            </DetailSectionTitle>
            {details.features[1].text.map(item => (
              <DetailText mb={2} key={item}>
                - {item}
              </DetailText>
            ))}
          </>
        )}
      </BottomScreenContainer>
    </ScreenContainer>
  );
};

// 1:04:00 -> aula 04
