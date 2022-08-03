import styled from "styled-components";

const Header = () => {
  return <HeaderTitle>My Todo List</HeaderTitle>;
};

export default Header;

const HeaderTitle = styled.h1`
  text-align: center;
  color: white;
  text-shadow: 3px 2px 2px #b822f3;
  padding-top: 50px;
`;
