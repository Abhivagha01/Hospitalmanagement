import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('islogin');
        navigate("/signin");
        window.location.reload();
    }
    return (
        <div>
            <div className="main_header">
                <section id="top-nav">
                    <div className="container">
                        <div className="top">
                            <div className="row">
                                <div className="col-lg-6 col-md-7">
                                    <div className="left">
                                        <ul className="list-unstyled m-b-0">
                                            <li><a href="#" className="btn btn-link"><i className="zmdi zmdi-email m-r-5"></i>info@example.com</a>
                                                <a href="#" className="btn btn-link"><i className="zmdi zmdi-phone m-r-5"></i>+
                                                    202-555-0191</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-5">
                                    <div className="text-right d-none d-md-block">
                                        <ul className="list-unstyled d-flex justify-content-end m-b-0">
                                            <li>
                                                {

                                                    localStorage.getItem('islogin') ?
                                                        (<Link type="button" className="btn btn-link" onClick={logout}>Logout</Link>) :
                                                        (<Link to="/signin" className="btn btn-link">Sign in</Link>)
                                                }

                                                <Link to="/signup" className="btn btn-link">signup</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <header id="header">
                    <div className="container">
                        <div className="head">
                            <div className="row">
                                <div className="col-lg-5 col-sm-5">
                                    <div className="left">
                                        <Link to="/" className="navbar-brand">
                                            <img src="assets/images/logo.svg" alt="logo" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-sm-7">
                                    <div className="text-right  d-none d-md-block">
                                        <p className="col-white m-b-0 p-t-5"><i className="zmdi zmdi-time"></i> Mon - Sat: 9:00 - 18:00
                                            Sunday CLOSED </p>
                                        <p className="col-white m-b-0 "><i className="zmdi zmdi-pin"></i> 1422 1st St. Santa Rosa CA
                                            94559. United States </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div id="navbar" data-aos="fade-down">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse"
                                data-target="#navbarMenu" aria-expanded="false" aria-label="Toggle navigation"><span
                                    className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarMenu">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item"><Link className="nav-link" to="/service">Services</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/department">Departments</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/doctor">Doctors</Link></li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="javascript:void(0);" id="pageMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">Blog</a>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="/blog">Blog</Link>
                                            <Link className="dropdown-item" to="/blog-detail">Blog Detail</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="javascript:void(0);" id="pageMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">Pages</a>
                                        <div className="dropdown-menu">
                                            <Link className="dropdown-item" to="/about">About Us</Link>
                                            <Link className="dropdown-item" to="/faq">FAQs</Link>
                                            <Link className="dropdown-item" to="/galary">Galary</Link>
                                            <Link className="dropdown-item" to="/price-list">Price list</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
                                    <li className="nav-item d-md-none d-lg-none d-xl-none"><a className="nav-link" href="javascript:void(0);">Sign in</a></li>
                                    <li className="nav-item d-md-none d-lg-none d-xl-none"><a className="nav-link" href="javascript:void(0);">Sign up</a></li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0 d-none d-lg-inline-block">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                </form>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header