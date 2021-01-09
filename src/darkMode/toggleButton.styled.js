// Toggle.styled.js
import styled from 'styled-components';

const ToggleContainer = styled.button`
  background: ${({ lightTheme }) =>
    lightTheme ? 'linear-gradient(#39598A, #79D7ED)' : 'linear-gradient(#091236, #1E215D)'};
  border: 2px solid ${({ lightTheme }) => (lightTheme ? '#428596' : '#6B8096')};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 6.6rem;
  height: 3.3rem;

  svg {
    height: auto;
    width: 2.1rem;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(0)' : 'translateY(100px)')};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => (lightTheme ? 'translateY(-100px)' : 'translateY(0)')};
    }
  }
`;

export default ToggleContainer;
