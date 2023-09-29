import React from 'react'
import Home from './Home';
import { Link } from 'react-router-dom';

function Bloglist() {
  return (
    <div className='theme-cyan'>
        <Home/>
        <section className="content blog-page">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-7 col-md-5 col-sm-12">
              <h2>Blog List
                <small>Welcome to Oreo</small>
              </h2>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-12">
              <ul className="breadcrumb float-md-right">
                <li className="breadcrumb-item"><Link to="/dashboard"><i className="zmdi zmdi-home" /> Oreo</Link></li>
                <li className="breadcrumb-item"><Link to="/blogdashboard">Blog</Link></li>
                <li className="breadcrumb-item active">Blog List</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-md-12 left-box">
              <div className="card single_post">
                <div className="body">
                  <h3 className="m-t-0 m-b-5"><a href="blog-details.html">All photographs are accurate. None of them is the truth</a></h3>
                  <ul className="meta">
                    <li><a href="#"><i className="zmdi zmdi-account col-blue" />Posted By: John Smith</a></li>
                    <li><a href="#"><i className="zmdi zmdi-label col-red" />Photography</a></li>
                    <li><a href="#"><i className="zmdi zmdi-comment-text col-blue" />Comments: 3</a></li>
                  </ul>
                </div>                    
                <div className="body">
                  <div className="img-post m-b-15">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                      <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                          <img className="d-block img-fluid" src="hospital management Admin/assets/images/blog/blog-page-1.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                          <img className="d-block img-fluid" src="hospital management Admin/assets/images/blog/blog-page-2.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                          <img className="d-block img-fluid" src="hospital management Admin/assets/images/blog/blog-page-3.jpg" alt="Third slide" />
                        </div>
                      </div>
                      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
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
              <div className="card single_post">
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
                    <img src="hospital management Admin/assets/images/blog/blog-page-2.jpg" alt="Awesome Image" />
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
              <div className="card single_post">
                <div className="body">
                  <h3 className="m-t-0 m-b-5"><a href="blog-details.html">WTCR from 2018: new rules, more cars, more races</a></h3>
                  <ul className="meta">
                    <li><a href="#"><i className="zmdi zmdi-account col-blue" />Posted By: John Smith</a></li>
                    <li><a href="#"><i className="zmdi zmdi-label col-lime" />Sports</a></li>
                    <li><a href="#"><i className="zmdi zmdi-comment-text col-blue" />Comments: 3</a></li>
                  </ul>
                </div>                    
                <div className="body">
                  <div className="img-post m-b-15">
                    <img src="hospital management Admin/assets/images/blog/blog-page-3.jpg" alt="Awesome Image" />
                    <div className="social_share">                            
                      <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-facebook" /></button>
                      <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-twitter" /></button>
                      <button className="btn btn-primary btn-icon btn-icon-mini btn-round"><i className="zmdi zmdi-instagram" /></button>
                    </div>
                  </div>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
                  <a href="blog-details.html" title="read more" className="btn btn-round btn-info">Read More</a>                        
                </div>
              </div>
              <div className="card single_post">
                <div className="body">
                  <h3 className="m-t-0 m-b-5"><a href="blog-details.html">CSS Timeline Examples from CodePen</a></h3>
                  <ul className="meta">
                    <li><a href="#"><i className="zmdi zmdi-account col-blue" />Posted By: John Smith</a></li>
                    <li><a href="#"><i className="zmdi zmdi-label col-green" />Web Design</a></li>
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
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                  <a href="blog-details.html" title="read more" className="btn btn-round btn-info">Read More</a>                        
                </div>
              </div>                               
              <ul className="pagination pagination-primary">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
              </ul>                
            </div>
            <div className="col-lg-4 col-md-12 right-box">
              <div className="card">
                <div className="body search">
                  <div className="input-group m-b-0">
                    <input type="text" className="form-control" placeholder="Searchhospital management Admin." />
                    <span className="input-group-addon">
                      <i className="zmdi zmdi-search" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="header">
                  <h2><strong>Popular</strong> Posts</h2>                        
                </div>
                <div className="body widget popular-post">
                  <div className="row">
                    <div className="col-xl-12 col-lg-12">
                      <div className="border single_post">                                    
                        <div className="img-post m-b-5">
                          <img src="hospital management Admin/assets/images/blog/blog-page-2.jpg" alt="Awesome Image" />                                        
                        </div>
                        <p className="m-b-0">Apple Introduces Search Ads Basic</p>
                        <small>Dec 20, 2017</small>
                      </div>
                      <div className="border single_post m-t-20">
                        <div className="img-post m-b-5">
                          <img src="hospital management Admin/assets/images/blog/blog-page-3.jpg" alt="Awesome Image" />                                            
                        </div>
                        <p className="m-b-0">new rules, more cars, more races</p>
                        <small>Dec 20, 2017</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>                
              <div className="card">
                <div className="header">
                  <h2><strong>Tag</strong> Clouds</h2>                        
                </div>
                <div className="body widget tag-clouds">
                  <ul className="list-unstyled m-b-0">
                    <li><a href="#" className="tag badge badge-default">Design</a></li>
                    <li><a href="#" className="tag badge badge-success">Project</a></li>
                    <li><a href="#" className="tag badge badge-info">Creative UX</a></li>
                    <li><a href="#" className="tag badge badge-success">Wordpress</a></li>
                    <li><a href="#" className="tag badge badge-warning">HTML5</a></li>
                  </ul>
                </div>
              </div>
              <div className="card">
                <div className="header">
                  <h2><strong>Instagram</strong> Post</h2>                        
                </div>
                <div className="body widget">
                  <ul className="list-unstyled instagram-plugin m-b-0">
                    <li><a href="#"><img src="hospital management Admin/assets/images/blog/05-img.jpg" alt="image description" /></a></li>
                    <li><a href="#"><img src="hospital management Admin/assets/images/blog/06-img.jpg" alt="image description" /></a></li>
                    <li><a href="#"><img src="hospital management Admin/assets/images/blog/07-img.jpg" alt="image description" /></a></li>
                    <li><a href="#"><img src="hospital management Admin/assets/images/blog/08-img.jpg" alt="image description" /></a></li>
                    <li><a href="#"><img src="hospital management Admin/assets/images/blog/09-img.jpg" alt="image description" /></a></li>
                    <li><a href="#"><img src="hospital management Admin/assets/images/blog/10-img.jpg" alt="image description" /></a></li>
                    <li><a href="#"><img src="hospital management Admin/assets/images/blog/11-img.jpg" alt="image description" /></a></li>
                    <li><a href="#"><img src="hospital management Admin/assets/images/blog/12-img.jpg" alt="image description" /></a></li>
                    <li><a href="#"><img src="hospital management Admin/assets/images/blog/13-img.jpg" alt="image description" /></a></li>
                  </ul>
                </div>
              </div>
              <div className="card">
                <div className="header">
                  <h2><strong>Email</strong> Newsletter <small>Get our products/news earlier than others, let’s get in touch.</small></h2>
                </div>
                <div className="body widget newsletter">                        
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter Email" />
                    <span className="input-group-addon">
                      <i className="zmdi zmdi-mail-send" />
                    </span>
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

export default Bloglist;