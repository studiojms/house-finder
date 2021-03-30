import React, { useEffect } from 'react';
import { SectionImage, SectionView } from './styles';
import Logo from '../../assets/img/Logo.png';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/core';

function SplashScreen() {
  const navigator = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigator.navigate('Home');
    }, 2000);
  }, [navigator]);

  return (
    <SectionView>
      <StatusBar translucent backgroundColor="transparent" />
      <SectionImage source={Logo} resizeMode="contain" />
    </SectionView>
  );
}

export default SplashScreen;
