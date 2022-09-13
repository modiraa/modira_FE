import styled from "styled-components";
import React from "react";
import MyIcon from "../../element/MyIcon";

const AgeDropdown = ({ age, setAge }) => {
  const [isActive, setIsActive] = React.useState(false);
  const options = ["10대", "20대", "30대", "40대", "50대", "60대"];

  return (
    <Dropdown>
      <Dropdownbtn onClick={(e) => setIsActive(!isActive)}>
        <span>
          {age} 
          <MyIcon sizePx={40} iconName={"arrow_drop"} color={"dropgray"}  />
        </span>
      </Dropdownbtn>
      {isActive && (
        <Dropdowncontent>
          {options.map((option) => (
            <Dropdownitem
              key={option}
              onClick={(e) => {
                setAge(option);
                setIsActive(false);
              }}
            >
              {option}
            </Dropdownitem>
          ))}
        </Dropdowncontent>
      )}
    </Dropdown>
  );
};
export default AgeDropdown;

const Dropdown = styled.div`
  width: 27.4375rem;
  font-family: "AppleSDGothicNeoM00";
  font-size: 1.25rem;
  display: block;
  height: 100%;
  
`;

const Dropdownbtn = styled.div`
  display: block;
  height: 3.375rem;
  border: none;
  border-radius: 0.75rem;
  padding: 1.1875rem 0.625rem 1.1875rem 1.8125rem;
background-color: #fff;
  span,
  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    color:  #CBCBCB;
  }
`;

const Dropdowncontent = styled.div`
  overflow: hidden;
  border-radius: 0.75rem;
  margin-top: 0.625rem;
  height: 100%;
  background-color: #fff;
`;

const Dropdownitem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.625rem;
  text-align: center;
  color: #140D41;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background:  #FFE9BE;
    color: #140D41;
  }
`;
