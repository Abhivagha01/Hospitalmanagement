import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

function Mailinbox() {
  return (
    <div className='theme-cyan'>
        <Home/>
         <section className="content inbox">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-7 col-md-5 col-sm-12">
              <h2>Inbox
                <small>Welcome to Oreo</small>
              </h2>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-12">
              <ul className="breadcrumb float-md-right">
                <li className="breadcrumb-item"><Link to="/dashboard"><i className="zmdi zmdi-home" /> Oreo</Link></li>
                <li className="breadcrumb-item active">Inbox</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-12">
              <div className="card action_bar">
                <div className="body">
                  <div className="row clearfix">
                    <div className="col-lg-1 col-md-2 col-3">
                      <div className="checkbox inlineblock delete_all">
                        <input id="deleteall" type="checkbox" />
                        <label htmlFor="deleteall">
                          All
                        </label>
                      </div>                                
                    </div>
                    <div className="col-lg-5 col-md-4 col-6">
                      <div className="input-group search">
                        <input type="text" className="form-control" placeholder="Searchhospital management Admin." />
                        <span className="input-group-addon">
                          <i className="zmdi zmdi-search" />
                        </span>
                      </div>
                    </div>                            
                    <div className="col-lg-6 col-md-6 col-3 text-right">
                      <div className="btn-group d-none d-md-inline-block">
                        <button type="button" className="btn btn-neutral dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More<span className="caret" /> </button>
                        <ul className="dropdown-menu dropdown-menu-right pullDown">
                          <li><a href="javascript:void(0);">Unread</a></li>
                          <li><a href="javascript:void(0);">Unimportant</a></li>
                          <li><a href="javascript:void(0);">Add star</a></li>
                          <li role="separator" className="divider" />
                          <li><a href="javascript:void(0);">Mute</a></li>
                        </ul>
                      </div>
                      <div className="btn-group d-none d-md-inline-block">
                        <div className="btn-group">
                          <button type="button" className="btn btn-neutral dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="zmdi zmdi-label" />
                            <span className="caret" />
                          </button>
                          <ul className="dropdown-menu dropdown-menu-right pullDown">
                            <li>
                              <a href="javascript:void(0);">Family</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Work</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Google</a>
                            </li>
                            <li role="separator" className="divider" />
                            <li>
                              <a href="javascript:void(0);">Create a Label</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="btn-group d-none d-lg-inline-block d-none d-md-inline-block">
                        <button type="button" className="btn btn-neutral dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-folder" /> <span className="caret" /> </button>
                        <ul className="dropdown-menu dropdown-menu-right pullDown">
                          <li><a href="javascript:void(0);">Important</a></li>
                          <li><a href="javascript:void(0);">Social</a></li>
                          <li><a href="javascript:void(0);">Bank Statements</a></li>
                          <li role="separator" className="divider" />
                          <li><a href="javascript:void(0);">Create a folder</a></li>
                        </ul>
                      </div>                                
                      <button type="button" className="btn btn-neutral d-none d-md-inline-block">
                        <i className="zmdi zmdi-plus-circle" />
                      </button>
                      <button type="button" className="btn btn-neutral d-none d-md-inline-block">
                        <i className="zmdi zmdi-archive" />
                      </button>
                      <button type="button" className="btn btn-neutral btn-danger">
                        <i className="zmdi zmdi-delete" />
                      </button>
                    </div>                            
                  </div>
                </div>
              </div>
            </div>           
          </div>        
          <div className="row clearfix">
            <div className="col-md-12 col-lg-12 col-xl-12">
              <ul className="mail_list list-group list-unstyled">
                <li className="list-group-item">
                  <div className="media">
                    <div className="pull-left">                                
                      <div className="controls">
                        <div className="checkbox">
                          <input type="checkbox" id="basic_checkbox_1" />
                          <label htmlFor="basic_checkbox_1" />
                        </div>
                        <a href="javascript:void(0);" className="favourite text-muted d-none d-md-inline-block" data-toggle="active"><i className="zmdi zmdi-star-outline" /></a>
                      </div>
                      <div className="thumb d-none d-md-inline-block m-r-20"> <img src="hospital management Admin/assets/images/xs/avatar1.jpg" className="rounded-circle" alt="" /> </div>
                    </div>
                    <div className="media-body">
                      <div className="media-heading">
                        <a href="mail-single.html" className="m-r-10">Velit a labore</a>
                        <span className="badge bg-blue">Family</span>
                        <small className="float-right text-muted"><time className="d-none d-md-inline-block" dateTime={2017}>12:35 AM</time><i className="zmdi zmdi-attachment-alt" /> </small>
                      </div>
                      <p className="msg">Lorem Ipsum is simply dumm dummy text of the printing and typesetting industry. </p>
                    </div>
                  </div>
                </li>
                <li className="list-group-item unread">
                  <div className="media">
                    <div className="pull-left">
                      <div className="controls">
                        <div className="checkbox">
                          <input type="checkbox" id="basic_checkbox_2" />
                          <label htmlFor="basic_checkbox_2" />
                        </div>
                        <a href="javascript:void(0);" className="favourite col-amber d-none d-md-inline-block" data-toggle="active"><i className="zmdi zmdi-star" /></a>
                      </div>
                      <div className="thumb d-none d-md-inline-block m-r-20"> <img src="hospital management Admin/assets/images/xs/avatar2.jpg" className="rounded-circle" alt="" /> </div>
                    </div>
                    <div className="media-body">
                      <div className="media-heading">
                        <a href="mail-single.html" className="m-r-10">Simply dummy text</a>
                        <span className="badge bg-amber">Shop</span>
                        <small className="float-right text-muted"><time className="d-none d-md-inline-block" dateTime={2017}>12:35 AM</time><i className="zmdi zmdi-attachment-alt" /> </small>
                      </div>
                      <p className="msg">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>                                
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media">
                    <div className="pull-left">
                      <div className="controls">
                        <div className="checkbox">
                          <input type="checkbox" id="basic_checkbox_3" />
                          <label htmlFor="basic_checkbox_3" />
                        </div>
                        <a href="javascript:void(0);" className="favourite text-muted d-none d-md-inline-block" data-toggle="active"><i className="zmdi zmdi-star-outline" /></a>
                      </div>
                      <div className="thumb d-none d-md-inline-block m-r-20"> <img src="hospital management Admin/assets/images/xs/avatar3.jpg" className="rounded-circle" alt="" /> </div>
                    </div>
                    <div className="media-body">
                      <div className="media-heading">
                        <a href="mail-single.html" className="m-r-10">Velit a labore</a>
                        <span className="badge bg-red">Google</span>
                        <small className="float-right text-muted"><time className="d-none d-md-inline-block" dateTime={2017}>12:35 AM</time><i className="zmdi zmdi-attachment-alt" /> </small>
                      </div>
                      <p className="msg"> If you are going to use a passage of Lorem Ipsum, you need to be sure</p>                                
                    </div>
                  </div>
                </li>
                <li className="list-group-item unread">
                  <div className="media">
                    <div className="pull-left">
                      <div className="controls">
                        <div className="checkbox">
                          <input type="checkbox" id="basic_checkbox_4" />
                          <label htmlFor="basic_checkbox_4" />
                        </div>
                        <a href="javascript:void(0);" className="favourite text-muted d-none d-md-inline-block" data-toggle="active"><i className="zmdi zmdi-star-outline" /></a>
                      </div>
                      <div className="thumb d-none d-md-inline-block m-r-20"> <img src="hospital management Admin/assets/images/xs/avatar4.jpg" className="rounded-circle" alt="" /> </div>
                    </div>
                    <div className="media-body">
                      <div className="media-heading">
                        <a href="mail-single.html" className="m-r-10">Variations of passages</a>
                        <span className="badge bg-blush">Themeforest</span>
                        <small className="float-right text-muted"><time className="d-none d-md-inline-block" dateTime={2017}>12:35 AM</time><i className="zmdi zmdi-attachment-alt" /> </small>
                      </div>
                      <p className="msg">There are many variations of passages of Lorem Ipsum available, but the majority </p>                                
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media">
                    <div className="pull-left">
                      <div className="controls">
                        <div className="checkbox">
                          <input type="checkbox" id="basic_checkbox_5" />
                          <label htmlFor="basic_checkbox_5" />
                        </div>
                        <a href="javascript:void(0);" className="favourite text-muted d-none d-md-inline-block" data-toggle="active"><i className="zmdi zmdi-star-outline" /></a>
                      </div>
                      <div className="thumb d-none d-md-inline-block m-r-20"> <img src="hospital management Admin/assets/images/xs/avatar5.jpg" className="rounded-circle" alt="" /> </div>
                    </div>
                    <div className="media-body">
                      <div className="media-heading">
                        <a href="mail-single.html" className="m-r-10">Generators on the Internet</a>
                        <span className="badge bg-green">Work</span>
                        <small className="float-right text-muted"><time className="d-none d-md-inline-block" dateTime={2017}>12:35 AM</time><i className="zmdi zmdi-attachment-alt" /> </small>
                      </div>
                      <p className="msg">LAll the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>                                
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media">
                    <div className="pull-left">
                      <div className="controls">
                        <div className="checkbox">
                          <input type="checkbox" id="basic_checkbox_6" />
                          <label htmlFor="basic_checkbox_6" />
                        </div>
                        <a href="javascript:void(0);" className="favourite col-amber d-none d-md-inline-block" data-toggle="active"><i className="zmdi zmdi-star" /></a>
                      </div>
                      <div className="thumb d-none d-md-inline-block m-r-20"> <img src="hospital management Admin/assets/images/xs/avatar6.jpg" className="rounded-circle" alt="" /> </div>
                    </div>
                    <div className="media-body">
                      <div className="media-heading">
                        <a href="mail-single.html" className="m-r-10">Contrary to popular</a>
                        <span className="badge bg-blush">Themeforest</span>
                        <small className="float-right text-muted"><time className="d-none d-md-inline-block" dateTime={2017}>12:35 AM</time><i className="zmdi zmdi-attachment-alt" /> </small>
                      </div>
                      <p className="msg">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical</p>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media">
                    <div className="pull-left">
                      <div className="controls">
                        <div className="checkbox">
                          <input type="checkbox" id="basic_checkbox_7" />
                          <label htmlFor="basic_checkbox_7" />
                        </div>
                        <a href="javascript:void(0);" className="favourite col-amber d-none d-md-inline-block" data-toggle="active"><i className="zmdi zmdi-star" /></a>
                      </div>
                      <div className="thumb d-none d-md-inline-block m-r-20"> <img src="hospital management Admin/assets/images/xs/avatar7.jpg" className="rounded-circle" alt="" /> </div>
                    </div>
                    <div className="media-body">
                      <div className="media-heading">
                        <a href="mail-single.html" className="m-r-10">Velit a labore</a>
                        <span className="badge bg-green">Work</span>
                        <small className="float-right text-muted"><time className="d-none d-md-inline-block" dateTime={2017}>12:35 AM</time><i className="zmdi zmdi-attachment-alt" /> </small>
                      </div>
                      <p className="msg">Lorem Ipsum is simply dumm dummy text of the printing and typesetting industry. </p>                                
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media">
                    <div className="pull-left">
                      <div className="controls">
                        <div className="checkbox">
                          <input type="checkbox" id="basic_checkbox_8" defaultChecked />
                          <label htmlFor="basic_checkbox_8" />
                        </div>
                        <a href="javascript:void(0);" className="favourite col-amber d-none d-md-inline-block" data-toggle="active"><i className="zmdi zmdi-star" /></a>
                      </div>
                      <div className="thumb d-none d-md-inline-block m-r-20"> <img src="hospital management Admin/assets/images/xs/avatar8.jpg" className="rounded-circle" alt="" /> </div>
                    </div>
                    <div className="media-body">
                      <div className="media-heading">
                        <a href="mail-single.html" className="m-r-10">Variations of passages</a>
                        <span className="badge bg-blush">Themeforest</span>
                        <small className="float-right text-muted"><time className="d-none d-md-inline-block" dateTime={2017}>12:35 AM</time><i className="zmdi zmdi-attachment-alt" /> </small>
                      </div>
                      <p className="msg">There are many variations of passages of Lorem Ipsum available, but the majority </p>                                
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media">
                    <div className="pull-left">
                      <div className="controls">
                        <div className="checkbox">
                          <input type="checkbox" id="basic_checkbox_9" />
                          <label htmlFor="basic_checkbox_9" />
                        </div>
                        <a href="javascript:void(0);" className="favourite text-muted d-none d-md-inline-block" data-toggle="active"><i className="zmdi zmdi-star-outline" /></a>
                      </div>
                      <div className="thumb d-none d-md-inline-block m-r-20"> <img src="hospital management Admin/assets/images/xs/avatar9.jpg" className="rounded-circle" alt="" /> </div>
                    </div>
                    <div className="media-body">
                      <div className="media-heading">
                        <a href="mail-single.html" className="m-r-10">Generators on the Internet</a>
                        <span className="badge bg-green">Work</span>
                        <small className="float-right text-muted"><time className="d-none d-md-inline-block" dateTime={2017}>12:35 AM</time><i className="zmdi zmdi-attachment-alt" /> </small>
                      </div>
                      <p className="msg">LAll the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>                                
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="media">
                    <div className="pull-left">
                      <div className="controls">
                        <div className="checkbox">
                          <input type="checkbox" id="basic_checkbox_10" />
                          <label htmlFor="basic_checkbox_10" />
                        </div>
                        <a href="javascript:void(0);" className="favourite text-muted d-none d-md-inline-block" data-toggle="active"><i className="zmdi zmdi-star-outline" /></a>
                      </div>
                      <div className="thumb d-none d-md-inline-block m-r-20"> <img src="hospital management Admin/assets/images/xs/avatar10.jpg" className="rounded-circle" alt="" /> </div>
                    </div>
                    <div className="media-body">
                      <div className="media-heading">
                        <a href="mail-single.html" className="m-r-10">Velit a labore</a>
                        <span className="badge bg-blue">Family</span>
                        <small className="float-right text-muted"><time className="d-none d-md-inline-block" dateTime={2017}>12:35 AM</time><i className="zmdi zmdi-attachment-alt" /> </small>
                      </div>
                      <p className="msg">Lorem Ipsum is simply dumm dummy text of the printing and typesetting industry. </p>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="card m-t-5">
                <div className="body">
                  <ul className="pagination pagination-primary m-b-0">
                    <li className="page-item"><a className="page-link" href="javascript:void(0);">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="javascript:void(0);">1</a></li>
                    <li className="page-item active"><a className="page-link" href="javascript:void(0);">2</a></li>
                    <li className="page-item"><a className="page-link" href="javascript:void(0);">3</a></li>
                    <li className="page-item"><a className="page-link" href="javascript:void(0);">Next</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Mailinbox