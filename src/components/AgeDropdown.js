import styled from "styled-components";
import React from "react";

const AgeDropdown = ({ age, setAge }) => {
  const [isActive, setIsActive] = React.useState(false);
  const options = ["10대", "20대", "30대", "40대", "50대", "60대"];

  return (
    <Dropdown>
      <Dropdownbtn onClick={(e) => setIsActive(!isActive)}>
        {age}
        <span className="material-symbols-outlined">arrow_drop_down</span>
      </Dropdownbtn>
      {isActive && (
        <Dropdowncontent>
          {options.map((option) => (
            <Dropdownitem
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
  align-items: center;
  user-select: none;
  width: 100%;
  height: 15px;
  padding: 13px 0;
  position: relative;
`;

const Dropdownbtn = styled.div`
  padding: 15px;
  height: 15px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid #a4a4a4;
  border-radius: 12px;
`;

const Dropdowncontent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid #a4a4a4;
  padding: 15px;
  margin-top: 10px;
  width: 91%;
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
