import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
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
  checkIsHouseFavorite,
  saveHouseAsFavorite,
  removeHouseAsFavorite,
} from '../../services/db';
import { useHousesStore } from '../../stores/houses';
import {
  BottomScreenContainer,
  FeaturesContainer,
  ImageBackground,
  ScreenContainer,
} from './styles';

export const HouseDetailScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState(false);
  const [details, setDetails] = useState();
  const { selectedHouse } = useHousesStore();

  const callGetHouseDetail = useCallback(async () => {
    const result = await getHouseDetail(selectedHouse.property_id);
    setDetails(result.properties[0] ? result.properties[0] : null);
    setLoading(false);
  }, [selectedHouse.property_id]);

  const checkIfHouseIsFavorite = useCallback(async () => {
    const isFavorite = await checkIsHouseFavorite(selectedHouse.property_id);
    setFavorite(isFavorite);
  }, [selectedHouse.property_id]);

  const saveAsFavorite = async () => {
    if (favorite) {
      await removeHouseAsFavorite(selectedHouse.property_id);
      Alert.alert('Property successfully removed as favorite');
    } else {
      await saveHouseAsFavorite(selectedHouse.property_id);
      Alert.alert('Property successfully saved as favorite');
    }
    setFavorite(!favorite);
  };

  useEffect(() => {
    callGetHouseDetail();
    checkIfHouseIsFavorite();
  }, [callGetHouseDetail, checkIfHouseIsFavorite]);

  const image = selectedHouse.photos[0].href;

  const onArrowBackClick = () => {
    navigation.goBack();
  };

  return (
    <ScreenContainer>
      <ImageBackground source={{ uri: image }}>
        <IconButton
          iconName="chevron-back"
          transparent
          onPress={onArrowBackClick}
        />
        <IconButton
          iconName={favorite ? 'star' : 'star-outline'}
          transparent
          onPress={saveAsFavorite}
          fill={favorite}
        />
      </ImageBackground>
      <BottomScreenContainer>
        {loading ? (
          <Loader />
        ) : (
          <>
            <DetailTitle>{details.address.line}</DetailTitle>
            <DetailSubtitle>
              US$ {Number(details.community?.price_max || 0).toFixed(2)}/mo
            </DetailSubtitle>
            <DetailText>{`${details.address?.neighborhood_name} - ${details.address?.state}`}</DetailText>

            <DetailSectionTitle mt={24} mb={12}>
              Details
            </DetailSectionTitle>

            <FeaturesContainer>
              <HouseFeatureCard
                iconLib="material"
                iconName="arrow-collapse-all"
                featureText={`${details.lot_size?.size || ''} ${
                  details.lot_size?.units || ''
                }`}
              />
              <HouseFeatureCard
                iconLib="material"
                iconName="bed-king-outline"
                featureText={`${details.community?.beds_min || ''} - ${
                  details.community?.beds_max || ''
                } beds`}
              />
              <HouseFeatureCard
                iconLib="fontawesome"
                iconName="bath"
                featureText={`${details.community?.baths_min || ''} - ${
                  details.community?.baths_max || ''
                }`}
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
