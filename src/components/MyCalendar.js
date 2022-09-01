import React from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import "../css(subin)/Calendar.css";
import moment from "moment";
// import 'moment/locale/ko';

const MyCalendar = ({selectDate,setSelectDate}) => {
  const [value, onChange] = React.useState(new Date());
  React.useEffect(() => {
    let year = value.getFullYear();
    let month = value.getMonth()+1;
    let date = value.getDate();
    let fullDate = `${year}/${month}/${date}`;
    setSelectDate(fullDate);
  }, [value]);
  return (
    <CalendarContainer>
      <Calendar
        calendarType="US"
        locazle="en-GB"
        onChange={onChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("D")}
      />
    </CalendarContainer>
  );
};
   
export default MyCalendar;

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */

`;
