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
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
  width: 100%;
`;

const Dropdownbtn = styled.div`
  height: 15px;
  border: 1px solid #a4a4a4;
  border-radius: 12px;
  padding: 19px 19px 19px 29px;
  color: #dfdfdf;
  span {
    display: flex;
    justify-content: space-between;
  }
`;

const Dropdowncontent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid #a4a4a4;
  margin-top: 10px;
`;

const Dropdownitem = styled.div`
  background-color: white;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #a4a4a4;
    color: #fff;
  }
`;
