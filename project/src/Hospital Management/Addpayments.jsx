import React from 'react'
import Home from './Home';

function Addpayments() {
    return (
        <div className='theme-cyan'>
            <Home/>
            <section className="content">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-5 col-sm-12">
                            <h2>Add Payment
                                <small className="text-muted">Welcome to Oreo</small>
                            </h2>
                        </div>
                        <div className="col-lg-5 col-md-7 col-sm-12">
                            <button className="btn btn-primary btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                                <i className="zmdi zmdi-plus" />
                            </button>
                            <ul className="breadcrumb float-md-right">
                                <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                                <li className="breadcrumb-item"><a href="javascript:void(0);">Payment</a></li>
                                <li className="breadcrumb-item active">Add Payment</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 ">
                            <div className="card">
                                <div className="header">
                                    <h2><strong>Patients</strong> Information <small>Description text herehospital management Admin.</small> </h2>
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
                                    <div className="row clearfix">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <input type="number" className="form-control" placeholder="Payment Number" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Patient Name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 ">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Doctor Name" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="header">
                                    <h2><strong>Payment</strong> Information <small>Description text herehospital management Admin.</small> </h2>
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
                                    <div className="row clearfix">
                                        <div className="col-sm-12 ">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Payment Date" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 ">
                                            <div className="form-group">
                                                <input type="number" className="form-control" placeholder="Total Amount" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 ">
                                            <div className="form-group">
                                                <input type="number" className="form-control" placeholder="Discount" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <select className="form-control show-tick mb-3" data-live-search="true">
                                                <option value>-- Payment Method --</option>
                                                <option>Cash</option>
                                                <option>Cheque</option>
                                                <option>Credit Card</option>
                                                <option>Debit Card</option>
                                                <option>Netbanking</option>
                                                <option>Insurance</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-12 m-t-30">
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

export default Addpayments;