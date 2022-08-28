import cn from "../images/cn.png";
import cartoon from "../images/cartoon.png";


const Footer = () => {
    return ( 
        <footer className="footer" id="about">
            <div className="one">
           <p>Hi, I’m Belal Elgebaly, I designed and developed this Adventure Time page, I used to watch this show as a kid, it was one of my favorites, so one day I thought to myself why shouldn’t I make something for it? and I gave it a shot!</p>
{/* 
           <form className="contact" target="_blank" action="https://formsubmit.co/belalelgebaly20000@gmail.com" method="POST">
            <p>Leave a comment?</p>
            <input type="text" id="name" name="name" placeholder="Name" />
            <textarea placeholder="Comment" name="comment" id="comment" cols="30" rows="3"></textarea>
            {/* <textarea placeholder="Comment" name="comment" id="comment" cols="30" rows="5"></textarea> */}
            {/* <button>SUBMIT</button>
           </form> */}
            </div>

            <div className="two">
                <div className="item1">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Tradesmark Info</a>
                    <a href="#">BELAL ELGEBALY ©2022</a>
                </div>
                <div className="item2">
                    <img src={cn} alt="cn" />
                    <img src={cartoon} alt="cartoon network" />
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;