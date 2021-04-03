import styled from 'styled-components/native';

export const LoaderContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: ${({ theme }) => theme.metrics.px(48)}px;
`;

export const LoaderIndicator = styled.ActivityIndicator`
  margin-bottom: ${({ theme }) => theme.metrics.px(12)}px;
`;
