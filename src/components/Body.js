import {characters} from "./data.js";
import { useInView } from "react-intersection-observer";

const Body = () => {
    const {ref: finn, inView: myElementIsVisible1} = useInView();
    const {ref: jake, inView: myElementIsVisible2} = useInView();
    const {ref: beemo, inView: myElementIsVisible3} = useInView();
    const {ref: marceline, inView: myElementIsVisible4} = useInView();
    const {ref: bubblegum, inView: myElementIsVisible5} = useInView();
    const {ref: flame, inView: myElementIsVisible6} = useInView();
    const {ref: ice, inView: myElementIsVisible7} = useInView();
    const {ref: lemongrab, inView: myElementIsVisible8} = useInView();

    return ( 
        <div className="body">
            
                <div className="container" id="home">
                <div id="cover"></div>
                
                    <div className="cloud1"></div>
                    <div className="cloud2"></div>

                                <div className="face-background active"><div className="face"></div></div>
                                
                <div className="text-container opacity">
                    <h1>{characters[0].name}</h1>
                    <p>{characters[0].text}</p>
                </div>
                <div className="opacityimg"><div className="img-container"></div></div>
            </div>

            <div id="finn" className="container">
                <div id="cover"></div>
                <div id="clouds-container">
                    <div className="clouds"></div>
                    <div className="clouds"></div>
                    <div className="clouds"></div>
                    <div className="clouds"></div>
                    <div className="clouds"></div>
                    <div className="clouds-medium1 clouds-medium"></div>
                    <div className="clouds-medium2 clouds-medium"></div>
                    <div className="clouds-medium3 clouds-medium"></div>
                    </div>
                <div className={myElementIsVisible1 ? 'face-background active' : 'face-background'}><div className="face"></div></div>
                <div className={myElementIsVisible1 ? 'text-container opacity' : 'text-container'}>
                    <h1>{characters[1].name} </h1>
                    <p ref={finn}>{characters[1].text}</p>
                </div>
                <div className={myElementIsVisible1 ? 'opacityimg' : ''}><div className="img-container"></div></div>
            </div>

            <div id="jake" className="container">
                <div id="cover"></div>
                <div className="clouds"></div>
                <div className="clouds"></div>
                <div className="clouds"></div>
                <div className="clouds2"></div>
                <div className="clouds2"></div>

                <div className={myElementIsVisible2 ? 'face-background active' : 'face-background'}><div className="face"></div></div>
                <div className={myElementIsVisible2 ? 'text-container opacity' : 'text-container'}>
                    <h1>{characters[2].name}</h1>
                    <p ref={jake}>{characters[2].text}</p>
                </div>
                <div className={myElementIsVisible2 ? 'opacityimg' : ''}><div className="img-container"></div></div>
            </div>

            <div id="beemo" className="container">
                <div id="cover"></div>
                <div id="cover2"></div>
                                <div className={myElementIsVisible3 ? 'face-background active' : 'face-background'}><div className="face"></div></div>
                <div className={myElementIsVisible3 ? 'text-container opacity' : 'text-container'}>
                    <h1>{characters[3].name}</h1>
                    <p ref={beemo}>{characters[3].text}</p>
                </div>
                <div className={myElementIsVisible3 ? 'opacityimg' : ''}><div className="img-container"></div></div>
            </div>

            <div id="bubblegum" className="container">
            <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
          </div>
                <div id="cover"></div>
                <div className="clouds cloud1"></div>
                <div className="clouds2"></div>
                <div className="clouds"></div>
                <div className="clouds2"></div>
                <div className="clouds"></div>
                <div className="clouds2"></div>
                <div className="clouds"></div>
                {/* <div className="clouds2" style={{top:'52%', left: "50px", width:"900px", height:"450px", zIndex: "3"}}></div> */}

                <div id="moon"></div>

                                <div className={myElementIsVisible5 ? 'face-background active' : 'face-background'}><div className="face"></div></div>
                <div className={myElementIsVisible5 ? 'text-container opacity' : 'text-container'}>
                    <h1>{characters[5].name}</h1>
                    <p ref={bubblegum}>{characters[5].text}</p>
                </div>
                <div className={myElementIsVisible5 ? 'opacityimg' : ''}><div className="img-container"></div></div>
            </div>
            
            <div id="lemongrab" className="container">
                <div id="cover"></div>   
                 <div className="clouds"></div>
                <div className="clouds"></div>
                <div className="clouds"></div>
                <div className="clouds"></div>
                
                                <div className={myElementIsVisible8 ? 'face-background active' : 'face-background'}><div className="face"></div></div>
                <div className={myElementIsVisible8 ? 'text-container opacity' : 'text-container'}>
                    <h1>{characters[8].name}</h1>
                    <p ref={lemongrab}>{characters[8].text}</p>
                </div>
                <div className={myElementIsVisible8 ? 'opacityimg' : ''}><div className="img-container"></div></div>
            </div>

            <div id="flame-princess" className="container">
                <div id="cover"></div>
                <div id="cover"></div>
                <div id="cover"></div>
                                <div className={myElementIsVisible6 ? 'face-background active' : 'face-background'}><div className="face"></div></div>
                <div className={myElementIsVisible6 ? 'text-container opacity' : 'text-container'}>
                    <h1>{characters[6].name}</h1>
                    <p ref={flame}>{characters[6].text}</p>
                </div>
                <div className={myElementIsVisible6 ? 'opacityimg' : ''}><div className="img-container"></div></div>
            </div>

            <div id="ice-king" className="container">
                <div id="cover"></div>
                <div id="moon"></div>
                <div className="cloud1"></div>
                <div className="cloud2"></div>
                                <div className={myElementIsVisible7 ? 'face-background active' : 'face-background'}><div className="face"></div></div>
                <div className={myElementIsVisible7 ? 'text-container opacity' : 'text-container'}>
                    <h1>{characters[7].name}</h1>
                    <p ref={ice}>{characters[7].text}</p>
                </div>
                <div className={myElementIsVisible7 ? 'opacityimg' : ''}><div className="img-container"></div></div>
            </div>

            <div id="marceline" className="container"  ref={marceline}>
                <div id="cover"></div>
                {/* sky */}
                <div className="background-container">
          {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png" alt="" /> */}
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
          </div>
          {/* {sky} */}
                                <div className={myElementIsVisible4 ? 'face-background active' : 'face-background'}><div className="face"></div></div>
                <div className={myElementIsVisible4 ? 'text-container opacity' : 'text-container'}>
                    <h1>{characters[4].name}</h1>
                    <p>{characters[4].text}</p>
                </div>
                <div className={myElementIsVisible4 ? 'opacityimg' : ''}><div className="img-container"></div></div>
            </div>

        </div>
     );
}
 
export default Body;