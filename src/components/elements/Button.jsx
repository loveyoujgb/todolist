import styled from "styled-components";

const Button = ({ size, children, onClick }) => {
  return (
    <ButtonStyle onClick={onClick} size={size}>
      {children}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.button`
  font-weight: bold;
  color: #7c009b;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: transparent;
  width: ${({ size }) => `${size}px`};
  height: 35px;
  margin: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 3px 0px #7c009b;
  &:hover {
    color: white;
    border: 1px solid white;
    box-shadow: 0px 0px 3px 0px white;
  }
`;
