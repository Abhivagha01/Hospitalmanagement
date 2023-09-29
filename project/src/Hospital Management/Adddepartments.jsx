import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'

function Adddepartments() {
    return (
        <div className='theme-cyan'>
            <Home/>
            <section className="content">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-5 col-sm-12">
                            <h2>Add Departments
                                <small>Welcome to Oreo</small>
                            </h2>
                        </div>
                        <div className="col-lg-5 col-md-7 col-sm-12">
                            <ul className="breadcrumb float-md-right">
                                <li className="breadcrumb-item"><Link to="/dashboard"><i className="zmdi zmdi-home" /> Oreo</Link></li>
                                <li className="breadcrumb-item"><a href="javascript:void(0);">Departments</a></li>
                                <li className="breadcrumb-item active">Add</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="header">
                                    <h2><strong>Add</strong> Departments<small>Description text here...</small> </h2>
                                    <ul className="header-dropdown">
                                        <li className="remove">
                                            <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <div className="row clearfix">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Departments Name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <textarea rows={4} className="form-control no-resize" placeholder="Please type what you want..." defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <form action="https://thememakker.com/" id="frmFileUpload" className="dropzone m-b-20" method="post" encType="multipart/form-data">
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
                                    <div className="row clearfix">
                                        <div className="col-sm-12">
                                            <button type="submit" className="btn btn-primary btn-round">Submit</button>
                                            <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
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

export default Adddepartments