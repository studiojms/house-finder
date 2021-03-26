import { Dimensions, PixelRatio } from 'react-native';

const { height, width } = Dimensions.get('window');

const wp = widthPercent => {
  return PixelRatio.roundToNearestPixel(
    (width * parseFloat(widthPercent)) / 100,
  );
};

const hp = heightPercent => {
  return PixelRatio.roundToNearestPixel(
    (height * parseFloat(heightPercent)) / 100,
  );
};

const BASE_WIDTH = 375;

const px = pxValue => {
  const widthPercent = (pxValue / BASE_WIDTH) * 100;

  return PixelRatio.roundToNearestPixel((width * widthPercent) / 100);
};

export const metrics = {
  wp,
  hp,
  px,
};
