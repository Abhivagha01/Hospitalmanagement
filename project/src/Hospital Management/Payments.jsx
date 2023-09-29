import React from 'react'
import Home from './Home';
import { Link } from 'react-router-dom';

function Payments() {
    return (
        <div className='theme-cyan'>
            <Home/>
            <section className="content">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-5 col-sm-12">
                            <h2>Payments
                                <small className="text-muted">Welcome to Oreo</small>
                            </h2>
                        </div>
                        <div className="col-lg-5 col-md-7 col-sm-12">
                            <ul className="breadcrumb float-md-right">
                                <li className="breadcrumb-item"><Link to="/dashboard"><i className="zmdi zmdi-home" /> Oreo</Link></li>
                                <li className="breadcrumb-item"><a href="javascript:void(0);">Payments</a></li>
                                <li className="breadcrumb-item active">Payments</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    {/* Basic Examples */}
                    <div className="row clearfix">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="header">
                                    <h2><strong>List</strong> </h2>
                                    <ul className="header-dropdown">
                                        <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                                            <ul className="dropdown-menu dropdown-menu-right slideUp float-right">
                                                <li><a href="javascript:void(0);">Action</a></li>
                                                <li><a href="javascript:void(0);">Another action</a></li>
                                                <li><a href="javascript:void(0);">Something else</a></li>
                                            </ul>
                                        </li>
                                        <li className="remove">
                                            <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-striped table-hover js-basic-example dataTable">
                                            <thead>
                                                <tr>
                                                    <th>Bill No</th>
                                                    <th>Bill date</th>
                                                    <th>Patient</th>
                                                    <th>Doctor</th>
                                                    <th>Charges</th>
                                                    <th>Tax</th>
                                                    <th>Discount</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>21</td>
                                                    <td>02/21/2017</td>
                                                    <td>Christina Thomas</td>
                                                    <td>Juan Freeman</td>
                                                    <td>102</td>
                                                    <td>10</td>
                                                    <td>10%</td>
                                                    <td>210</td>
                                                </tr>
                                                <tr>
                                                    <td>17</td>
                                                    <td>02/21/2017</td>
                                                    <td>Christina Thomas</td>
                                                    <td>Juan Freeman</td>
                                                    <td>102</td>
                                                    <td>10</td>
                                                    <td>10%</td>
                                                    <td>210</td>
                                                </tr>
                                                <tr>
                                                    <td>16</td>
                                                    <td>02/21/2017</td>
                                                    <td>Christina Thomas</td>
                                                    <td>Juan Freeman</td>
                                                    <td>102</td>
                                                    <td>10</td>
                                                    <td>10%</td>
                                                    <td>210</td>
                                                </tr>
                                                <tr>
                                                    <td>15</td>
                                                    <td>02/21/2017</td>
                                                    <td>Christina Thomas</td>
                                                    <td>Juan Freeman</td>
                                                    <td>102</td>
                                                    <td>10</td>
                                                    <td>10%</td>
                                                    <td>210</td>
                                                </tr>
                                                <tr>
                                                    <td>14</td>
                                                    <td>02/21/2017</td>
                                                    <td>Lori Perkins</td>
                                                    <td>Juan Freeman</td>
                                                    <td>102</td>
                                                    <td>10</td>
                                                    <td>10%</td>
                                                    <td>210</td>
                                                </tr>
                                                <tr>
                                                    <td>12</td>
                                                    <td>02/21/2017</td>
                                                    <td>Christina Thomas</td>
                                                    <td>Juan Freeman</td>
                                                    <td>102</td>
                                                    <td>10</td>
                                                    <td>10%</td>
                                                    <td>210</td>
                                                </tr>
                                                <tr>
                                                    <td>22</td>
                                                    <td>02/21/2017</td>
                                                    <td>Christina Thomas</td>
                                                    <td>Juan Freeman</td>
                                                    <td>102</td>
                                                    <td>10</td>
                                                    <td>10%</td>
                                                    <td>210</td>
                                                </tr>
                                                <tr>
                                                    <td>11</td>
                                                    <td>02/21/2017</td>
                                                    <td>Christina Thomas</td>
                                                    <td>Jessica Patterson</td>
                                                    <td>102</td>
                                                    <td>10</td>
                                                    <td>10%</td>
                                                    <td>210</td>
                                                </tr>
                                                <tr>
                                                    <td>105</td>
                                                    <td>02/21/2017</td>
                                                    <td>Lori Perkins</td>
                                                    <td>Juan Freeman</td>
                                                    <td>102</td>
                                                    <td>10</td>
                                                    <td>10%</td>
                                                    <td>210</td>
                                                </tr>
                                                <tr>
                                                    <td>56</td>
                                                    <td>02/21/2017</td>
                                                    <td>Christina Thomas</td>
                                                    <td>Juan Freeman</td>
                                                    <td>102</td>
                                                    <td>10</td>
                                                    <td>10%</td>
                                                    <td>210</td>
                                                </tr>
                                                <tr>
                                                    <td>34</td>
                                                    <td>02/21/2017</td>
                                                    <td>Christina Thomas</td>
                                                    <td>Jessica Patterson</td>
                                                    <td>102</td>
                                                    <td>10</td>
                                                    <td>10%</td>
                                                    <td>210</td>
                                                </tr>
                                                <tr>
                                                    <td>21</td>
                                                    <td>02/21/2017</td>
                                                    <td>Christina Thomas</td>
                                                    <td>Juan Freeman</td>
                                                    <td>102</td>
                                                    <td>10</td>
                                                    <td>10%</td>
                                                    <td>210</td>
                                                </tr>
                                                <tr>
                                                    <td>17</td>
                                                    <td>02/21/2017</td>
                                                    <td>Christina Thomas</td>
                                                    <td>Juan Freeman</td>
                                                    <td>102</td>
                                                    <td>10</td>
                                                    <td>10%</td>
                                                    <td>210</td>
                                                </tr>
                                                <tr>
                                                    <td>16</td>
                                                    <td>02/21/2017</td>
                                                    <td>Christina Thomas</td>
                                                    <td>Juan Freeman</td>
                                                    <td>102</td>
                                                    <td>10</td>
                                                    <td>10%</td>
                                                    <td>210</td>
                                                </tr>
                                                <tr>
                                                    <td>15</td>
                                                    <td>02/21/2017</td>
                                                    <td>Christina Thomas</td>
                                                    <td>Juan Freeman</td>
                                                    <td>102</td>
                                                    <td>10</td>
                                                    <td>10%</td>
                                                    <td>210</td>
                                                </tr>
                                                <tr>
                                                    <td>14</td>
                                                    <td>02/21/2017</td>
                                                    <td>Lori Perkins</td>
                                                    <td>Juan Freeman</td>
                                                    <td>102</td>
                                                    <td>10</td>
                                                    <td>10%</td>
                                                    <td>210</td>
                                                </tr>
                                                <tr>
                                                    <td>12</td>
                                                    <td>02/21/2017</td>
                                                    <td>Christina Thomas</td>
                                                    <td>Juan Freeman</td>
                                                    <td>102</td>
                                                    <td>10</td>
                                                    <td>10%</td>
                                                    <td>210</td>
                                                </tr>
                                                <tr>
                                                    <td>22</td>
                                                    <td>02/21/2017</td>
                                                    <td>Christina Thomas</td>
                                                    <td>Juan Freeman</td>
                                                    <td>102</td>
                                                    <td>10</td>
                                                    <td>10%</td>
                                                    <td>210</td>
                                                </tr>
                                                <tr>
                                                    <td>11</td>
                                                    <td>02/21/2017</td>
                                                    <td>Christina Thomas</td>
                                                    <td>Jessica Patterson</td>
                                                    <td>102</td>
                                                    <td>10</td>
                                                    <td>10%</td>
                                                    <td>210</td>
                                                </tr>
                                                <tr>
                                                    <td>105</td>
                                                    <td>02/21/2017</td>
                                                    <td>Lori Perkins</td>
                                                    <td>Juan Freeman</td>
                                                    <td>102</td>
                                                    <td>10</td>
                                                    <td>10%</td>
                                                    <td>210</td>
                                                </tr>
                                            </tbody>
                                        </table>
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

export default Payments;