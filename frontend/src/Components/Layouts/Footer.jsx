import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import data from '../Data/DernSupport.json';

function Footer() {
    return (
        <footer className="text-center text-lg-start bg-body-tertiary">
            <section>
                <div className="container text-center text-md-start p-5">
                    <div className="row">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase text-dark fw-bold mb-4">
                                <FontAwesomeIcon icon={faHome} className="me-3" />
                                {data.company.name}
                            </h6>
                            <p>{data.company.description}</p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Services</h6>
                            <p>
                                <a href="#!" target='_blank'
                                className="text-reset">{data.services['alarm-service']}</a>
                            </p>
                            <p>
                                <a href="#!" target='_blank'
                                className="text-reset">{data.services['cctv-service']}</a>
                            </p>
                            <p>
                                <a href="#!" target='_blank' 
                                className="text-reset">{data.services['monitoring-service']}</a>
                            </p>
                            <p>
                                <a href="#!" target='_blank' 
                                className="text-reset">{data.services['security-service']}</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-5">Contact</h6>
                            <p><FontAwesomeIcon icon={faHome} className="me-3" />{data.company.contact.address}</p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                                {data.company.contact.email}
                            </p>
                            <p><FontAwesomeIcon icon={faPhone} className="me-3" />{data.company.contact['phone']}</p>
                            <p><FontAwesomeIcon icon={faPrint} className="me-3" />{data.company.contact['another-phone']}</p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="d-flex justify-content-center justify-content-lg-between p-5 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href="https://www.itweapons.com/wp-content/uploads/2019/03/IT-Support-.png" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://www.itweapons.com/wp-content/uploads/2019/03/IT-Support-.png" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.itweapons.com/wp-content/uploads/2019/03/IT-Support-.png" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a href="https://www.itweapons.com/wp-content/uploads/2019/03/IT-Support-.png" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.itweapons.com/wp-content/uploads/2019/03/IT-Support-.png" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.itweapons.com/wp-content/uploads/2019/03/IT-Support-.png" className="me-4 text-reset">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                © {new Date().getFullYear()} Copyright: Dern-Support.com
            </section>
        </footer>
    );
}

export default Footer;