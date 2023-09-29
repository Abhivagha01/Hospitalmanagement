import React from 'react'
import Home from './Home';

function Filedashboard() {
  return (
    <div className='theme-cyan'>
      <Home/>
        <section className="content file_manager">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-7 col-md-5 col-sm-12">
              <h2>File Manager
                <small>Welcome to Oreo</small>
              </h2>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-12">
              <button className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                <i className="zmdi zmdi-upload" />
              </button>
              <ul className="breadcrumb float-md-right">
                <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-md-12 col-lg-12 col-xs-12">
              <div className="card">
                <div className="header">
                  <h2><strong>File</strong> Reports</h2>
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
                  <div id="m_bar_chart" className="xl-slategray" />
                  <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="body">                        
                        <p>Storage</p>
                        <h4 className="m-t-0">32GB</h4>                                
                        <div className="progress m-t-10">
                          <div className="progress-bar l-green" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '20%'}} />
                        </div>
                        <small className="info">of 1Tb</small>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="body">
                        <p>Documents</p>
                        <h4 className="m-t-0">2GB</h4>
                        <div className="progress m-t-10">
                          <div className="progress-bar l-blush" role="progressbar" aria-valuenow={12} aria-valuemin={0} aria-valuemax={100} style={{width: '12%'}} />
                        </div>
                        <small className="info">of 1Tb</small>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="body">
                        <p>Media</p>
                        <h4 className="m-t-0">10GB</h4>
                        <div className="progress m-t-10">
                          <div className="progress-bar l-parpl" role="progressbar" aria-valuenow={39} aria-valuemin={0} aria-valuemax={100} style={{width: '39%'}} />
                        </div>
                        <small className="info">of 1Tb</small>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="body">
                        <p>Images</p>
                        <h4 className="m-t-0">20GB</h4>
                        <div className="progress m-t-10">
                          <div className="progress-bar l-blue" role="progressbar" aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} style={{width: '89%'}} />
                        </div>
                        <small className="info">of 1Tb</small>
                      </div>
                    </div>
                  </div>
                </div>                    
              </div>
            </div>
          </div>        
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
                    <div className="image">
                      <img src="hospital management Admin/assets/images/image-gallery/1.jpg" alt="img" className="img-fluid" />
                    </div>
                    <div className="file-name">
                      <p className="m-b-5 text-muted">img21545ds.jpg</p>
                      <small>Size: 2MB <span className="date text-muted">Dec 11, 2017</span></small>
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
                      <i className="zmdi zmdi-collection-folder-image" />
                    </div>
                    <div className="file-name">
                      <p className="m-b-5 text-muted">hellonew.mkv</p>
                      <small>Size: 720MB <span className="date text-muted">Dec 08, 2017</span></small>
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
                      <i className="zmdi zmdi-playlist-audio" />
                    </div>
                    <div className="file-name">
                      <p className="m-b-5 text-muted">newsong.mp3</p>
                      <small>Size: 8MB <span className="date text-muted">Dec 11, 2017</span></small>
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
                      <i className="zmdi zmdi-collection-video" />
                    </div>
                    <div className="file-name">
                      <p className="m-b-5 text-muted">Jee Le Zara Song.mpg4</p>
                      <small>Size: 32MB <span className="date text-muted">Oct 11, 2016</span></small>
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
                    <div className="image">
                      <img src="hospital management Admin/assets/images/image-gallery/3.jpg" alt="img" className="img-fluid" />
                    </div>
                    <div className="file-name">
                      <p className="m-b-5 text-muted">img21545ds.jpg</p>
                      <small>Size: 2MB <span className="date text-muted">Nov 11, 2017</span></small>
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
                      <i className="zmdi zmdi-collection-folder-image" />
                    </div>
                    <div className="file-name">
                      <p className="m-b-5 text-muted">hellonew.mkv</p>
                      <small>Size: 720MB <span className="date text-muted">Feb 16, 2016</span></small>
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
                    <div className="image">
                      <img src="hospital management Admin/assets/images/image-gallery/2.jpg" alt="img" className="img-fluid" />
                    </div>
                    <div className="file-name">
                      <p className="m-b-5 text-muted">img21545ds.jpg</p>
                      <small>Size: 2MB <span className="date text-muted">Dec 11, 2017</span></small>
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
                      <i className="zmdi zmdi-collection-folder-image" />
                    </div>
                    <div className="file-name">
                      <p className="m-b-5 text-muted">hellonew.mkv</p>
                      <small>Size: 720MB <span className="date text-muted">Dec 08, 2017</span></small>
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
                      <i className="zmdi zmdi-playlist-audio" />
                    </div>
                    <div className="file-name">
                      <p className="m-b-5 text-muted">newsong.mp3</p>
                      <small>Size: 8MB <span className="date text-muted">Dec 11, 2017</span></small>
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
                    <div className="image">
                      <img src="hospital management Admin/assets/images/image-gallery/8.jpg" alt="img" className="img-fluid" />
                    </div>
                    <div className="file-name">
                      <p className="m-b-5 text-muted">img21545ds.jpg</p>
                      <small>Size: 2MB <span className="date text-muted">Dec 11, 2017</span></small>
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
      </section>
    </div>
  )
}

export default Filedashboard;