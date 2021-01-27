import styled from 'styled-components';
import logo from '../../../assets/home/logo.png';

export const Logo = styled.img.attrs({
  src: logo,
})`
  width: 150px;
  height: 100px;
  margin: 10px;
  align-self: center;
`;

export const Marked = styled.a`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;
