import styled from 'styled-components';

// Containers
export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};
`;

// Texts
export const Title = styled.h1`
  font-size: 30px;
`;
