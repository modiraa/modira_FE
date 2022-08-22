// import styled from "styled-components";
import "../css(subin)/Navbar.css";

const Navbar = () => {
  return (
    <div className="info_header">
      <div className="info_header_address">
        <span className="info-header-address-text">서울시 논현동</span>
        <div className="info_header_address_plus">
          <div className="location-trianle"><div className="triangle"></div></div>
          
        </div>
      </div>
      <div className="info_header_search">
        <span className="material-icons-outlined">search</span>
      </div>
    </div>
  );
};
export default Navbar;
