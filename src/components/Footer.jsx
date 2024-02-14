import Reac from "react";
import './Footer.css'
function Footer(){
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                <div className="col-ms-3 col-sm-6">
                <h1> Developers</h1>
                <ul>
                    <li><a href="https://github.com/josh484">Joshua Mendonza</a></li>
                    <li><a href="https://github.com/enx-code">Enkhbat Baatar</a></li>
                    <li><a href="https://github.com/Moe-op">Moses</a></li>
                    <li><a href="https://github.com/KevinDsouza7">Victor Kevin Dsouza </a></li>
                </ul>
                
            </div>
                </div>
            </div>
        
        <div className="footer-bottom">
            <p className=" text-xs-center">
            &copy;{new Date().getFullYear() } Retail Detective - All Rights Reserved
            </p>
         </div>
    </div>
    );
}
export default Footer;