import React from 'react'
import Home from './Home';

function Blogdashboard() {
    return (
        <div className='theme-cyan'>
            <Home/>
            <section className="content blog-page">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <h2>Blog Dashboard
                                <small>Welcome to Oreo</small>
                            </h2>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12 text-right">
                            <div className="inlineblock text-center m-r-15 m-l-15 d-none d-lg-inline-block">
                                <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-width={2} data-bar-spacing={5} data-bar-color="#fff">3,2,6,5,9,8,7,9,5,1,3,5,7,4,6</div>
                                <small className="col-white">Visitors</small>
                            </div>
                            <div className="inlineblock text-center m-r-15 m-l-15 d-none d-lg-inline-block">
                                <div className="sparkline" data-type="bar" data-width="97%" data-height="25px" data-bar-width={2} data-bar-spacing={5} data-bar-color="#fff">1,3,5,7,4,6,3,2,6,5,9,8,7,9,5</div>
                                <small className="col-white">Bounce Rate</small>
                            </div>
                            <button className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                                <i className="zmdi zmdi-plus" />
                            </button>
                            <ul className="breadcrumb float-md-right">
                                <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                                <li className="breadcrumb-item">Blog</li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="body text-center">
                                    <div className="sparkline m-b-20" data-type="bar" data-width="97%" data-height="40px" data-bar-width={3} data-bar-spacing={5} data-bar-color="#00ced1">1,2,2,3,3,4,4,5,5,6,6,5,5,4,4,3,3,2,2,1</div>
                                    <h3 className="m-b-0">457 512</h3>
                                    <small className="displayblock">47% Average <i className="zmdi zmdi-trending-up" /></small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="body text-center">
                                    <div className="sparkline m-b-20" data-type="bar" data-width="97%" data-height="40px" data-bar-width={3} data-bar-spacing={5} data-bar-color="#e4d354">1,2,2,3,3,4,4,5,5,6,6,5,5,4,4,3,3,2,2,1</div>
                                    <h3 className="m-b-0">236 512</h3>
                                    <small className="displayblock">13% Average <i className="zmdi zmdi-trending-down" /></small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="body text-center">
                                    <div className="sparkline m-b-20" data-type="bar" data-width="97%" data-height="40px" data-bar-width={3} data-bar-spacing={5} data-bar-color="#7cb5ec">1,2,3,4,5,4,3,2,1,2,3,4,5,6,7,8,7,6,5,4</div>
                                    <h3 className="m-b-0">236 512</h3>
                                    <small className="displayblock">47% Average <i className="zmdi zmdi-trending-up" /></small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="card">
                                <div className="body text-center">
                                    <div className="sparkline m-b-20" data-type="bar" data-width="97%" data-height="40px" data-bar-width={3} data-bar-spacing={5} data-bar-color="#f15c80">8,7,6,5,4,3,2,2,3,4,5,6,7,8,7,6,5,4</div>
                                    <h3 className="m-b-0">236 512</h3>
                                    <small className="displayblock">47% Average <i className="zmdi zmdi-trending-up" /></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12">
                            <div className="card">
                                <div className="header">
                                    <h2><strong>Popular</strong> Categories</h2>
                                    <ul className="header-dropdown">
                                        <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                                            <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                                                <li><a href="javascript:void(0);">Edit</a></li>
                                                <li><a href="javascript:void(0);">Delete</a></li>
                                                <li><a href="javascript:void(0);">Report</a></li>
                                            </ul>
                                        </li>
                                        <li className="remove">
                                            <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <div id="line_chart" className="graph" />
                                    <div className="card xl-slategray">
                                        <ul className="row profile_state list-unstyled">
                                            <li className="col-lg-3 col-md-3 col-6">
                                                <div className="body">
                                                    <i className="zmdi zmdi-eye col-amber" />
                                                    <h4 className="number count-to" data-from={0} data-to={2365} data-speed={1000} data-fresh-interval={700}>2365</h4>
                                                    <span>Post View</span>
                                                </div>
                                            </li>
                                            <li className="col-lg-3 col-md-3 col-6">
                                                <div className="body">
                                                    <i className="zmdi zmdi-thumb-up col-blue" />
                                                    <h4 className="number count-to" data-from={0} data-to={365} data-speed={1000} data-fresh-interval={700}>365</h4>
                                                    <span>Likes</span>
                                                </div>
                                            </li>
                                            <li className="col-lg-3 col-md-3 col-6">
                                                <div className="body">
                                                    <i className="zmdi zmdi-comment-text col-red" />
                                                    <h4 className="number count-to" data-from={0} data-to={65} data-speed={1000} data-fresh-interval={700}>65</h4>
                                                    <span>Comments</span>
                                                </div>
                                            </li>
                                            <li className="col-lg-3 col-md-3 col-6">
                                                <div className="body">
                                                    <i className="zmdi zmdi-account text-success" />
                                                    <h4 className="number count-to" data-from={0} data-to={2055} data-speed={1000} data-fresh-interval={700}>2055</h4>
                                                    <span>Profile Views</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-7 col-md-12">
                            <div className="card visitors-map">
                                <div className="header">
                                    <h2><strong>Visitors</strong> Statistics <small>Description text herehospital management Admin.</small></h2>
                                    <ul className="header-dropdown">
                                        <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                                            <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                                                <li><a href="javascript:void(0);">Edit</a></li>
                                                <li><a href="javascript:void(0);">Delete</a></li>
                                                <li><a href="javascript:void(0);">Report</a></li>
                                            </ul>
                                        </li>
                                        <li className="remove">
                                            <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div id="world-map-markers" className="jvector-map m-b-15" />
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="table-responsive">
                                                <table className="table table-hover m-b-0">
                                                    <thead>
                                                        <tr>
                                                            <th>Contrary</th>
                                                            <th>2016</th>
                                                            <th>2017</th>
                                                            <th>Change</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>USA</td>
                                                            <td>2,009</td>
                                                            <td>3,591</td>
                                                            <td>7.01% <i className="zmdi zmdi-trending-up text-success" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>India</td>
                                                            <td>1,129</td>
                                                            <td>1,361</td>
                                                            <td>3.01% <i className="zmdi zmdi-trending-up text-success" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Canada</td>
                                                            <td>2,009</td>
                                                            <td>2,901</td>
                                                            <td>9.01% <i className="zmdi zmdi-trending-up text-success" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Australia</td>
                                                            <td>954</td>
                                                            <td>901</td>
                                                            <td>5.71% <i className="zmdi zmdi-trending-down text-warning" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Other</td>
                                                            <td>4,236</td>
                                                            <td>4,591</td>
                                                            <td>9.15% <i className="zmdi zmdi-trending-up text-success" /></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="card">
                                <div className="header">
                                    <h2><strong>Browser</strong> Usage</h2>
                                    <ul className="header-dropdown">
                                        <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                                            <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                                                <li><a href="javascript:void(0);">Edit</a></li>
                                                <li><a href="javascript:void(0);">Delete</a></li>
                                                <li><a href="javascript:void(0);">Report</a></li>
                                            </ul>
                                        </li>
                                        <li className="remove">
                                            <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <div id="donut_chart" className="dashboard-donut-chart" />
                                    <table className="table m-b-0">
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Chrome</td>
                                                <td>6985</td>
                                                <td><i className="zmdi zmdi-caret-up text-success" /></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Other</td>
                                                <td>2697</td>
                                                <td><i className="zmdi zmdi-caret-up text-success" /></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Safari</td>
                                                <td>3597</td>
                                                <td><i className="zmdi zmdi-caret-down text-danger" /></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Firefox</td>
                                                <td>2145</td>
                                                <td><i className="zmdi zmdi-caret-up text-success" /></td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Opera</td>
                                                <td>1854</td>
                                                <td><i className="zmdi zmdi-caret-down text-danger" /></td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>IE</td>
                                                <td>54</td>
                                                <td><i className="zmdi zmdi-caret-down text-danger" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card">
                                <div className="body">
                                    <h4 className="m-t-0 m-b-0">2,048</h4>
                                    <p className="m-b-0">Total Leads</p>
                                </div>
                                <div className="sparkline" data-type="line" data-spot-radius={1} data-highlight-spot-color="rgb(233, 30, 99)" data-highlight-line-color="#222" data-min-spot-color="rgb(233, 30, 99)" data-max-spot-color="rgb(0, 150, 136)" data-spot-color="rgb(0, 188, 212)" data-offset={90} data-width="100%" data-height="40px" data-line-width={2} data-line-color="rgba(255, 255, 255, 0.2)" data-fill-color="rgba(0, 0, 0, 0.3)"> 7,6,7,8,5,9,8,6,7 </div>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="header">
                                    <h2><strong>Social</strong> Media</h2>
                                    <ul className="header-dropdown">
                                        <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                                            <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                                                <li><a href="javascript:void(0);">Edit</a></li>
                                                <li><a href="javascript:void(0);">Delete</a></li>
                                                <li><a href="javascript:void(0);">Report</a></li>
                                            </ul>
                                        </li>
                                        <li className="remove">
                                            <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <div className="table-responsive social_media_table">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Media</th>
                                                    <th>Name</th>
                                                    <th>Like</th>
                                                    <th>Comments</th>
                                                    <th>Share</th>
                                                    <th>Members</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><span className="social_icon linkedin"><i className="zmdi zmdi-linkedin" /></span>
                                                    </td>
                                                    <td><span className="list-name">Linked In</span>
                                                        <span className="text-muted">Florida, United States</span>
                                                    </td>
                                                    <td>19K</td>
                                                    <td>14K</td>
                                                    <td>10K</td>
                                                    <td>
                                                        <span className="badge badge-success">2341</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span className="social_icon twitter-table"><i className="zmdi zmdi-twitter" /></span>
                                                    </td>
                                                    <td><span className="list-name">Twitter</span>
                                                        <span className="text-muted">Arkansas, United States</span>
                                                    </td>
                                                    <td>7K</td>
                                                    <td>11K</td>
                                                    <td>21K</td>
                                                    <td>
                                                        <span className="badge badge-success">952</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span className="social_icon facebook"><i className="zmdi zmdi-facebook" /></span>
                                                    </td>
                                                    <td><span className="list-name">Facebook</span>
                                                        <span className="text-muted">Illunois, United States</span>
                                                    </td>
                                                    <td>15K</td>
                                                    <td>18K</td>
                                                    <td>8K</td>
                                                    <td>
                                                        <span className="badge badge-success">6127</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span className="social_icon google"><i className="zmdi zmdi-google-plus" /></span>
                                                    </td>
                                                    <td><span className="list-name">Google Plus</span>
                                                        <span className="text-muted">Arizona, United States</span>
                                                    </td>
                                                    <td>15K</td>
                                                    <td>18K</td>
                                                    <td>154</td>
                                                    <td>
                                                        <span className="badge badge-success">325</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span className="social_icon youtube"><i className="zmdi zmdi-youtube-play" /></span>
                                                    </td>
                                                    <td><span className="list-name">YouTube</span>
                                                        <span className="text-muted">Alaska, United States</span>
                                                    </td>
                                                    <td>15K</td>
                                                    <td>18K</td>
                                                    <td>200</td>
                                                    <td>
                                                        <span className="badge badge-success">160</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-7 col-md-12">
                            <div className="card ">
                                <div className="header">
                                    <h2><strong>Latest</strong> Comments</h2>
                                    <ul className="header-dropdown">
                                        <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                                            <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                                                <li><a href="javascript:void(0);">Edit</a></li>
                                                <li><a href="javascript:void(0);">Delete</a></li>
                                                <li><a href="javascript:void(0);">Report</a></li>
                                            </ul>
                                        </li>
                                        <li className="remove">
                                            <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <ul className="inbox-widget list-unstyled clearfix">
                                        <li className="inbox-inner"><a href="#">
                                        </a><div className="inbox-item"><a href="#">
                                            <div className="inbox-img"> <img src="hospital management Admin/assets/images/sm/avatar1.jpg" className="rounded" alt="" /> </div>
                                            <div className="inbox-item-info">
                                                <p className="author">John Doe</p>
                                                <p className="inbox-message">Lorem Ipsum is simply dummy text of the been the industry's</p>
                                                <p className="inbox-date">12:34 PM</p>
                                            </div>
                                        </a><div className="hover_action"><a href="#">
                                        </a><a href="#"><i className="zmdi zmdi-favorite" /></a>
                                                    <a href="#"><i className="zmdi zmdi-edit" /></a>
                                                    <a href="#"><i className="zmdi zmdi-check-circle" /></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="inbox-inner"> <a href="#">
                                        </a><div className="inbox-item"><a href="#">
                                            <div className="inbox-img"> <img src="hospital management Admin/assets/images/sm/avatar2.jpg" className="rounded" alt="" /> </div>
                                            <div className="inbox-item-info">
                                                <p className="author">Maryam Amiri</p>
                                                <p className="inbox-message">Lorem Ipsum is simply dummyLorem Ipsum has been the industry's</p>
                                                <p className="inbox-date">10:34 AM</p>
                                            </div>
                                        </a><div className="hover_action"><a href="#">
                                        </a><a href="#"><i className="zmdi zmdi-favorite" /></a>
                                                    <a href="#"><i className="zmdi zmdi-edit" /></a>
                                                    <a href="#"><i className="zmdi zmdi-check-circle" /></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="inbox-inner"> <a href="#">
                                        </a><div className="inbox-item"><a href="#">
                                            <div className="inbox-img"> <img src="hospital management Admin/assets/images/sm/avatar3.jpg" className="rounded" alt="" /> </div>
                                            <div className="inbox-item-info">
                                                <p className="author">Fidel Tonn</p>
                                                <p className="inbox-message">text of the printing and  has been the industry's</p>
                                                <p className="inbox-date">15:34 PM</p>
                                            </div>
                                        </a><div className="hover_action"><a href="#">
                                        </a><a href="#"><i className="zmdi zmdi-favorite" /></a>
                                                    <a href="#"><i className="zmdi zmdi-edit" /></a>
                                                    <a href="#"><i className="zmdi zmdi-check-circle" /></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="inbox-inner"> <a href="#">
                                        </a><div className="inbox-item"><a href="#">
                                            <div className="inbox-img"> <img src="hospital management Admin/assets/images/sm/avatar4.jpg" className="rounded" alt="" /> </div>
                                            <div className="inbox-item-info">
                                                <p className="author">Gary Camara</p>
                                                <p className="inbox-message">simply dummy text of the printing and typesetting industry's</p>
                                                <p className="inbox-date">11:10 AM</p>
                                            </div>
                                        </a><div className="hover_action"><a href="#">
                                        </a><a href="#"><i className="zmdi zmdi-favorite" /></a>
                                                    <a href="#"><i className="zmdi zmdi-edit" /></a>
                                                    <a href="#"><i className="zmdi zmdi-check-circle" /></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="inbox-inner"> <a href="#">
                                        </a><div className="inbox-item"><a href="#">
                                            <div className="inbox-img"><img src="hospital management Admin/assets/images/sm/avatar5.jpg" className="rounded" alt="" /> </div>
                                            <div className="inbox-item-info">
                                                <p className="author">Tim Hank</p>
                                                <p className="inbox-message">text of the industry. Lorem Ipsum has been the industry's</p>
                                                <p className="inbox-date">18:45 PM</p>
                                            </div>
                                        </a><div className="hover_action"><a href="#">
                                        </a><a href="#"><i className="zmdi zmdi-favorite" /></a>
                                                    <a href="#"><i className="zmdi zmdi-edit" /></a>
                                                    <a href="#"><i className="zmdi zmdi-check-circle" /></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="inbox-inner"> <a href="#">
                                        </a><div className="inbox-item"><a href="#">
                                            <div className="inbox-img"> <img src="hospital management Admin/assets/images/sm/avatar6.jpg" className="rounded" alt="" /> </div>
                                            <div className="inbox-item-info">
                                                <p className="author">Hossein Shams </p>
                                                <p className="inbox-message">text of the printing and  has been the industry's</p>
                                                <p className="inbox-date">15:34 PM</p>
                                            </div>
                                        </a><div className="hover_action"><a href="#">
                                        </a><a href="#"><i className="zmdi zmdi-favorite" /></a>
                                                    <a href="#"><i className="zmdi zmdi-edit" /></a>
                                                    <a href="#"><i className="zmdi zmdi-check-circle" /></a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="card single_post">
                                <div className="header">
                                    <h2><strong>Latest</strong> Post</h2>
                                    <ul className="header-dropdown">
                                        <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                                            <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                                                <li><a href="javascript:void(0);">Edit</a></li>
                                                <li><a href="javascript:void(0);">Delete</a></li>
                                                <li><a href="javascript:void(0);">Report</a></li>
                                            </ul>
                                        </li>
                                        <li className="remove">
                                            <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <h3 className="m-t-0 m-b-5"><a href="blog-details.html">Apple Introduces Search Ads Basic</a></h3>
                                    <ul className="meta">
                                        <li><a href="#"><i className="zmdi zmdi-account col-blue" />Posted By: John Smith</a></li>
                                        <li><a href="#"><i className="zmdi zmdi-label col-amber" />Technology</a></li>
                                        <li><a href="#"><i className="zmdi zmdi-comment-text col-blue" />Comments: 3</a></li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <div className="img-post m-b-15">
                                        <img src="hospital management Admin/assets/images/blog/blog-page-4.jpg" alt="Awesome Image" />
                                        <div className="social_share">
                                            <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-facebook" /></button>
                                            <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-twitter" /></button>
                                            <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-instagram" /></button>
                                        </div>
                                    </div>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                    <a href="blog-details.html" title="read more" className="btn btn-round btn-info">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blogdashboard;