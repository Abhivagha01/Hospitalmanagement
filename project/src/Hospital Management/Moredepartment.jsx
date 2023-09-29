import React from 'react'
import Home from './Home';

function Moredepartment() {
  return (
    <div className='theme-cyan'>
        <Home/>
          <section className="content">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-7 col-md-5 col-sm-12">
              <h2>Cardiology
                <small>Welcome to Oreo</small>
              </h2>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-12">                
              <button className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                <i className="zmdi zmdi-plus" />
              </button>
              <ul className="breadcrumb float-md-right">
                <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                <li className="breadcrumb-item"><a href="all-Departments.html">Departments</a></li>
                <li className="breadcrumb-item active">More</li>
              </ul>                
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-12 profile-page">
              <div className="card profile-header">
                <div className="body text-center">
                  <div className="profile-image"> <img src="hospital management Admin/assets/images/profile_av.jpg" alt="" /> </div>
                  <div>
                    <h4 className="m-b-0"><strong>Dr. Charlotte</strong> Deo</h4>
                    <span className="job_post">Neurologist</span>
                    <p>795 Folsom Ave, Suite 600<br /> San Francisco, CADGE 94107</p>
                  </div>
                  <div>
                    <button className="btn btn-primary btn-round">Follow</button>
                    <button className="btn btn-primary btn-round btn-simple">Message</button>
                  </div>
                  <p className="social-icon m-t-5 m-b-0">
                    <a title="Twitter" href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a>
                    <a title="Facebook" href="javascript:void(0);"><i className="zmdi zmdi-facebook" /></a>
                    <a title="Google-plus" href="javascript:void(0);"><i className="zmdi zmdi-twitter" /></a>
                    <a title="Behance" href="javascript:void(0);"><i className="zmdi zmdi-behance" /></a>
                    <a title="Instagram" href="javascript:void(0);"><i className="zmdi zmdi-instagram " /></a>
                  </p>
                </div>                    
              </div>                               
              <div className="card">
                <div className="body">
                  <div className="workingtime">
                    <h6>Working Time</h6>
                    <small className="text-muted">Tuesday</small>
                    <p>06:00 AM - 07:00 AM</p>
                    <hr />
                    <small className="text-muted">Thursday</small>
                    <p>06:00 AM - 07:00 AM</p>
                    <hr />
                  </div>
                  <div className="reviews">
                    <h6>Reviews</h6>
                    <small className="text-muted">Staff</small>
                    <p>
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star-outline" />
                      <i className="zmdi zmdi-star-outline" />
                    </p>
                    <hr />
                    <small className="text-muted">Punctuality</small>
                    <p>
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star-outline" />
                    </p>
                    <hr />
                    <small className="text-muted">Helpfulness</small>
                    <p>
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                    </p>
                    <hr />
                    <small className="text-muted">Knowledge</small>
                    <p>
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star-outline" />
                      <i className="zmdi zmdi-star-outline" />
                    </p>
                    <hr />
                    <small className="text-muted">Cost</small>
                    <p>
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star" />
                      <i className="zmdi zmdi-star-outline" />
                      <i className="zmdi zmdi-star-outline" />
                      <i className="zmdi zmdi-star-outline" />
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card">
                <div className="body">
                  <div id="demo2" className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ul className="carousel-indicators">
                      <li data-target="#demo2" data-slide-to={0} className />
                      <li data-target="#demo2" data-slide-to={1} className="active" />
                      <li data-target="#demo2" data-slide-to={2} className />
                    </ul>
                    {/* Wrapper for slides */}
                    <div className="carousel-inner">
                      <div className="carousel-item">
                        <img src="hospital management Admin/assets/images/image-gallery/5.jpg" className="img-fluid" alt="" />
                        <div className="carousel-caption">
                          <h3>Chicago</h3>
                          <p>Thank you, Chicago!</p>
                        </div>
                      </div>
                      <div className="carousel-item active">
                        <img src="hospital management Admin/assets/images/image-gallery/6.jpg" className="img-fluid" alt="" />
                        <div className="carousel-caption">
                          <h3>New York</h3>
                          <p>We love the Big Apple!</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src="hospital management Admin/assets/images/image-gallery/12.jpg" className="img-fluid" alt="" />
                        <div className="carousel-caption">
                          <h3>Los Angeles</h3>
                          <p>We had such a great time in LA!</p>
                        </div>
                      </div>
                    </div>
                    {/* Controls */}
                    {/* Left and right controls */}
                    <a className="carousel-control-prev" href="#demo2" data-slide="prev">
                      <span className="carousel-control-prev-icon" />
                    </a>
                    <a className="carousel-control-next" href="#demo2" data-slide="next">
                      <span className="carousel-control-next-icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="body">                        
                  <p>Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure sed rationally encounter consequences that are extremely painful.</p>
                  <blockquote>
                    <p className="blockquote blockquote-primary">
                      "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                      <br />
                      <br />
                      <small>
                        -- Dr. Charlotte
                      </small>
                    </p>
                  </blockquote>
                  <p>Denouncing pleasure and praising pain was born wewill give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness rationally.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="header">
                      <h2><strong>Investigation</strong></h2>
                      <ul className="header-dropdown m-r--5">                                    
                        <li className="remove">
                          <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                        </li>
                      </ul>
                    </div>
                    <div className="body">
                      <div className="table-responsive">
                        <table className="table table-hover m-b-0">
                          <tbody>
                            <tr>
                              <td>Gastroscopy</td>
                              <td>$120</td>
                            </tr>
                            <tr>
                              <td>Colonoscopy</td>
                              <td>$122</td>
                            </tr>
                            <tr>
                              <td>Allergy Testing</td>
                              <td>$234</td>
                            </tr>
                            <tr>
                              <td>Bronshoscopy</td>
                              <td>$245</td>
                            </tr>
                            <tr>
                              <td>Paratyroid Scan</td>
                              <td>$78</td>
                            </tr>                                            
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>   
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="header">
                      <h2><strong>Treatments</strong></h2>
                      <ul className="header-dropdown m-r--5">                                    
                        <li className="remove">
                          <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                        </li>
                      </ul>
                    </div>
                    <div className="body">
                      <div className="table-responsive">
                        <table className="table table-hover m-b-0">
                          <tbody>
                            <tr>
                              <td>Colonoscopy</td>
                              <td>$120</td>
                            </tr>
                            <tr>
                              <td>Gastroscopy</td>
                              <td>$122</td>
                            </tr>
                            <tr>
                              <td>Paratyroid Scan</td>
                              <td>$234</td>
                            </tr>
                            <tr>
                              <td>Bronshoscopy</td>
                              <td>$245</td>
                            </tr>
                            <tr>
                              <td>Paratyroid Scan</td>
                              <td>$78</td>
                            </tr>                                            
                          </tbody>
                        </table>
                      </div>                                
                    </div>
                  </div>   
                </div>
              </div>
            </div>            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Moredepartment;