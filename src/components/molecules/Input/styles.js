import styled from 'styled-components/native';

export const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

export const InputText = styled.TextInput`
  height: ${({ theme }) => theme.metrics.px(48)}px;
  border-radius: ${({ theme }) => theme.metrics.px(12)}px;
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
  padding-left: ${({ theme }) => theme.metrics.px(12)}px;
  font-size: ${({ theme }) => theme.metrics.px(16)}px;
  color: #fff;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;
