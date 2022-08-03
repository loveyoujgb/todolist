import styled from "styled-components";
import React from "react";
import { useSelector } from "react-redux";

import Todo from "./Todo";

function List() {
  const todolists = useSelector((state) => state.todos);

  return (
    <div>
      <TextStyle>working</TextStyle>
      <TodoListWrap>
        {todolists.map((todolist) =>
          todolist.done === false ? (
            <div key={todolist.id}>
              <Todo todolist={todolist} />
            </div>
          ) : null
        )}
      </TodoListWrap>
      <TextStyle>done</TextStyle>
      <TodoListWrap>
        {todolists.map((todolist) =>
          todolist.done === true ? (
            <div key={todolist.id}>
              <Todo todolist={todolist} />
            </div>
          ) : null
        )}
      </TodoListWrap>
    </div>
  );
}

export default List;

const TextStyle = styled.h2`
  color: white;
  text-shadow: 3px 2px 2px #dc83ff;
  margin-left: 60px;
`;
const TodoListWrap = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  padding: 20px;
  margin: 20px;
`;
