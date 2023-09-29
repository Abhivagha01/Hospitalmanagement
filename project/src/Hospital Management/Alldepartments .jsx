import React from 'react'
import { Link } from 'react-router-dom';
import Home from './Home';

function Alldepartments() {
  return (
    <div className='theme-cyan'>
      <Home/>
      <section className="content">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-7 col-md-5 col-sm-12">
              <h2>All Departments
                <small>Welcome to Oreo</small>
              </h2>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-12">
              <button className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                <i className="zmdi zmdi-plus" />
              </button>
              <ul className="breadcrumb float-md-right">
                <li className="breadcrumb-item"><Link to="/dashboard"><i className="zmdi zmdi-home" /> Oreo</Link></li>
                <li className="breadcrumb-item"><a href="javascript:void(0);">Departments</a></li>
                <li className="breadcrumb-item active">Alle</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card project_widget">
                <div className="pw_img">
                  <img className="img-fluid" src="hospital management Admin/assets/images/image1.jpg" alt="About the image" />
                </div>
                <div className="pw_content">
                  <div className="pw_header">
                    <h6>Cardiology</h6>
                    <ul className="list-unstyled team-info margin-0 p-t-15">
                      <li className="m-r-15"><small>Team</small></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar3.jpg" alt="Avatar" /></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar4.jpg" alt="Avatar" /></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar6.jpg" alt="Avatar" /></li>
                      <li><a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a></li>
                    </ul>
                  </div>
                  <div className="pw_meta">
                    <p>How all this mistaken al idea of denouncing pleasure praisings pain was complete[hospital management Admin.]</p>
                    <Link to="/moreDepartments" className="btn btn-primary btn-simple btn-round">More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card project_widget">
                <div className="pw_img">
                  <img className="img-fluid" src="hospital management Admin/assets/images/image2.jpg" alt="About the image" />
                </div>
                <div className="pw_content">
                  <div className="pw_header">
                    <h6>Pulmonology</h6>
                    <ul className="list-unstyled team-info margin-0 p-t-15">
                      <li className="m-r-15"><small>Team</small></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar3.jpg" alt="Avatar" /></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar4.jpg" alt="Avatar" /></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar6.jpg" alt="Avatar" /></li>
                      <li><a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a></li>
                    </ul>
                  </div>
                  <div className="pw_meta">
                    <p>Who chooses to enjoy a pleasure that has consquences, or one who avoids a pain.[hospital management Admin.]</p>
                    <button className="btn btn-primary btn-simple btn-round">More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card project_widget">
                <div className="pw_img">
                  <img className="img-fluid" src="hospital management Admin/assets/images/image3.jpg" alt="About the image" />
                </div>
                <div className="pw_content">
                  <div className="pw_header">
                    <h6>Gynecology</h6>
                    <ul className="list-unstyled team-info margin-0 p-t-15">
                      <li className="m-r-15"><small>Team</small></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar3.jpg" alt="Avatar" /></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar4.jpg" alt="Avatar" /></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar6.jpg" alt="Avatar" /></li>
                      <li><a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a></li>
                    </ul>
                  </div>
                  <div className="pw_meta">
                    <p>Who chooses to enjoy a pleasure that has annoying, or one who avoids a pain.[hospital management Admin.]</p>
                    <button className="btn btn-primary btn-simple btn-round">More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card project_widget">
                <div className="pw_img">
                  <img className="img-fluid" src="hospital management Admin/assets/images/image4.jpg" alt="About the image" />
                </div>
                <div className="pw_content">
                  <div className="pw_header">
                    <h6>Neurology</h6>
                    <ul className="list-unstyled team-info margin-0 p-t-15">
                      <li className="m-r-15"><small>Team</small></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar9.jpg" alt="Avatar" /></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar10.jpg" alt="Avatar" /></li>
                      <li><a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a></li>
                    </ul>
                  </div>
                  <div className="pw_meta">
                    <p>How all this mistaken al idea of denouncing pleasure praisings pain was complete[hospital management Admin.]</p>
                    <button className="btn btn-primary btn-simple btn-round">More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card project_widget">
                <div className="pw_img">
                  <img className="img-fluid" src="hospital management Admin/assets/images/image5.jpg" alt="About the image" />
                </div>
                <div className="pw_content">
                  <div className="pw_header">
                    <h6>Urology</h6>
                    <ul className="list-unstyled team-info margin-0 p-t-15">
                      <li className="m-r-15"><small>Team</small></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar5.jpg" alt="Avatar" /></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar7.jpg" alt="Avatar" /></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar8.jpg" alt="Avatar" /></li>
                      <li><a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a></li>
                    </ul>
                  </div>
                  <div className="pw_meta">
                    <p>Who chooses to enjoy a pleasure that has consquences, or one who avoids a pain.[hospital management Admin.]</p>
                    <button className="btn btn-primary btn-simple btn-round">More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card project_widget">
                <div className="pw_img">
                  <img className="img-fluid" src="hospital management Admin/assets/images/image6.jpg" alt="About the image" />
                </div>
                <div className="pw_content">
                  <div className="pw_header">
                    <h6>Gastrology</h6>
                    <ul className="list-unstyled team-info margin-0 p-t-15">
                      <li className="m-r-15"><small>Team</small></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar1.jpg" alt="Avatar" /></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar8.jpg" alt="Avatar" /></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar6.jpg" alt="Avatar" /></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar10.jpg" alt="Avatar" /></li>
                      <li><a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a></li>
                    </ul>
                  </div>
                  <div className="pw_meta">
                    <p>Who chooses to enjoy a pleasure that has annoying, or one who avoids a pain.[hospital management Admin.]</p>
                    <button className="btn btn-primary btn-simple btn-round">More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card project_widget">
                <div className="pw_img">
                  <img className="img-fluid" src="hospital management Admin/assets/images/image7.jpg" alt="About the image" />
                </div>
                <div className="pw_content">
                  <div className="pw_header">
                    <h6>Pediatrician</h6>
                    <ul className="list-unstyled team-info margin-0 p-t-15">
                      <li className="m-r-15"><small>Team</small></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar9.jpg" alt="Avatar" /></li>
                      <li><a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a></li>
                    </ul>
                  </div>
                  <div className="pw_meta">
                    <p>There anyone loves pursue or desires to pain sed of itself because pain occasionally[hospital management Admin.]</p>
                    <button className="btn btn-primary btn-simple btn-round">More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card project_widget">
                <div className="pw_img">
                  <img className="img-fluid" src="hospital management Admin/assets/images/image1.jpg" alt="About the image" />
                </div>
                <div className="pw_content">
                  <div className="pw_header">
                    <h6>Laboratory</h6>
                    <ul className="list-unstyled team-info margin-0 p-t-15">
                      <li className="m-r-15"><small>Team</small></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar5.jpg" alt="Avatar" /></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar8.jpg" alt="Avatar" /></li>
                      <li><a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a></li>
                    </ul>
                  </div>
                  <div className="pw_meta">
                    <p>Who chooses to enjoy a pleasure that has consquences, or one who avoids a pain.[hospital management Admin.]</p>
                    <button className="btn btn-primary btn-simple btn-round">More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card project_widget">
                <div className="pw_img">
                  <img className="img-fluid" src="hospital management Admin/assets/images/image8.jpg" alt="About the image" />
                </div>
                <div className="pw_content">
                  <div className="pw_header">
                    <h6>Gastrology</h6>
                    <ul className="list-unstyled team-info margin-0 p-t-15">
                      <li className="m-r-15"><small>Team</small></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar1.jpg" alt="Avatar" /></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar2.jpg" alt="Avatar" /></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar8.jpg" alt="Avatar" /></li>
                      <li><img src="hospital management Admin/assets/images/xs/avatar10.jpg" alt="Avatar" /></li>
                      <li><a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a></li>
                    </ul>
                  </div>
                  <div className="pw_meta">
                    <p>Take a trivial example, which of ever undertake laborous physically exercise some[hospital management Admin.]</p>
                    <button className="btn btn-primary btn-simple btn-round">More</button>
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

export default Alldepartments;