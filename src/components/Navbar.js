import logo from "../images/logo.png";



const Navbar = () => {       
   let prevScrollpos = window.pageYOffset;
   window.onscroll = () => {
   let currentScrollPos = window.pageYOffset;
     if (prevScrollpos > currentScrollPos) {
       document.getElementById("navbar").style.top = "0";
     } else {
       document.getElementById("navbar").style.top = "-72px";
     }

  prevScrollpos = currentScrollPos;
}
    return ( 
        <nav className="navbar" id="navbar">
    <div >
      <ul className="nav-list">
        <li className="nav-item">
            <img src={logo} alt="img" />
        </li>
        <li className="nav-item">
            <a href="#">HOME</a>
        </li>
        <li className="nav-item dropdown">
            <a href="#">CHARACTERS <i className="fas fa-caret-down"></i></a>
              <div className="dropdown-content">
              <a href="#">FINN</a>
              <a href="#">JAKE</a>
              <a href="#">BEEMO</a>
              <a href="#">MARCELINE</a>
              <a href="#">BUBBLEGUM</a>
              <a href="#">FLAME PRINCESS</a>
              <a href="#">ICE KING</a>
              <a href="#">LEMONGRAB</a>
              </div>
        </li>
        <li className="nav-item">
            <a href="#">ABOUT</a>
        </li>
      </ul>
    </div>
        </nav>
     );
}
 
export default Navbar;