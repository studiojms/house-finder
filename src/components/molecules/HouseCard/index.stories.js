import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import styled from 'styled-components/native';
import { HouseCard } from '.';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

const stories = storiesOf('HouseCard', module);

stories
  .addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>)
  .add('Default', () => {
    const imgSource = text(
      'ImgSource',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80',
    );
    const title = text('Title', 'Good House');
    const description = text('Description', 'A very good house');
    const price = number('Price', 200);
    return (
      <HouseCard
        imgSource={imgSource}
        title={title}
        description={description}
        price={price}
      />
    );
  });
