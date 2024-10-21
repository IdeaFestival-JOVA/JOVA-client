import styled from "styled-components";
import { useState } from "react";
import MiniNotion from "./MiniNotion";

const Text = styled.h1`
  font-family: "Pretendard-Regular", sans-serif;
  margin: 0;
  font-size: 44px;
`;

const Wrapper = styled.div`
  top: 100px;
  position: absolute;
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const DividSpace = styled.div`
  width: 20px;
  height: 2px;
  background-color: gray;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const TextP = styled.p`
  font-family: "Pretendard-Regular", sans-serif;
  margin: 0;
`;

const MiniNotionWrapper = styled.div`
  width: 1103px;
  height: 441.7px;
  align-items: center;
`;

const ListWrapper = styled.div`
  width: 1103px;
  height: 23px;
  display: flex;
  align-items: center;
  border-bottom: 4px solid gray;
`;

function NotionBody() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Wrapper>
        <Text>공지사항</Text>
        <DividSpace />
        <TextP>전체 {count}건</TextP>
        <ListWrapper>
          <TextP style={{ marginLeft: "65px" }}>No</TextP>
          <TextP style={{ marginLeft: "108px" }}>작성자</TextP>
          <TextP style={{ marginLeft: "353px" }}>제목</TextP>
          <TextP style={{ marginLeft: "346px" }}>등록일</TextP>
        </ListWrapper>
        <MiniNotionWrapper>
          <MiniNotion />
          <MiniNotion />
          <MiniNotion />
          <MiniNotion />
          <MiniNotion />
          <MiniNotion />
          <MiniNotion />
          <MiniNotion />
          <MiniNotion />
          <MiniNotion />
        </MiniNotionWrapper>
      </Wrapper>
    </>
  );
}

export default NotionBody;
