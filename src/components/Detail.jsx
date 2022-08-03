import styled from "styled-components";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "./elements/Button";

const Detail = () => {
  const navigate = useNavigate();
  const todolists = useSelector((state) => state.todos);
  const param = useParams();
  const DetailTodo = todolists.find((todolist) => todolist.id === parseInt(param.id));

  return (
    <Layout>
      <DetailBox key={DetailTodo.id}>
        <UnderLine>
          <span>ID : {DetailTodo.id}</span>
          <Button
            size="80"
            onClick={() => {
              navigate(`/`);
            }}
          >
            이전으로
          </Button>
        </UnderLine>
        <h2>{DetailTodo.title}</h2>
        <span>{DetailTodo.content}</span>
      </DetailBox>
    </Layout>
  );
};

export default Detail;
const Layout = styled.div`
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(45deg, rgb(97, 241, 252), rgb(251, 141, 255));
  width: 500px;
  min-height: 300px;
  box-shadow: 3px 3px 5px 0px #be34e0;
`;
const DetailBox = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;
const UnderLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
