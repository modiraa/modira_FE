import React from "react";
import styled from "styled-components";

const WebViewLeft = () => {
  return (
    <WrapWebView>
      <Logo>LOGO</Logo>
      <Description>Lorem ipsum dolor sit amet,</Description>
      <WrapSearch>
        <SearchBox>
<span>어떤 모임을 찾으시나요?</span><WrpaIcon><span style={{color:"white",fontSize:"37.41px"}} className="material-symbols-outlined">
search
</span></WrpaIcon>
        </SearchBox>
      </WrapSearch>
    </WrapWebView>
  );
};

export default WebViewLeft;

const WrapWebView = styled.div`
  width: 521px;
  height: 579px;
  /* background-color: green; */
`;

const Logo = styled.div`
  width: 95px;
  height: 40px;
  font-weight: bold;
  font-size: 33px;
`;
const Description = styled.div`
  width: 425px;
  height: 150px;
  font-size: 62px;
  margin-top: 215px;
`;
const WrapSearch = styled.div`
  width: 521px;
  height: 83px;
  margin-top: 91px;
  background-color: white;
`;
const SearchBox=styled.div`
 box-sizing: border-box; 
border: 4px solid #000000;
border-radius: 71px;
width: 100%;
height: 100%;
padding: 22px 0px 23px 44px;
font-size: 31px;
color: #BCBCBC;
line-height: 37.52px;
font-weight: 500;
position: relative;
`
const WrpaIcon=styled.div`
position: absolute;
height: 83px;
width: 83px;
background-color: #000000;
border-radius: 50%;
right: -4px;
bottom:-4px;
display: flex;
justify-content: center;
align-items: center;
`