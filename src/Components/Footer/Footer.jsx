import React from 'react'
import socialMedias from './socialMedias'

const Footer = ()=>{
    return(
        <footer>
            <div className="container-fluid padding bg-dark text-white pt-3">
                <div className="row text-center">
                    <div className="col-md-4">
                        <h2>Berihu</h2>
                        <hr className="light"/>
                        <p>+3246-5327-617</p>
                        <p>berihu05.20@gmail.com</p>
                        
                    </div>
                    <div className="col-md-4">
                        <hr className="light"/>
                        <h5>Address</h5>
                        <hr className="light" />
                        <p>Oostrozebekestraat 26</p>
                        <p>Ingelmunster, Belgium</p>
                    </div>
                    <div className="col-md-4">
                        <hr className="light" />
                        <h5>Social Media</h5>
                        <hr className="light" />
                            {socialMedias.map((media, index) =>(
                                <p key={index} className="footer-media">
                                    <a href={media.url} target="_blank" rel="noopener noreferrer">
                                        {media.name}
                                    </a>
                                </p>
                            ))}
                    </div>
                    <div className="col-12">
                        <hr className="light-100" />
                        <h5>&copy;2020 <a href="https://berihu.netlify.app/" target="_blank" rel="noopener noreferrer">
                            Berihu Gebremedhin
                         </a> 
                        </h5>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;