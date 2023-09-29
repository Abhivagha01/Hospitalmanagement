import React from 'react'
import Home from './Home'

function Filedocuments() {
  return (
    <div className='theme-cyan'>
        <Home/>
        <section className="content file_manager">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-7 col-md-5 col-sm-12">
              <h2>Documents
                <small>Welcome to Oreo</small>
              </h2>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-12">
              <button className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                <i className="zmdi zmdi-upload" />
              </button>
              <ul className="breadcrumb float-md-right">
                <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                <li className="breadcrumb-item"><a href="file-dashboard.html">File Manager</a></li>
                <li className="breadcrumb-item active">Documents</li>                    
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-12">
              <div className="card">
                <ul className="nav nav-tabs">
                  <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#doc">Doc</a></li>
                  <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#pdf">PDF</a></li>
                  <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#xls">XLS</a></li>
                </ul>
              </div>
              <div className="tab-content">
                <div className="tab-pane active" id="doc">
                  <div className="row clearfix">
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <div className="card">
                        <div className="file">
                          <a href="javascript:void(0);">
                            <div className="hover">
                              <button type="button" className="btn btn-icon btn-icon-mini btn-round btn-danger">
                                <i className="zmdi zmdi-delete" />
                              </button>
                            </div>
                            <div className="icon">
                              <i className="zmdi zmdi-file-text" />
                            </div>
                            <div className="file-name">
                              <p className="m-b-5 text-muted">Document_2017.doc</p>
                              <small>Size: 42KB <span className="date text-muted">Nov 02, 2017</span></small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <div className="card">
                        <div className="file">
                          <a href="javascript:void(0);">
                            <div className="hover">
                              <button type="button" className="btn btn-icon btn-icon-mini btn-round btn-danger">
                                <i className="zmdi zmdi-delete" />
                              </button>
                            </div>
                            <div className="icon">
                              <i className="zmdi zmdi-file-text" />
                            </div>
                            <div className="file-name">
                              <p className="m-b-5 text-muted">Document_2017.doc</p>
                              <small>Size: 89KB <span className="date text-muted">Dec 15, 2017</span></small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <div className="card">
                        <div className="file">
                          <a href="javascript:void(0);">
                            <div className="hover">
                              <button type="button" className="btn btn-icon btn-icon-mini btn-round btn-danger">
                                <i className="zmdi zmdi-delete" />
                              </button>
                            </div>
                            <div className="icon">
                              <i className="zmdi zmdi-file-text" />
                            </div>
                            <div className="file-name">
                              <p className="m-b-5 text-muted">Document_2017.doc</p>
                              <small>Size: 89KB <span className="date text-muted">Dec 15, 2017</span></small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <div className="card">
                        <div className="file">
                          <a href="javascript:void(0);">
                            <div className="hover">
                              <button type="button" className="btn btn-icon btn-icon-mini btn-round btn-danger">
                                <i className="zmdi zmdi-delete" />
                              </button>
                            </div>
                            <div className="icon">
                              <i className="zmdi zmdi-file-text" />
                            </div>
                            <div className="file-name">
                              <p className="m-b-5 text-muted">Document_2017.doc</p>
                              <small>Size: 42KB <span className="date text-muted">Nov 02, 2017</span></small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <div className="card">
                        <div className="file">
                          <a href="javascript:void(0);">
                            <div className="hover">
                              <button type="button" className="btn btn-icon btn-icon-mini btn-round btn-danger">
                                <i className="zmdi zmdi-delete" />
                              </button>
                            </div>
                            <div className="icon">
                              <i className="zmdi zmdi-file-text" />
                            </div>
                            <div className="file-name">
                              <p className="m-b-5 text-muted">Document_2017.doc</p>
                              <small>Size: 89KB <span className="date text-muted">Dec 15, 2017</span></small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <div className="card">
                        <div className="file">
                          <a href="javascript:void(0);">
                            <div className="hover">
                              <button type="button" className="btn btn-icon btn-icon-mini btn-round btn-danger">
                                <i className="zmdi zmdi-delete" />
                              </button>
                            </div>
                            <div className="icon">
                              <i className="zmdi zmdi-file-text" />
                            </div>
                            <div className="file-name">
                              <p className="m-b-5 text-muted">Document_2017.doc</p>
                              <small>Size: 89KB <span className="date text-muted">Dec 15, 2017</span></small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="pdf">
                  <div className="row clearfix">
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <div className="card">
                        <div className="file">
                          <a href="javascript:void(0);">
                            <div className="hover">
                              <button type="button" className="btn btn-icon btn-icon-mini btn-round btn-danger">
                                <i className="zmdi zmdi-delete" />
                              </button>
                            </div>
                            <div className="icon">
                              <i className="zmdi zmdi-collection-pdf" />
                            </div>
                            <div className="file-name">
                              <p className="m-b-5 text-muted">asdf  hhkj.pdf</p>
                              <small>Size: 3MB <span className="date text-muted">Aug 18, 2017</span></small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <div className="card">
                        <div className="file">
                          <a href="javascript:void(0);">
                            <div className="hover">
                              <button type="button" className="btn btn-icon btn-icon-mini btn-round btn-danger">
                                <i className="zmdi zmdi-delete" />
                              </button>
                            </div>
                            <div className="icon">
                              <i className="zmdi zmdi-collection-pdf" />
                            </div>
                            <div className="file-name">
                              <p className="m-b-5 text-muted">asdf  hhkj.pdf</p>
                              <small>Size: 3MB <span className="date text-muted">Aug 18, 2017</span></small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <div className="card">
                        <div className="file">
                          <a href="javascript:void(0);">
                            <div className="hover">
                              <button type="button" className="btn btn-icon btn-icon-mini btn-round btn-danger">
                                <i className="zmdi zmdi-delete" />
                              </button>
                            </div>
                            <div className="icon">
                              <i className="zmdi zmdi-collection-pdf" />
                            </div>
                            <div className="file-name">
                              <p className="m-b-5 text-muted">asdf  hhkj.pdf</p>
                              <small>Size: 3MB <span className="date text-muted">Aug 18, 2017</span></small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <div className="card">
                        <div className="file">
                          <a href="javascript:void(0);">
                            <div className="hover">
                              <button type="button" className="btn btn-icon btn-icon-mini btn-round btn-danger">
                                <i className="zmdi zmdi-delete" />
                              </button>
                            </div>
                            <div className="icon">
                              <i className="zmdi zmdi-collection-pdf" />
                            </div>
                            <div className="file-name">
                              <p className="m-b-5 text-muted">asdf  hhkj.pdf</p>
                              <small>Size: 3MB <span className="date text-muted">Aug 18, 2017</span></small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="xls">
                  <div className="row clearfix">
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <div className="card">
                        <div className="file">
                          <a href="javascript:void(0);">
                            <div className="hover">
                              <button type="button" className="btn btn-icon btn-icon-mini btn-round btn-danger">
                                <i className="zmdi zmdi-delete" />
                              </button>
                            </div>
                            <div className="icon">
                              <i className="zmdi zmdi-chart" />
                            </div>
                            <div className="file-name">
                              <p className="m-b-5 text-muted">Report2016.xls</p>
                              <small>Size: 68KB <span className="date text-muted">Dec 12, 2016</span></small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <div className="card">
                        <div className="file">
                          <a href="javascript:void(0);">
                            <div className="hover">
                              <button type="button" className="btn btn-icon btn-icon-mini btn-round btn-danger">
                                <i className="zmdi zmdi-delete" />
                              </button>
                            </div>
                            <div className="icon">
                              <i className="zmdi zmdi-chart" />
                            </div>
                            <div className="file-name">
                              <p className="m-b-5 text-muted">Report2017.xls</p>
                              <small>Size: 103KB <span className="date text-muted">Jan 24, 2016</span></small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <div className="card">
                        <div className="file">
                          <a href="javascript:void(0);">
                            <div className="hover">
                              <button type="button" className="btn btn-icon btn-icon-mini btn-round btn-danger">
                                <i className="zmdi zmdi-delete" />
                              </button>
                            </div>
                            <div className="icon">
                              <i className="zmdi zmdi-chart" />
                            </div>
                            <div className="file-name">
                              <p className="m-b-5 text-muted">Report2016.xls</p>
                              <small>Size: 68KB <span className="date text-muted">Dec 12, 2016</span></small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <div className="card">
                        <div className="file">
                          <a href="javascript:void(0);">
                            <div className="hover">
                              <button type="button" className="btn btn-icon btn-icon-mini btn-round btn-danger">
                                <i className="zmdi zmdi-delete" />
                              </button>
                            </div>
                            <div className="icon">
                              <i className="zmdi zmdi-chart" />
                            </div>
                            <div className="file-name">
                              <p className="m-b-5 text-muted">Report2016.xls</p>
                              <small>Size: 68KB <span className="date text-muted">Dec 12, 2016</span></small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <div className="card">
                        <div className="file">
                          <a href="javascript:void(0);">
                            <div className="hover">
                              <button type="button" className="btn btn-icon btn-icon-mini btn-round btn-danger">
                                <i className="zmdi zmdi-delete" />
                              </button>
                            </div>
                            <div className="icon">
                              <i className="zmdi zmdi-chart" />
                            </div>
                            <div className="file-name">
                              <p className="m-b-5 text-muted">Report2017.xls</p>
                              <small>Size: 103KB <span className="date text-muted">Jan 24, 2016</span></small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <div className="card">
                        <div className="file">
                          <a href="javascript:void(0);">
                            <div className="hover">
                              <button type="button" className="btn btn-icon btn-icon-mini btn-round btn-danger">
                                <i className="zmdi zmdi-delete" />
                              </button>
                            </div>
                            <div className="icon">
                              <i className="zmdi zmdi-chart" />
                            </div>
                            <div className="file-name">
                              <p className="m-b-5 text-muted">Report2016.xls</p>
                              <small>Size: 68KB <span className="date text-muted">Dec 12, 2016</span></small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <div className="card">
                        <div className="file">
                          <a href="javascript:void(0);">
                            <div className="hover">
                              <button type="button" className="btn btn-icon btn-icon-mini btn-round btn-danger">
                                <i className="zmdi zmdi-delete" />
                              </button>
                            </div>
                            <div className="icon">
                              <i className="zmdi zmdi-chart" />
                            </div>
                            <div className="file-name">
                              <p className="m-b-5 text-muted">Report2016.xls</p>
                              <small>Size: 68KB <span className="date text-muted">Dec 12, 2016</span></small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <div className="card">
                        <div className="file">
                          <a href="javascript:void(0);">
                            <div className="hover">
                              <button type="button" className="btn btn-icon btn-icon-mini btn-round btn-danger">
                                <i className="zmdi zmdi-delete" />
                              </button>
                            </div>
                            <div className="icon">
                              <i className="zmdi zmdi-chart" />
                            </div>
                            <div className="file-name">
                              <p className="m-b-5 text-muted">Report2017.xls</p>
                              <small>Size: 103KB <span className="date text-muted">Jan 24, 2016</span></small>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <div className="card">
                        <div className="file">
                          <a href="javascript:void(0);">
                            <div className="hover">
                              <button type="button" className="btn btn-icon btn-icon-mini btn-round btn-danger">
                                <i className="zmdi zmdi-delete" />
                              </button>
                            </div>
                            <div className="icon">
                              <i className="zmdi zmdi-chart" />
                            </div>
                            <div className="file-name">
                              <p className="m-b-5 text-muted">Report2016.xls</p>
                              <small>Size: 68KB <span className="date text-muted">Dec 12, 2016</span></small>
                            </div>
                          </a>
                        </div>
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

export default Filedocuments