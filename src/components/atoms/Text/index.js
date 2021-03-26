import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(28)}px;
  color: #fff;
  font-weight: bold;
`;

export const DetailTitle = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
  color: #fff;
  font-weight: bold;
`;

export const DetailSubtitle = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(18)}px;
  color: #fff;
`;

export const DetailText = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: #fff;
`;

export const DetailSectionTitle = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(20)}px;
  color: #fff;
  font-weight: bold;
`;

export const InputLabel = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: #fff;
  font-weight: bold;
`;

export const CardTitle = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(14)}px;
  color: #fff;
  font-weight: bold;
`;

export const CardDescription = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(10)}px;
  color: #fff;
`;

export const CardHighlightText = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: #fff;
  font-weight: 600;
`;

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(22)}px;
  color: #fff;
  font-weight: bold;
`;
