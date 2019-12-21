import React from "react";
import "./index.css";
import { Row, Col} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

function Footer(){  
      return (
        <div className="fixed-bottom" id="myFooter">            
            <Row id="footerRow">            
                <Col className="text-center">  
                    <p className="name">Stephanie Lake</p>    
                    <a href="https://www.stephanielake.io" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDesktop} className="social"/></a>
                    <a href="https://www.linkedin.com/in/stephanie-lake-43b89140/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="social"/></a>
                    <a href="https://github.com/sjconst" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="social"/></a> 
                </Col>  
                <Col className="text-center">  
                    <p className="name">Bill Coury</p>    
                    <a href="https://billcoury.github.io/updatedbio/index.html" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDesktop} className="social"/></a>
                    <a href="https://www.linkedin.com/in/bill-coury-a17162174/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="social"/></a>
                    <a href="https://github.com/billcoury" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="social"/></a> 
                </Col>   
                <Col className="text-center">  
                    <p className="name">Darcy Atlas</p>    
                    <a href="https://www.darshishka.github.io" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDesktop} className="social"/></a>
                    <a href="https://www.linkedin.com/in/darcy-atlas-88b973187/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="social"/></a>
                    <a href="https://github.com/Darshishka" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="social"/></a> 
                </Col>   
                <Col className="text-center">  
                    <p className="name">Whitney Tarkington</p>    
                    <a href="https://whittark.github.io/whit_tarkington_2019-2010/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDesktop} className="social"/></a>
                    <a href="https://www.linkedin.com/in/whitney-tarkington-215a136/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="social"/></a>
                    <a href="https://github.com/whittark" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="social"/></a> 
                </Col>      
            </Row>                
        </div>
    )
};
export default Footer;