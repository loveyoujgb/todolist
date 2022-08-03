import styled from "styled-components";

function TodoList(props) {
  return (
    <div>
      <Layout>{props.children}</Layout>
    </div>
  );
}

export default TodoList;

const Layout = styled.div`
  background: linear-gradient(45deg, rgb(97, 241, 252), rgb(251, 141, 255));
  box-shadow: 3px 3px 5px 0px #be34e0;
  max-width: 1200px;
  min-width: 800px;
  min-height: 800px;
  border-radius: 10px;
  padding: 10px;
  margin: auto;
`;
