import React from 'react'
import Home from './Home';

function Bloggrid() {
  return (
    <div className='theme-cyan'>
        <Home/>
        <section className="content blog-page">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-7 col-md-5 col-sm-12">
              <h2>Blog Grid Style
                <small>Welcome to Oreo</small>
              </h2>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-12">
              <ul className="breadcrumb float-md-right">
                <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                <li className="breadcrumb-item"><a href="blog-dashboard.html">Blog</a></li>
                <li className="breadcrumb-item active">Blog Grid</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
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
            </div> 
            <div className="col-lg-6 col-md-12">
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
            </div>
            <div className="col-xl-8 col-lg-12 col-md-12">
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
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12">
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
                </div> 
                <div className="col-lg-6 col-md-12">
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
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12 col-md-12">
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
                    <img src="hospital management Admin/assets/images/blog/blog-page-1.jpg" alt="Awesome Image" />
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

export default Bloggrid;