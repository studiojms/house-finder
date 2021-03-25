import React from 'react';
import {SectionImage, SectionView} from './styles';
import Logo from '../../assets/img/Logo.png';
import {StatusBar} from 'react-native';

function SplashScreen() {
  return (
    <SectionView>
      <StatusBar translucent backgroundColor="transparent" />
      <SectionImage source={Logo} resizeMode="contain" />
    </SectionView>
  );
}

export default SplashScreen;
