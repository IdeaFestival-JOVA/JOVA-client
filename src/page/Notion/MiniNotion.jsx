import styled from "styled-components";
import { useState } from "react";

const Body = styled.div`
  width: 1103px;
  height: 44.17px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid gray;
`;

const Text = styled.p`
  margin: 0;
  font-family: "Pretendard-Regular", sans-serif;
`;

function MiniNotion() {
  const [number, setNumber] = useState(0);
  const [userName, setUserName] = useState("JOVA");
  const [contents, setContents] = useState("내용");
  const [date, setDate] = useState("20xx.xx.xx");

  return (
    <>
      <Body>
        <Text style={{ marginLeft: "70px" }}>{number}</Text>
        <Text style={{ marginLeft: "116px" }}>{userName}</Text>
        <Text style={{ marginLeft: "108px" }}>{contents}</Text>
        <Text style={{ marginLeft: "578px" }}>{date}</Text>
      </Body>
    </>
  );
}

export default MiniNotion;
