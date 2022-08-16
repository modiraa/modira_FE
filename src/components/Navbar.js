// import styled from "styled-components";
import '../css(subin)/Navbar.css';

const Navbar = () => {
  return (
    <div className='info_header'>
      <div className='info_header_address'>
        <h4>서울시 논현동</h4>
      </div>
      <div className='info_header_search'>
        <span className="material-icons-outlined">
          search
        </span>
      </div>
    </div>
  )
}
export default Navbar;