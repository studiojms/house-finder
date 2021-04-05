import React from 'react';

import { IconButton, Title } from '../../atoms';
import {
  BottomScreenContainer,
  HeaderContainer,
  ModalBackground,
  ModalContainer,
} from './styles';

export const Modal = ({ title, visible, onClose, children }) => {
  return (
    visible && (
      <ModalContainer transparent visible={visible} onRequestClose={onClose}>
        <ModalBackground>
          <BottomScreenContainer>
            <HeaderContainer>
              <Title>{title}</Title>
              <IconButton iconName="close" onPress={onClose} />
            </HeaderContainer>
            {children}
          </BottomScreenContainer>
        </ModalBackground>
      </ModalContainer>
    )
  );
};
