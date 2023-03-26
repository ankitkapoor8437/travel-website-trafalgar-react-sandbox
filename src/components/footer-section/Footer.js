import React from "react";
import '../footer-section/Footer-Styles.css';

const Footer = () => {
    return (

        <div className="footer">
            <div className="top">
                <div className="logo">
                    <h1>Tragalgar</h1>
                    <p>Choose your favourite destination.</p>
                </div>

                <div className="social">
                    <a href="/"><i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href=""><i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href=""><i className="fa-brands fa-twitter-square"></i>
                    </a>
                    <a href=""><i className="fa-brands fa-reddit-square"></i>
                    </a>
                </div>

            </div>

            <div className="bottom">

                <div className="coloumns">
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>

                <div className="coloumns">
                    <h4>Commmunity</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>


                <div className="coloumns">
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>


                <div className="coloumns">
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>


            </div>
        </div>
    );
}

export default Footer;