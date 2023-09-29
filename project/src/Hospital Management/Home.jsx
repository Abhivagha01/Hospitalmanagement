import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


function Home() {
  var { id } = useParams();

  const [name, setname] = useState();
  const [specialist, setspecialist] = useState();
  const [image, setimage] = useState();




  useEffect(() => {
    var params = new FormData();
    params.set('id', id);


    axios.post("http://localhost/abhik/Docter/docteredit.php", params).then((result) => {
      if (result.status == 200) {
        const data = result.data;
        console.log(data);
        setname(result.data.name);
        setspecialist(result.data.specialist);
        setimage(result.dataimage);
      }
    })
  }, []);

  return (
    <div>
      {/* TOP BAR */}
      <nav className="navbar p-l-5 p-r-5">
        <ul className="nav navbar-nav navbar-left">
          <li>
            <div className="navbar-header">
              <a href="javascript:void(0);" className="bars" />
              <Link className="navbar-brand" to="/dashboard"><img src="assets/images/loader.svg" alt="Oreo" width={30} /><span className="m-l-10">Oreo</span></Link>
            </div>
          </li>
          <li><a href="javascript:void(0);" className="ls-toggle-btn" data-close="true"><i className="zmdi zmdi-swap" /></a></li>
          <li className="d-none d-lg-inline-block"><Link to="/event" title="Events"><i className="zmdi zmdi-calendar" /></Link></li>
          <li className="d-none d-lg-inline-block"><Link to="/mailinbox" title="Inbox"><i className="zmdi zmdi-email" /></Link></li>
          <li><Link to="/admincontact" title="Contact List"><i className="zmdi zmdi-account-box-phone" /></Link></li>
          <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button"><i className="zmdi zmdi-notifications" />
            <div className="notify"><span className="heartbit" /><span className="point" /></div>
          </a>
            <ul className="dropdown-menu pullDown">
              <li className="body">
                <ul className="menu list-unstyled">
                  <li>
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object" src="hospital management Admin/assets/images/xs/avatar2.jpg" alt="" />
                        <div className="media-body">
                          <span className="name">Sophia <span className="time">30min ago</span></span>
                          <span className="message">There are many variations of passages</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object" src="hospital management Admin/assets/images/xs/avatar3.jpg" alt="" />
                        <div className="media-body">
                          <span className="name">Sophia <span className="time">31min ago</span></span>
                          <span className="message">There are many variations of passages of Lorem Ipsum</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object" src="hospital management Admin/assets/images/xs/avatar4.jpg" alt="" />
                        <div className="media-body">
                          <span className="name">Isabella <span className="time">35min ago</span></span>
                          <span className="message">There are many variations of passages</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object" src="hospital management Admin/assets/images/xs/avatar5.jpg" alt="" />
                        <div className="media-body">
                          <span className="name">Alexander <span className="time">35min ago</span></span>
                          <span className="message">Contrary to popular belief, Lorem Ipsum random</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object" src="hospital management Admin/assets/images/xs/avatar6.jpg" alt="" />
                        <div className="media-body">
                          <span className="name">Grayson <span className="time">1hr ago</span></span>
                          <span className="message">There are many variations of passages</span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer"> <a href="javascript:void(0);">View All</a> </li>
            </ul>
          </li>
          <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button"><i className="zmdi zmdi-flag" />
            <div className="notify">
              <span className="heartbit" />
              <span className="point" />
            </div>
          </a>
            <ul className="dropdown-menu pullDown">
              <li className="header">Project</li>
              <li className="body">
                <ul className="menu tasks list-unstyled">
                  <li>
                    <a href="javascript:void(0);">
                      <div className="progress-container progress-primary">
                        <span className="progress-badge">Neurology</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} style={{ width: '86%' }}>
                            <span className="progress-value">86%</span>
                          </div>
                        </div>
                        <ul className="list-unstyled team-info">
                          <li className="m-r-15"><small className="text-muted">Team</small></li>
                          <li>
                            <img src="hospital management Admin/assets/images/xs/avatar2.jpg" alt="Avatar" />
                          </li>
                          <li>
                            <img src="hospital management Admin/assets/images/xs/avatar3.jpg" alt="Avatar" />
                          </li>
                          <li>
                            <img src="hospital management Admin/assets/images/xs/avatar4.jpg" alt="Avatar" />
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <div className="progress-container progress-info">
                        <span className="progress-badge">Gynecology</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} style={{ width: '45%' }}>
                            <span className="progress-value">45%</span>
                          </div>
                        </div>
                        <ul className="list-unstyled team-info">
                          <li className="m-r-15"><small className="text-muted">Team</small></li>
                          <li>
                            <img src="hospital management Admin/assets/images/xs/avatar10.jpg" alt="Avatar" />
                          </li>
                          <li>
                            <img src="hospital management Admin/assets/images/xs/avatar9.jpg" alt="Avatar" />
                          </li>
                          <li>
                            <img src="hospital management Admin/assets/images/xs/avatar8.jpg" alt="Avatar" />
                          </li>
                          <li>
                            <img src="hospital management Admin/assets/images/xs/avatar7.jpg" alt="Avatar" />
                          </li>
                          <li>
                            <img src="hospital management Admin/assets/images/xs/avatar6.jpg" alt="Avatar" />
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <div className="progress-container progress-warning">
                        <span className="progress-badge">Cardio Monitoring</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" aria-valuenow={29} aria-valuemin={0} aria-valuemax={100} style={{ width: '29%' }}>
                            <span className="progress-value">29%</span>
                          </div>
                        </div>
                        <ul className="list-unstyled team-info">
                          <li className="m-r-15"><small className="text-muted">Team</small></li>
                          <li>
                            <img src="hospital management Admin/assets/images/xs/avatar5.jpg" alt="Avatar" />
                          </li>
                          <li>
                            <img src="hospital management Admin/assets/images/xs/avatar2.jpg" alt="Avatar" />
                          </li>
                          <li>
                            <img src="hospital management Admin/assets/images/xs/avatar7.jpg" alt="Avatar" />
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer"><a href="javascript:void(0);">View All</a></li>
            </ul>
          </li>
          <li className="d-none d-md-inline-block">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search..." />
              <span className="input-group-addon">
                <i className="zmdi zmdi-search" />
              </span>
            </div>
          </li>
          <li className="float-right">
            <Link to="/index" className="mega-menu" data-close="true"><i class="fa-solid fa-eye"></i></Link>
            <Link to="/signin" className="mega-menu" data-close="true"><i class="fa-solid fa-right-from-bracket"></i></Link>
            <a href="javascript:void(0);" className="js-right-sidebar" data-close="true"><i className="zmdi zmdi-settings zmdi-hc-spin" /></a>
          </li>
        </ul>
      </nav>

      {/* Left Sidebar */}
      <aside id="leftsidebar" className="sidebar">
        <ul className="nav nav-tabs">
          <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#dashboard"><i className="zmdi zmdi-home m-r-5" />Oreo</a></li>
          <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#user">Doctor</a></li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane stretchRight active" id="dashboard">
            <div className="menu">
              <ul className="list">
                <li>
                  <div className="user-info">
                    <div className="image">
                      <a href="profile.html">
                        <img src={`${image}`} alt="User" />
                      </a>
                    </div>
                    <div className="detail">
                      <h4>{name}</h4>
                      <small>{specialist}</small>
                    </div>
                  </div>
                </li>
                <li className="header">MAIN</li>
                <li className="active open"><Link to="/dashboard"><i className="zmdi zmdi-home" /><span>Dashboard</span></Link></li>
                <li><Link to="/bookappointment"><i className="zmdi zmdi-calendar-check" /><span>Appointment</span> </Link></li>
                <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-account-add" /><span>Doctors</span> </a>
                  <ul className="ml-menu">
                    <li><Link to="/admindoctors">All Doctors</Link></li>
                    <li><Link to="/adddoctor">Add Doctor</Link></li>
                    <li><Link to="/profile">Doctor Profile</Link></li>
                    <li><Link to="/event">Doctor Schedule</Link></li>
                  </ul>
                </li>
                <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-account-o" /><span>Patients</span> </a>
                  <ul className="ml-menu">
                    <li><Link to="/allpatients">All Patients</Link></li>
                    <li><Link to="/addpatient">Add Patient</Link></li>
                    <li><Link to="/patientprofile">Patient Profile</Link></li>
                    <li><Link to="/patientinvoice">Invoice</Link></li>
                  </ul>
                </li>
                <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-balance-wallet" /><span>Payments</span> </a>
                  <ul className="ml-menu">
                    <li><Link to="/payments">Payments</Link></li>
                    <li><Link to="/addpayments">Add Payment</Link></li>
                    <li><Link to="/invoice">Invoice</Link></li>
                  </ul>
                </li>
                <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-label-alt" /><span>Departments</span> </a>
                  <ul className="ml-menu">
                    <li><Link to="/adddepartments">Add</Link></li>
                    <li><Link to="/alldepartments">All Departments</Link></li>
                    <li><a href="javascript:void(0);">Cardiology</a></li>
                    <li><a href="javascript:void(0);">Pulmonology</a></li>
                    <li><a href="javascript:void(0);">Gynecology</a></li>
                    <li><a href="javascript:void(0);">Neurology</a></li>
                    <li><a href="javascript:void(0);">Urology</a></li>
                    <li><a href="javascript:void(0);">Gastrology</a></li>
                    <li><a href="javascript:void(0);">Pediatrician</a></li>
                    <li><a href="javascript:void(0);">Laboratory</a></li>
                  </ul>
                </li>
                <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-lock" /><span>Authentication</span> </a>
                  <ul className="ml-menu">
                    <li><Link to="/signin">Sign In</Link> </li>
                    <li><Link to="/signup">Sign Up</Link> </li>
                    <li><Link to="/forgotpassword">Forgot Password</Link> </li>
                    <li><Link to="/page404">Page 404</Link> </li>
                    <li><Link to="/page500">Page 500</Link> </li>
                    <li><Link to="/pageoffline">Page Offline</Link> </li>
                    <li><Link to="/locked">Locked Screen</Link> </li>
                  </ul>
                </li>
                <li className="header">EXTRA COMPONENTS</li>
                <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-blogger" /><span>Blog</span></a>
                  <ul className="ml-menu">
                    <li><Link to="/blogdashboard">Blog Dashboard</Link></li>
                    <li><Link to="/blogpost">New Post</Link></li>
                    <li><Link to="/bloglist">Blog List</Link></li>
                    <li><Link to="/bloggrid">Blog Grid</Link></li>
                    <li><Link to="/blogdetails">Blog Single</Link></li>
                  </ul>
                </li>
                <li><a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-folder" /><span>File Manager</span> </a>
                  <ul className="ml-menu">
                    <li><Link to="/filedashboard">Al File</Link></li>
                    <li><Link to="/filedocuments">Documents</Link></li>
                    <li><Link to="/filemedia">Media</Link></li>
                    <li><Link to="/fileimages">Images</Link></li>
                  </ul>
                </li>
                <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-apps" /><span>App</span> </a>
                  <ul className="ml-menu">
                    <li><Link to="/mail-inbox">Inbox</Link></li>
                    <li><Link to="/chat">Chat</Link></li>
                    <li><Link to="/contact">Contact list</Link></li>
                  </ul>
                </li>
                <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-delicious" /><span>Widgets</span> </a>
                  <ul className="ml-menu">
                    <li><Link to="/widgetsapp">Apps Widgetse</Link></li>
                    <li><Link to="/widgetsdata">Data Widgetse</Link></li>
                  </ul>
                </li>
                <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-copy" /><span>Sample Pages</span> </a>
                  <ul className="ml-menu">
                    <li><Link to="/blank">Blank Page</Link> </li>
                    <li><Link to="https://thememakker.com/templates/oreo/hospital/html/rtl/index.html">RTL Support</Link></li>
                    <li><Link to="/imagegallery">Image Gallery</Link> </li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/timeline">Timeline</Link></li>
                    <li><Link to="/invoice">Invoices</Link></li>
                    <li><Link to="/searchresults">Search Results</Link></li>
                  </ul>
                </li>
                <li> <a href="javascript:void(0);" className="menu-toggle"><i className="zmdi zmdi-swap-alt" /><span>User Interface (UI)</span> </a>
                  <ul className="ml-menu">
                    <li><Link to="/ui_kit">UI KIT</Link></li>
                    <li><Link to="/alerts">Alerts</Link></li>
                    <li><Link to="/collapse">Collapse</Link></li>
                    <li><Link to="/colors">Colors</Link></li>
                    <li><Link to="/dialogs">Dialogs</Link></li>
                    <li><Link to="/icons">Icons</Link></li>
                    <li><Link to="/listgroup">List Group</Link></li>
                    <li><Link to="/mediaobject">Media Object</Link></li>
                    <li><Link to="/modals">Modals</Link></li>
                    <li><Link to="/notifications">Notifications</Link></li>
                    <li><Link to="/progressbars">Progress Bars</Link></li>
                    <li><Link to="/range-sliders">Range Sliders</Link></li>
                    <li><Link to="/sortable-nestable">Sortable &amp; Nestable</Link></li>
                    <li><Link to="/tabs">Tabs</Link></li>
                    <li><Link to="/waves">Waves</Link></li>
                  </ul>
                </li>
                <li className="header">Extra</li>
                <li>
                  <div className="progress-container progress-primary m-t-10">
                    <span className="progress-badge">Traffic this Month</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={67} aria-valuemin={0} aria-valuemax={100} style={{ width: '67%' }}>
                        <span className="progress-value">67%</span>
                      </div>
                    </div>
                  </div>
                  <div className="progress-container progress-info">
                    <span className="progress-badge">Server Load</span>
                    <div className="progress">
                      <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} style={{ width: '86%' }}>
                        <span className="progress-value">86%</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-pane stretchLeft" id="user">
            <div className="menu">
              <ul className="list">
                <li>
                  <div className="user-info m-b-20 p-b-15">
                    <div className="image"><a href="profile.html"><img src="hospital management Admin/assets/images/profile_av.jpg" alt="User" /></a></div>
                    <div className="detail">
                      <h4>{name}</h4>
                      <small>{specialist}</small>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <a title="facebook" href="#"><i className="zmdi zmdi-facebook" /></a>
                        <a title="twitter" href="#"><i className="zmdi zmdi-twitter" /></a>
                        <a title="instagram" href="#"><i className="zmdi zmdi-instagram" /></a>
                      </div>
                      <div className="col-4 p-r-0">
                        <h5 className="m-b-5">18</h5>
                        <small>Exp</small>
                      </div>
                      <div className="col-4">
                        <h5 className="m-b-5">125</h5>
                        <small>Awards</small>
                      </div>
                      <div className="col-4 p-l-0">
                        <h5 className="m-b-5">148</h5>
                        <small>Clients</small>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <small className="text-muted">Location: </small>
                  <p>795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                  <hr />
                  <small className="text-muted">Email address: </small>
                  <p>Charlotte@example.com</p>
                  <hr />
                  <small className="text-muted">Phone: </small>
                  <p>+ 202-555-0191</p>
                  <hr />
                  <small className="text-muted">Website: </small>
                  <p>dr.charlotte.com/ </p>
                  <hr />
                  <ul className="list-unstyled">
                    <li>
                      <div>Colorectal Surgery</div>
                      <div className="progress m-b-20">
                        <div className="progress-bar l-blue " role="progressbar" aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} style={{ width: '89%' }}> <span className="sr-only">62% Complete</span> </div>
                      </div>
                    </li>
                    <li>
                      <div>Endocrinology</div>
                      <div className="progress m-b-20">
                        <div className="progress-bar l-green " role="progressbar" aria-valuenow={56} aria-valuemin={0} aria-valuemax={100} style={{ width: '56%' }}> <span className="sr-only">87% Complete</span> </div>
                      </div>
                    </li>
                    <li>
                      <div>Dermatology</div>
                      <div className="progress m-b-20">
                        <div className="progress-bar l-amber" role="progressbar" aria-valuenow={78} aria-valuemin={0} aria-valuemax={100} style={{ width: '78%' }}> <span className="sr-only">32% Complete</span> </div>
                      </div>
                    </li>
                    <li>
                      <div>Neurophysiology</div>
                      <div className="progress m-b-20">
                        <div className="progress-bar l-blush" role="progressbar" aria-valuenow={43} aria-valuemin={0} aria-valuemax={100} style={{ width: '43%' }}> <span className="sr-only">56% Complete</span> </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>

      {/* Right Sidebar */}
      <aside id="rightsidebar" className="right-sidebar">
        <ul className="nav nav-tabs">
          <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#setting"><i className="zmdi zmdi-settings zmdi-hc-spin" /></a></li>
          <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#chat"><i className="zmdi zmdi-comments" /></a></li>
          <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#activity">Activity</a></li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane slideRight active" id="setting">
            <div className="slim_scroll">
              <div className="card">
                <h6>General Settings</h6>
                <ul className="setting-list list-unstyled">
                  <li>
                    <div className="checkbox">
                      <input id="checkbox1" type="checkbox" />
                      <label htmlFor="checkbox1">Report Panel Usage</label>
                    </div>
                  </li>
                  <li>
                    <div className="checkbox">
                      <input id="checkbox2" type="checkbox" defaultChecked />
                      <label htmlFor="checkbox2">Email Redirect</label>
                    </div>
                  </li>
                  <li>
                    <div className="checkbox">
                      <input id="checkbox3" type="checkbox" defaultChecked />
                      <label htmlFor="checkbox3">Notifications</label>
                    </div>
                  </li>
                  <li>
                    <div className="checkbox">
                      <input id="checkbox4" type="checkbox" defaultChecked />
                      <label htmlFor="checkbox4">Auto Updates</label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card">
                <h6>Skins</h6>
                <ul className="choose-skin list-unstyled">
                  <li data-theme="purple">
                    <div className="purple" />
                  </li>
                  <li data-theme="blue">
                    <div className="blue" />
                  </li>
                  <li data-theme="cyan" className="active">
                    <div className="cyan" />
                  </li>
                  <li data-theme="green">
                    <div className="green" />
                  </li>
                  <li data-theme="orange">
                    <div className="orange" />
                  </li>
                  <li data-theme="blush">
                    <div className="blush" />
                  </li>
                </ul>
              </div>
              <div className="card">
                <h6>Account Settings</h6>
                <ul className="setting-list list-unstyled">
                  <li>
                    <div className="checkbox">
                      <input id="checkbox5" type="checkbox" defaultChecked />
                      <label htmlFor="checkbox5">Offline</label>
                    </div>
                  </li>
                  <li>
                    <div className="checkbox">
                      <input id="checkbox6" type="checkbox" defaultChecked />
                      <label htmlFor="checkbox6">Location Permission</label>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card theme-light-dark">
                <h6>Left Menu</h6>
                <button className="t-light btn btn-default btn-simple btn-round btn-block">Light</button>
                <button className="t-dark btn btn-default btn-round btn-block">Dark</button>
                <button className="m_img_btn btn btn-primary btn-round btn-block">Sidebar Image</button>
              </div>
              <div className="card">
                <h6>Information Summary</h6>
                <div className="row m-b-20">
                  <div className="col-7">
                    <small className="displayblock">MEMORY USAGE</small>
                    <h5 className="m-b-0 h6">512</h5>
                  </div>
                  <div className="col-5">
                    <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-width={5} data-bar-spacing={3} data-bar-color="#00ced1">8,7,9,5,6,4,6,8</div>
                  </div>
                </div>
                <div className="row m-b-20">
                  <div className="col-7">
                    <small className="displayblock">CPU USAGE</small>
                    <h5 className="m-b-0 h6">90%</h5>
                  </div>
                  <div className="col-5">
                    <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-width={5} data-bar-spacing={3} data-bar-color="#F15F79">6,5,8,2,6,4,6,4</div>
                  </div>
                </div>
                <div className="row m-b-20">
                  <div className="col-7">
                    <small className="displayblock">DAILY TRAFFIC</small>
                    <h5 className="m-b-0 h6">25 142</h5>
                  </div>
                  <div className="col-5">
                    <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-width={5} data-bar-spacing={3} data-bar-color="#78b83e">7,5,8,7,4,2,6,5</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-7">
                    <small className="displayblock">DISK USAGE</small>
                    <h5 className="m-b-0 h6">60.10%</h5>
                  </div>
                  <div className="col-5">
                    <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-width={5} data-bar-spacing={3} data-bar-color="#457fca">7,5,2,5,6,7,6,4</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane right_chat stretchLeft" id="chat">
            <div className="slim_scroll">
              <div className="card">
                <div className="search">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search..." />
                    <span className="input-group-addon">
                      <i className="zmdi zmdi-search" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="card">
                <h6>Recent</h6>
                <ul className="list-unstyled">
                  <li className="online">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="hospital management Admin/images/xs/avatar4.jpg" alt="" />
                        <div className="media-body">
                          <span className="name">Sophia</span>
                          <span className="message">There are many variations of passages of Lorem Ipsum available</span>
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="online">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="hospital management Admin/images/xs/avatar5.jpg" alt="" />
                        <div className="media-body">
                          <span className="name">Grayson</span>
                          <span className="message">All the Lorem Ipsum generators on the</span>
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="offline">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="hospital management Admin/images/xs/avatar2.jpg" alt="" />
                        <div className="media-body">
                          <span className="name">Isabella</span>
                          <span className="message">Contrary to popular belief, Lorem Ipsum</span>
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="me">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="hospital management Admin/images/xs/avatar1.jpg" alt="" />
                        <div className="media-body">
                          <span className="name">John</span>
                          <span className="message">It is a long established fact that a reader</span>
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="online">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="hospital management Admin/images/xs/avatar3.jpg" alt="" />
                        <div className="media-body">
                          <span className="name">Alexander</span>
                          <span className="message">Richard McClintock, a Latin professor</span>
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card">
                <h6>Contacts</h6>
                <ul className="list-unstyled">
                  <li className="offline inlineblock">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="hospital management Admin/images/xs/avatar10.jpg" alt="" />
                        <div className="media-body">
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="offline inlineblock">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="hospital management Admin/images/xs/avatar6.jpg" alt="" />
                        <div className="media-body">
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="offline inlineblock">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="hospital management Admin/images/xs/avatar7.jpg" alt="" />
                        <div className="media-body">
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="offline inlineblock">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="hospital management Admin/images/xs/avatar8.jpg" alt="" />
                        <div className="media-body">
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="offline inlineblock">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="hospital management Admin/images/xs/avatar9.jpg" alt="" />
                        <div className="media-body">
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="online inlineblock">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="hospital management Admin/images/xs/avatar5.jpg" alt="" />
                        <div className="media-body">
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="offline inlineblock">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="hospital management Admin/images/xs/avatar4.jpg" alt="" />
                        <div className="media-body">
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="offline inlineblock">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="hospital management Admin/images/xs/avatar3.jpg" alt="" />
                        <div className="media-body">
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="online inlineblock">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="hospital management Admin/images/xs/avatar2.jpg" alt="" />
                        <div className="media-body">
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="offline inlineblock">
                    <a href="javascript:void(0);">
                      <div className="media">
                        <img className="media-object " src="hospital management Admin/images/xs/avatar1.jpg" alt="" />
                        <div className="media-body">
                          <span className="badge badge-outline status" />
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-pane slideLeft" id="activity">
            <div className="slim_scroll">
              <div className="card user_activity">
                <h6>Recent Activity</h6>
                <div className="streamline b-accent">
                  <div className="sl-item">
                    <img className="user rounded-circle" src="hospital management Admin/images/xs/avatar4.jpg" alt="" />
                    <div className="sl-content">
                      <h5 className="m-b-0">Admin Birthday</h5>
                      <small>Jan 21 <a href="javascript:void(0);" className="text-info">Sophia</a>.</small>
                    </div>
                  </div>
                  <div className="sl-item">
                    <img className="user rounded-circle" src="hospital management Admin/images/xs/avatar5.jpg" alt="" />
                    <div className="sl-content">
                      <h5 className="m-b-0">Add New Contact</h5>
                      <small>30min ago <a href="javascript:void(0);">Alexander</a>.</small>
                      <small><strong>P:</strong> +264-625-2323</small>
                      <small><strong>E:</strong> maryamamiri@gmail.com</small>
                    </div>
                  </div>
                  <div className="sl-item">
                    <img className="user rounded-circle" src="hospital management Admin/images/xs/avatar6.jpg" alt="" />
                    <div className="sl-content">
                      <h5 className="m-b-0">Code Change</h5>
                      <small>Today <a href="javascript:void(0);">Grayson</a>.</small>
                      <small>The standard chunk of Lorem Ipsum used since the 1500s is reproduced</small>
                    </div>
                  </div>
                  <div className="sl-item">
                    <img className="user rounded-circle" src="hospital management Admin/images/xs/avatar7.jpg" alt="" />
                    <div className="sl-content">
                      <h5 className="m-b-0">New Email</h5>
                      <small>45min ago <a href="javascript:void(0);" className="text-info">Fidel Tonn</a>.</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <h6>Recent Attachments</h6>
                <ul className="list-unstyled activity">
                  <li>
                    <a href="javascript:void(0)">
                      <i className="zmdi zmdi-collection-pdf l-blush" />
                      <div className="info">
                        <h4>info_258.pdf</h4>
                        <small>2MB</small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="zmdi zmdi-collection-text l-amber" />
                      <div className="info">
                        <h4>newdoc_214.doc</h4>
                        <small>900KB</small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="zmdi zmdi-image l-parpl" />
                      <div className="info">
                        <h4>MG_4145.jpg</h4>
                        <small>5.6MB</small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="zmdi zmdi-image l-parpl" />
                      <div className="info">
                        <h4>MG_4100.jpg</h4>
                        <small>5MB</small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="zmdi zmdi-collection-text l-amber" />
                      <div className="info">
                        <h4>Reports_end.doc</h4>
                        <small>780KB</small>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="zmdi zmdi-videocam l-turquoise" />
                      <div className="info">
                        <h4>movie2018.MKV</h4>
                        <small>750MB</small>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Chat-launcher */}
      <div className="chat-launcher">
        <div className="chat-wrapper">
          <div className="card">
            <div className="header">
              <ul className="list-unstyled team-info margin-0">
                <li className="m-r-15"><h2>Dr. Team</h2></li>
                <li>
                  <img src="hospital management Admin/images/xs/avatar2.jpg" alt="Avatar" />
                </li>
                <li>
                  <img src="hospital management Admin/images/xs/avatar3.jpg" alt="Avatar" />
                </li>
                <li>
                  <img src="hospital management Admin/images/xs/avatar4.jpg" alt="Avatar" />
                </li>
                <li>
                  <img src="hospital management Admin/images/xs/avatar6.jpg" alt="Avatar" />
                </li>
                <li>
                  <a href="javascript:void(0);" title="Add Member"><i className="zmdi zmdi-plus-circle" /></a>
                </li>
              </ul>
            </div>
            <div className="body">
              <div className="chat-widget">
                <ul className="chat-scroll-list clearfix">
                  <li className="left float-left">
                    <img src="hospital management Admin/images/xs/avatar3.jpg" className="rounded-circle" alt="" />
                    <div className="chat-info">
                      <a className="name" href="#">Alexander</a>
                      <span className="datetime">6:12</span>
                      <span className="message">Hello, John </span>
                    </div>
                  </li>
                  <li className="right">
                    <div className="chat-info"><span className="datetime">6:15</span> <span className="message">Hi, Alexander<br /> How are you!</span> </div>
                  </li>
                  <li className="right">
                    <div className="chat-info"><span className="datetime">6:16</span> <span className="message">There are many variations of passages of Lorem Ipsum available</span> </div>
                  </li>
                  <li className="left float-left"> <img src="hospital management Admin/images/xs/avatar2.jpg" className="rounded-circle" alt="" />
                    <div className="chat-info"> <a className="name" href="#">Elizabeth</a> <span className="datetime">6:25</span> <span className="message">Hi, Alexander,<br /> John <br /> What are you doing?</span> </div>
                  </li>
                  <li className="left float-left"> <img src="hospital management Admin/images/xs/avatar1.jpg" className="rounded-circle" alt="" />
                    <div className="chat-info"> <a className="name" href="#">Michael</a> <span className="datetime">6:28</span> <span className="message">I would love to join the team.</span> </div>
                  </li>
                  <li className="right">
                    <div className="chat-info"><span className="datetime">7:02</span> <span className="message">Hello, <br />Michael</span> </div>
                  </li>
                </ul>
              </div>
              <div className="input-group p-t-15">
                <input type="text" className="form-control" placeholder="Enter text here..." />
                <span className="input-group-addon">
                  <i className="zmdi zmdi-mail-send" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home