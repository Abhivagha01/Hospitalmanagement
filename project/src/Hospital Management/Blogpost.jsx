import React from 'react'
import Home from './Home';
import { Link } from 'react-router-dom';

function Blogpost() {
    return (
        <div className='theme-cyan'>
            <Home />
            <section className="content blog-page">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-5 col-sm-12">
                            <h2>New Post
                                <small>Welcome to Oreo</small>
                            </h2>
                        </div>
                        <div className="col-lg-5 col-md-7 col-sm-12">
                            <ul className="breadcrumb float-md-right">
                                <li className="breadcrumb-item"><Link to="/dashboard"><i className="zmdi zmdi-home" /> Oreo</Link></li>
                                <li className="breadcrumb-item"><Link to="/blogdashboard">Blog</Link></li>
                                <li className="breadcrumb-item active">New Post</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="body">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Enter Blog title" />
                                    </div>
                                    <select className="form-control show-tick">
                                        <option>Select Category --</option>
                                        <option>Web Design</option>
                                        <option>Photography</option>
                                        <option>Technology</option>
                                        <option>Lifestyle</option>
                                        <option>Sports</option>
                                    </select>
                                    <form action="https://thememakker.com/" id="frmFileUpload" className="dropzone m-b-20 m-t-20" method="post" encType="multipart/form-data">
                                        <div className="dz-message">
                                            <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                                            <h3>Drop files here or click to upload.</h3>
                                            <em>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</em> </div>
                                        <div className="fallback">
                                            <input name="file" type="file" multiple />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card">
                                <div className="body">
                                    <textarea id="ckeditor" defaultValue={" "} />
                                    <button type="button" className="btn btn-primary btn-round waves-effect m-t-20">Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blogpost;