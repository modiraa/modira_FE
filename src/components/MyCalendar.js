import React from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import "../css(subin)/Calendar.css";

const MyCalendar = () => {
  const [value, onChange] = React.useState(new Date());
  React.useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <CalendarContainer>
      <Calendar
        calendarType="US"
        locale="en-GB"
        onChange={onChange}
        value={value}
      />
    </CalendarContainer>
  );
};
   
export default MyCalendar;

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */

`;
