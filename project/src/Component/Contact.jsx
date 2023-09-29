import React from 'react'
import Header from './Header';
import Footer from './Footer';


function Contact() {
    return (
        <div>
            <Header/>
            {/* start hero */}
            <section id="hero">
                <div className="inner-banner" style={{ backgroundImage: 'url(assets/images/banner-contactus.jpg)' }}>
                    <div className="container">
                        <h3 className="title">Oreo <br /><big><strong>Contact Us</strong></big></h3>
                    </div>
                </div>
            </section>
            {/* Content Area */}
            <section className="main-section">
                {/* Contact Section */}
                <div className="contact-section">
                    <div className="container">
                        <div className="row">
                            <div className="section-title col-12" data-aos="fade-right">
                                <h2><span>Get Touch </span>With Us</h2>
                                <p>Description text here...</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-sm-6">
                                <div className="contact-form">
                                    <div className="row">
                                        <div className="col-sm-12 appoitntment-title">Make an Appointment</div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Enter Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Enter Email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Enter Phone" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 textarea">
                                            <div className="form-group">
                                                <textarea className="form-control" placeholder="Your Message.." defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <button className="btn btn-primary btn-round">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="contact-sidebar">
                                    <h4>Quick Contact</h4>
                                    <p>If you have any questions simply use the following contact details.</p>
                                    <ul className="list-unstyled add-grp">
                                        <li>
                                            <i className="zmdi zmdi-pin" />
                                            <p>121, Park Drive, Varick Str<br />New York, NY 10012, USA</p>
                                        </li>
                                        <li>
                                            <i className="zmdi zmdi-phone" />
                                            <p>+ (123) 0200 12345,<br />+ 1800-45-678-9012</p>
                                        </li>
                                        <li>
                                            <i className="zmdi zmdi-email" />
                                            <p>Mailus@hospitalteam.com</p>
                                        </li>
                                    </ul>
                                    <ul className="list-unstyled social-icon clearfix">
                                        <li>
                                            <a href="javascript:void(0);"><i className="zmdi zmdi-facebook-box" /></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"><i className="zmdi zmdi-google-plus-box" /></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"><i className="zmdi zmdi-linkedin-box" /></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"><i className="zmdi zmdi-twitter-box" /></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"><i className="zmdi zmdi-pinterest-box" /></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"><i className="zmdi zmdi-instagram" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contact Section */}
                {/* Contact Map */}
                <div className="map-main">
                    <img src="assets/images/map.jpg" alt="" />
                </div>
                {/* Contact Map */}
                {/* Our Partner */}
                <div className="our-partner">
                    <div className="container">
                        <div className="row">
                            <div className="section-title col-12" data-aos="fade-right">
                                <h2><span>Our </span>Partners</h2>
                                <p>Description text here...</p>
                            </div>
                        </div>
                        <div className="row out-partner-logo">
                            <div className="col-lg-2 col-md-6 col-sm-6"><a href="javascript:void(0);"><img src="assets/images/partner-logo-1.png" alt="" /></a></div>
                            <div className="col-lg-2 col-md-6 col-sm-6"><a href="javascript:void(0);"><img src="assets/images/partner-logo-2.png" alt="" /></a></div>
                            <div className="col-lg-2 col-md-6 col-sm-6"><a href="javascript:void(0);"><img src="assets/images/partner-logo-3.png" alt="" /></a></div>
                            <div className="col-lg-2 col-md-6 col-sm-6"><a href="javascript:void(0);"><img src="assets/images/partner-logo-4.png" alt="" /></a></div>
                            <div className="col-lg-2 col-md-6 col-sm-6"><a href="javascript:void(0);"><img src="assets/images/partner-logo-1.png" alt="" /></a></div>
                            <div className="col-lg-2 col-md-6 col-sm-6"><a href="javascript:void(0);"><img src="assets/images/partner-logo-5.png" alt="" /></a></div>
                        </div>
                    </div>
                </div>
                {/* Contact Map */}
            </section>

            <Footer/>
        </div>
    )
}

export default Contact