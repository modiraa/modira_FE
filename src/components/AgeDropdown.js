import styled from "styled-components";
import React from "react";

const AgeDropdown = ({ age, setAge }) => {
  const [isActive, setIsActive] = React.useState(false);
  const options = ["10대", "20대", "30대", "40대", "50대", "60대"];

  return (
    <Dropdown>
      <Dropdownbtn onClick={(e) => setIsActive(!isActive)}>
        <span>
          {age}
          <span className="material-symbols-outlined">arrow_drop_down</span>
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
  width: 439px;
  font-family: "AppleSDGothicNeoM00";
  font-size: 20px;

  display: block;
  height: 100%;
`;

const Dropdownbtn = styled.div`
  display: block;
  height: 15px;
  border: 1px solid #a4a4a4;
  border-radius: 12px;
  padding: 19px 10px 19px 29px;
  color: #dfdfdf;
  span,
  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`;

const Dropdowncontent = styled.div`
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid #a4a4a4;
  margin-top: 10px;
  height: 100%;
`;

const Dropdownitem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
  color: #a4a4a4;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #a4a4a4;
    color: #fff;
  }
`;
