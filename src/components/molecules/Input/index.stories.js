import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import styled from 'styled-components/native';
import { Input } from '.';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;

const stories = storiesOf('Input', module);

stories
  .addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>)
  .add('Default', () => {
    const label = text('Placeholder', 'Type some text');
    const placeholder = text('Label', 'Input label');
    return <Input label={label} placeholder={placeholder} />;
  });
