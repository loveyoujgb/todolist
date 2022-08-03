import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/modules/todos";
import Button from "./elements/Button";

const Form = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    title: "",
    content: "",
  });

  const { title, content } = todo;

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      onClickCreateTodoListHandler();
    }
  };

  const onClickCreateTodoListHandler = () => {
    if (title === "") {
      return;
    }
    dispatch(createTodo(todo));
    setTodo({
      title: "",
      content: "",
    });
  };

  return (
    <FormWrapDiv>
      <InputWrap autoFocus type="text" name="title" value={title} onChange={onChangeHandler} onKeyPress={handleOnKeyPress}></InputWrap>
      <InputWrap type="text" name="content" value={content} onChange={onChangeHandler} onKeyPress={handleOnKeyPress}></InputWrap>
      <Button size="100" onClick={onClickCreateTodoListHandler}>
        추가하기
      </Button>
    </FormWrapDiv>
  );
};

export default Form;

const FormWrapDiv = styled.div`
  max-width: 1150px;
  margin: auto;
  color: #ffffff;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const InputWrap = styled.input`
  border: 1px solid transparent;
  border-radius: 10px;
  color: #7c009b;
  width: 300px;
  height: 35px;
  background-color: transparent;
  box-shadow: 0px 0px 3px 0px #7c009b;
  margin: 10px;
  padding-left: 10px;
  &:focus {
    outline: 1px solid white;
    box-shadow: 0px 0px 3px 0px white;
  }
`;
