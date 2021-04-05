import React from 'react';
import { HouseCard } from '../../molecules';

import { HouseListContainer } from './styles';

export const HouseList = ({ data, onEndReached, children }) => {
  return (
    <HouseListContainer
      data={data}
      onEndReached={onEndReached}
      renderItem={({ item }) => (
        <HouseCard
          item={item}
          title={item?.address?.line || ''}
          description={`${item?.address?.neighborhood_name || ''} - ${
            item?.address?.state || ''
          }`}
          imgSource={item?.photos?.[0]?.href}
          price={item.community?.price_max || 0}
        />
      )}
      keyExtractor={item => item.property_id}
      ListHeaderComponent={children}
    />
  );
};

export default HouseList;
