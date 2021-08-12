import styled from 'styled-components';

export const Header = styled.h2`
  font-family: Lobster, open-sans;
  font-size: 2rem;
  padding: 8px 0;
  text-align: center;
  width: ${({ width }) => width || 'auto'};
`;
