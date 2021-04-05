import React, { useState } from 'react';
import { useHousesHook } from '../../../hooks/houseHooks';
import { Button, InputSectionLabel } from '../../atoms';
import { Modal, Input } from '../../molecules';
import { FilterContainer, InputRowContainer, InputRowItem } from './styles';

export const FilterModal = ({ visible, onClose }) => {
  const { onFilterHouseList } = useHousesHook();
  const [sizeMin, setSizeMin] = useState();
  const [sizeMax, setSizeMax] = useState();
  const [priceMin, setPriceMin] = useState();
  const [priceMax, setPriceMax] = useState();
  const [bedsMin, setBedsMin] = useState();
  const [bathsMin, setBathsMin] = useState();

  const onClickApply = () => {
    onFilterHouseList({
      sizeMin,
      sizeMax,
      priceMin,
      priceMax,
      bedsMin,
      bathsMin,
    });
    onClose();
  };

  return (
    <Modal visible={visible} onClose={onClose} title="Filter">
      <FilterContainer>
        <InputSectionLabel mt={12} mb={6}>
          Size
        </InputSectionLabel>
        <InputRowContainer>
          <InputRowItem>
            <Input
              label="Min"
              keyboardType="numeric"
              placeholder="Ex: 77"
              value={sizeMin}
              onChangeText={setSizeMin}
            />
          </InputRowItem>
          <InputRowItem>
            <Input
              label="Max"
              keyboardType="numeric"
              placeholder="Ex: 200"
              value={sizeMax}
              onChangeText={setSizeMax}
            />
          </InputRowItem>
        </InputRowContainer>

        <InputSectionLabel mt={12} mb={6}>
          Price
        </InputSectionLabel>
        <InputRowContainer>
          <InputRowItem>
            <Input
              label="Min"
              keyboardType="numeric"
              placeholder="Ex: 500"
              value={priceMin}
              onChangeText={setPriceMin}
            />
          </InputRowItem>
          <InputRowItem>
            <Input
              label="Max"
              keyboardType="numeric"
              placeholder="Ex: 2000"
              value={priceMax}
              onChangeText={setPriceMax}
            />
          </InputRowItem>
        </InputRowContainer>

        <InputSectionLabel mt={12} mb={6}>
          Bedrooms
        </InputSectionLabel>
        <InputRowContainer>
          <InputRowItem>
            <Input
              label="Min"
              keyboardType="numeric"
              placeholder="Ex: 2"
              value={bedsMin}
              onChangeText={setBedsMin}
            />
          </InputRowItem>
        </InputRowContainer>

        <InputSectionLabel mt={12} mb={6}>
          Bathrooms
        </InputSectionLabel>
        <InputRowContainer>
          <InputRowItem>
            <Input
              label="Min"
              keyboardType="numeric"
              placeholder="Ex: 1"
              value={bathsMin}
              onChangeText={setBathsMin}
            />
          </InputRowItem>
        </InputRowContainer>
      </FilterContainer>
      <Button onPress={onClickApply} mt={24}>
        Apply
      </Button>
    </Modal>
  );
};
