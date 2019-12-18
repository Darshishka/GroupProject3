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
                    <a href="https://www.stephanielake.io" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDesktop} className="social"/></a>
                    <a href="https://www.linkedin.com/in/stephanie-lake-43b89140/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="social"/></a>
                    <a href="https://github.com/sjconst" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="social"/></a> 
                </Col>   
                <Col className="text-center">  
                    <p className="name">Darcy Atlas</p>    
                    <a href="https://www.stephanielake.io" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDesktop} className="social"/></a>
                    <a href="https://www.linkedin.com/in/stephanie-lake-43b89140/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="social"/></a>
                    <a href="https://github.com/sjconst" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="social"/></a> 
                </Col>   
                <Col className="text-center">  
                    <p className="name">Whitney Tarkington</p>    
                    <a href="https://www.stephanielake.io" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDesktop} className="social"/></a>
                    <a href="https://www.linkedin.com/in/stephanie-lake-43b89140/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="social"/></a>
                    <a href="https://github.com/sjconst" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="social"/></a> 
                </Col>      
            </Row>                
        </div>
    )
};
export default Footer;