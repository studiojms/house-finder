import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import styled from 'styled-components/native';
import {
  CardDescription,
  CardHighlightText,
  CardTitle,
  DetailSectionTitle,
  DetailSubtitle,
  DetailText,
  DetailTitle,
  InputLabel,
  Title,
} from '.';

const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;

const stories = storiesOf('Text', module);

stories
  .addDecorator(getStory => <Wrapper>{getStory()}</Wrapper>)
  .add('Title', () => {
    const value = text('Text', 'Title Example');
    return <Title>{value}</Title>;
  })
  .add('CardTitle', () => {
    const value = text('Text', 'CardTitle Example');
    return <CardTitle>{value}</CardTitle>;
  })
  .add('CardDescription', () => {
    const value = text('Text', 'CardDescription Example');
    return <CardDescription>{value}</CardDescription>;
  })
  .add('CardHighlightText', () => {
    const value = text('Text', 'CardHighlightText Example');
    return <CardHighlightText>{value}</CardHighlightText>;
  })
  .add('DetailTitle', () => {
    const value = text('Text', 'DetailTitle Example');
    return <DetailTitle>{value}</DetailTitle>;
  })
  .add('DetailSectionTitle', () => {
    const value = text('Text', 'DetailSectionTitle Example');
    return <DetailSectionTitle>{value}</DetailSectionTitle>;
  })
  .add('DetailSubtitle', () => {
    const value = text('Text', 'DetailSubtitle Example');
    return <DetailSubtitle>{value}</DetailSubtitle>;
  })
  .add('DetailText', () => {
    const value = text('Text', 'DetailText Example');
    return <DetailText>{value}</DetailText>;
  })
  .add('InputLabel', () => {
    const value = text('Text', 'InputLabel Example');
    return <InputLabel>{value}</InputLabel>;
  });
