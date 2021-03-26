import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import styled from 'styled-components/native';
import { IconButton } from '.';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;

const stories = storiesOf('IconButton', module);

stories
  .addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>)
  .add('Default', () => {
    const value = text('Icon', 'filter');
    return <IconButton iconName={value} />;
  })
  .add('Transparent', () => {
    const value = text('Icon', 'filter');
    return <IconButton iconName={value} transparent />;
  });
