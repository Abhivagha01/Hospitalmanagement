import React, { useState } from 'react'
import { useRef } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";



function Signin() {

  const [user, setuser] = useState();
  const userhandle = (e) => {
    setuser(e.target.checked);
  }
  const [admin, setadmin] = useState();
  const adminhandle = (e) => {
    setadmin(e.target.checked);
  }


  const txtemail = useRef();
  const txtpassword = useRef();

  const navigate = useNavigate();

  const onDatasubmit = (e) => {
    e.preventDefault();
    if (user === true) {
      const email = txtemail.current.value;
      const password = txtpassword.current.value;

      const params = new FormData();

      params.set("email", email);
      params.set("password", password);

      axios.post("http://localhost/abhik/Docter/login.php", params).then((res) => {
        console.log(res);
        if (res.data.status == "yes") {
          localStorage.setItem('islogin', 'yes');
          localStorage.setItem('login', 'user');
          navigate("/index");
          window.location.reload();
        }
        else {  
          alert("plese valid username and password!");
        }
      })
    }

    else if (admin === true) {
      const email = txtemail.current.value;
      const password = txtpassword.current.value;

      const params = new FormData();

      params.set("email", email);
      params.set("password", password);

      axios.post("http://localhost/abhik/Docter/admin.php", params).then((res) => {
        console.log(res);
        if (res.data.status == "yes") {
          localStorage.setItem('islogin', 'yes');
          localStorage.setItem('login', 'admin');
          navigate("/dashboard");
          window.location.reload();
        }
        else {
          alert("plese valid username and password!");
        }
      })
    }


    else {
      alert("plese select user and Admin!");
    }
  }



  return (
    <div className='theme-cyan authentication sidebar-collapse'>
      <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
        <div className="container">
          <div className="navbar-translate n_logo">
            <a className="navbar-brand" href="javascript:void(0);" title target="_blank">Oreo</a>
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <div className="navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0);">Search Result</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" title="Follow us on Twitter" href="javascript:void(0);" target="_blank">
                  <i className="zmdi zmdi-twitter" />
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" title="Like us on Facebook" href="javascript:void(0);" target="_blank">
                  <i className="zmdi zmdi-facebook" />
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" title="Follow us on Instagram" href="javascript:void(0);" target="_blank">
                  <i className="zmdi zmdi-instagram" />
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn btn-white btn-round" to="/signup">SIGN UP</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
      <div className="page-header">
        <div className="page-header-image" style={{ backgroundImage: 'url(hospital management Admin/assets/images/login.jpg)' }} />
        <div className="container">
          <div className="col-md-12 content-center">
            <div className="card-plain">
              <form className="form" method="POST" onSubmit={onDatasubmit}>
                <div className="header">
                  <div className="logo-container">
                    <img src="https://thememakker.com/templates/oreo/hospital/html/assets/images/logo.svg" alt="" />
                  </div>
                  <h5>Log in</h5>
                </div>
                <div className="content">
                  <div className="input-group">
                    <input type="email" className="form-control" name="email" placeholder="Enter email" ref={txtemail} />
                    <span className="input-group-addon">
                      <i className="zmdi zmdi-account-circle" />
                    </span>
                  </div>
                  <div className="input-group">
                    <input type="password" placeholder="Password" name="password" className="form-control" ref={txtpassword} />
                    <span className="input-group-addon">
                      <i className="zmdi zmdi-lock" />
                    </span>
                  </div>
                  <div className="input-group justify-content-center">
                    <div className="radio">
                      <input type="radio" name="checkbox" id='user' className="form-control" onChange={userhandle} />
                      <label htmlFor="user">user</label>
                    </div>
                    <div className="radio">
                      <input type="radio" name="checkbox" id='admin' className="form-control" onChange={adminhandle} />
                      <label htmlFor="admin">Admin</label>
                    </div>
                  </div>
                </div>
                <div className="footer text-center">
                  <button type="submit" className="btn btn-primary btn-round btn-block  waves-effect waves-light">SIGN UP</button>
                  <h5><a href="forgot-password.html" className="link">Forgot Password?</a></h5>
                </div>
              </form>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <nav>
              <ul>
                <li><a href="http://thememakker.com/contact/" target="_blank">Contact Us</a></li>
                <li><a href="http://thememakker.com/about/" target="_blank">About Us</a></li>
                <li><a href="javascript:void(0);">FAQ</a></li>
              </ul>
            </nav>
            <div className="copyright">
              ©
              ,
              <span>Designed by <a href="http://thememakker.com/" target="_blank">ThemeMakker</a></span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Signin;