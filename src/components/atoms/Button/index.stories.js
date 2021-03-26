import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import styled from 'styled-components/native';
import { Button } from '.';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  padding: ${({ theme }) => theme.metrics.px(24)}px;
`;

const stories = storiesOf('Button', module);

stories
  .addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>)
  .add('Button', () => {
    const value = text('TextButton', 'Button Example');
    return <Button text={value} />;
  });
