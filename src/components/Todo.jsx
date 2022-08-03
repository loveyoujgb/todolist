import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "./elements/Button";
import { deleteTodo, updateTodo } from "../redux/modules/todos";

const Todo = ({ todolist }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <TodoBox>
      <TodoTextWrapDiv>
        <h2>{todolist.title}</h2>
        <span>{todolist.content}</span>
      </TodoTextWrapDiv>
      <TodoButtonWrapDiv>
        <Button
          size="90"
          onClick={() => {
            navigate(`/${todolist.id}`);
          }}
        >
          상세보기
        </Button>
        <Button size="90" onClick={() => dispatch(updateTodo(todolist.id))}>
          {todolist.done === false ? "완료" : "취소"}
        </Button>
        <Button size="90" onClick={() => dispatch(deleteTodo(todolist.id))}>
          삭제하기
        </Button>
      </TodoButtonWrapDiv>
    </TodoBox>
  );
};

export default Todo;

const TodoBox = styled.div`
  max-width: 330px;
  margin: 10px;
  padding: 10px;
  border: 1px solid transparent;
  box-shadow: 0px 0px 3px 0px #7c009b;
  border-radius: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TodoButtonWrapDiv = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
`;
const TodoTextWrapDiv = styled.div`
  color: #7c009b;
  padding: 20px;
`;
