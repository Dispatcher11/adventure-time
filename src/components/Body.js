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

                                <div className="face-background"><div className="face"></div></div>
                <div className="text-container opacity">
                    <h1>{characters[0].name}</h1>
                    <p>{characters[0].text}</p>
                </div>
                <div className="opacityimg"><div className="img-container"></div></div>
            </div>

            <div id="finn" className="container">
                <div id="cover"></div>
                    <div className="clouds" style={{top:'80px', left: "984px", width:"400px", height:"100px"}}></div>
                    <div className="clouds" style={{top:'260px', left: "562px", width:"500px", height:"125px"}}></div>
                    <div className="clouds" style={{top:'460px', left: "1200px", width:"400px", height:"100px"}}></div>
                    <div className="clouds" style={{top:'600px', left: "200px", width:"400px", height:"100px"}}></div>
                    <div className="clouds" style={{top:'400px', left: "-100px", width:"400px", height:"100px"}}></div>
                    <div className="clouds-medium" style={{top:'160px', left: "80px", width:"200px", height:"50px"}}></div>
                    <div className="clouds-medium" style={{top:'50px', left: "480px", width:"200px", height:"50px"}}></div>
                    <div className="clouds-medium" style={{top:'600px', left: "900px", width:"200px", height:"50px"}}></div>

                <div ref={finn} className={myElementIsVisible1 ? 'face-background active' : 'face-background'}><div className="face"></div></div>
                <div className={myElementIsVisible1 ? 'text-container opacity' : 'text-container'}>
                    <h1>{characters[1].name} </h1>
                    <p>{characters[1].text}</p>
                </div>
                <div className={myElementIsVisible1 ? 'opacityimg' : ''}><div className="img-container"></div></div>
            </div>

            <div id="jake" className="container">
                <div id="cover"></div>
                <div ref={jake} className={myElementIsVisible2 ? 'face-background active' : 'face-background'}><div className="face"></div></div>
                <div className={myElementIsVisible2 ? 'text-container opacity' : 'text-container'}>
                    <h1>{characters[2].name}</h1>
                    <p>{characters[2].text}</p>
                </div>
                <div className={myElementIsVisible2 ? 'opacityimg' : ''}><div className="img-container"></div></div>
            </div>

            <div id="beemo" className="container">
                <div id="cover"></div>
                                <div ref={beemo} className={myElementIsVisible3 ? 'face-background active' : 'face-background'}><div className="face"></div></div>
                <div className={myElementIsVisible3 ? 'text-container opacity' : 'text-container'}>
                    <h1>{characters[3].name}</h1>
                    <p>{characters[3].text}</p>
                </div>
                <div className={myElementIsVisible3 ? 'opacityimg' : ''}><div className="img-container"></div></div>
            </div>

            <div id="marceline" className="container">
                <div id="cover"></div>
                                <div ref={marceline} className={myElementIsVisible4 ? 'face-background active' : 'face-background'}><div className="face"></div></div>
                <div className={myElementIsVisible4 ? 'text-container opacity' : 'text-container'}>
                    <h1>{characters[4].name}</h1>
                    <p>{characters[4].text}</p>
                </div>
                <div className={myElementIsVisible4 ? 'opacityimg' : ''}><div className="img-container"></div></div>
            </div>

            <div id="bubblegum" className="container">
                <div id="cover"></div>
                                <div ref={bubblegum} className={myElementIsVisible5 ? 'face-background active' : 'face-background'}><div className="face"></div></div>
                <div className={myElementIsVisible5 ? 'text-container opacity' : 'text-container'}>
                    <h1>{characters[5].name}</h1>
                    <p>{characters[5].text}</p>
                </div>
                <div className={myElementIsVisible5 ? 'opacityimg' : ''}><div className="img-container"></div></div>
            </div>

            <div id="flame-princess" className="container">
                <div id="cover"></div>
                                <div ref={flame} className={myElementIsVisible6 ? 'face-background active' : 'face-background'}><div className="face"></div></div>
                <div className={myElementIsVisible6 ? 'text-container opacity' : 'text-container'}>
                    <h1>{characters[6].name}</h1>
                    <p>{characters[6].text}</p>
                </div>
                <div className={myElementIsVisible6 ? 'opacityimg' : ''}><div className="img-container"></div></div>
            </div>

            <div id="ice-king" className="container">
                <div id="cover"></div>
                                <div ref={ice} className={myElementIsVisible7 ? 'face-background active' : 'face-background'}><div className="face"></div></div>
                <div className={myElementIsVisible7 ? 'text-container opacity' : 'text-container'}>
                    <h1>{characters[7].name}</h1>
                    <p>{characters[7].text}</p>
                </div>
                <div className={myElementIsVisible7 ? 'opacityimg' : ''}><div className="img-container"></div></div>
            </div>

            <div id="lemongrab" className="container">
                <div id="cover"></div>
                                <div ref={lemongrab} className={myElementIsVisible8 ? 'face-background active' : 'face-background'}><div className="face"></div></div>
                <div className={myElementIsVisible8 ? 'text-container opacity' : 'text-container'}>
                    <h1>{characters[8].name}</h1>
                    <p>{characters[8].text}</p>
                </div>
                <div className={myElementIsVisible8 ? 'opacityimg' : ''}><div className="img-container"></div></div>
            </div>

        </div>
     );
}
 
export default Body;