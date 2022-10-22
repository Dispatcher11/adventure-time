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
            <a href="#home">HOME</a>
        </li>
        <li className="nav-item dropdown">
            <a id="disabled" href="#">CHARACTERS <i className="fas fa-caret-down"></i></a>
              <div className="dropdown-content">
              <a href="#finn">FINN</a>
              <a href="#jake">JAKE</a>
              <a href="#beemo">BEEMO</a>
              <a href="#bubblegum">BUBBLEGUM</a>
              {/* <a href="#lemongrab">LEMONGRAB</a> */}
              <a href="#flame-princess">FLAME PRINCESS</a>
              <a href="#ice-king">ICE KING</a>
              <a href="#marceline">MARCELINE</a>
              </div>
        </li>
        <li className="nav-item">
            <a href="#about">ABOUT</a>
        </li>
      </ul>
    </div>
        </nav>
     );
}
 
export default Navbar;