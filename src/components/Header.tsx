import styled from "styled-components";
import MyIcon from "../images/PeopleIcon";
import MainIcon from "../images/MainIcon";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
    height:82px;
    width:100%;
    background-color:white;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:1;
`

const HeaderItemWrapper = styled.div`
    height:40px;
    width:600px;
    display:flex;
    align-items:center;
    justify-content:center;
    justify-content: space-between;
`

const Text = styled(Link)`
    margin:0;
    font-family: 'Pretendard-Regular', sans-serif;
    text-decoration: none; 
    color:black;
`

const TextWrapper = styled.div`
    width:320px;
    display:flex;
    align-items:center;
    justify-content: space-between;
`

function Header(){
    return(
        <HeaderWrapper>
            <HeaderItemWrapper>
                <MainIcon />
                <TextWrapper>
                    <Text to="/">홈</Text>
                    <Text to="/">구인구직</Text>
                    <Text to="/notion">공지</Text>
                    <Text to="/">프로필</Text>
                </TextWrapper>
                <MyIcon />
            </HeaderItemWrapper>
        </HeaderWrapper>
    )
}

export default Header;