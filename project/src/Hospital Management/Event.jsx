import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'

function Event() {
    return (
        <div className='theme-cyan'>
            <Home/>
            <section className="content page-calendar">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-5 col-sm-12">
                            <h2>Calendar
                                <small>Welcome to Oreo</small>
                            </h2>
                        </div>
                        <div className="col-lg-5 col-md-7 col-sm-12">
                            <ul className="breadcrumb float-md-right">
                                <li className="breadcrumb-item"><Link to="/dashboard"><i className="zmdi zmdi-home" /> Oreo</Link></li>
                                <li className="breadcrumb-item"><a href="javascript:void(0);">App</a></li>
                                <li className="breadcrumb-item active">Calendar</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-lg-4 col-xl-4">
                            <div className="card">
                                <div className="body">
                                    <button type="button" className="btn btn-sm btn-round btn-success waves-effect" data-toggle="modal" data-target="#addevent">Add Events</button>
                                    <button className="btn btn-simple btn-sm btn-primary btn-round d-xl-none m-t-0 float-right" data-toggle="collapse" data-target="#open-events" aria-expanded="false" aria-controls="collapseExample"><i className="zmdi zmdi-chevron-down" /></button>
                                </div>
                            </div>
                            <div className="collapse-xs collapse-sm collapse" id="open-events">
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Repeating</strong> Event</h2>
                                        <ul className="header-dropdown">
                                            <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                                                <ul className="dropdown-menu dropdown-menu-right slideUp">
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
                                        <div className="event-name b-lightred row">
                                            <div className="col-2 text-center">
                                                <h4>09<span>Dec</span><span>2017</span></h4>
                                            </div>
                                            <div className="col-10">
                                                <h6>Repeating Event</h6>
                                                <p>It is a long established fact that a reader will be distracted</p>
                                                <address><i className="zmdi zmdi-pin" /> 123 6th St. Melbourne, FL 32904</address>
                                            </div>
                                        </div>
                                        <div className="event-name b-greensea row">
                                            <div className="col-2 text-center">
                                                <h4>16<span>Dec</span><span>2017</span></h4>
                                            </div>
                                            <div className="col-10">
                                                <h6>Repeating Event</h6>
                                                <p>It is a long established fact that a reader will be distracted</p>
                                                <address><i className="zmdi zmdi-pin" /> 123 6th St. Melbourne, FL 32904</address>
                                            </div>
                                        </div>
                                        <div className="event-name b-primary row">
                                            <div className="col-2 text-center">
                                                <h4>11<span>Dec</span><span>2017</span></h4>
                                            </div>
                                            <div className="col-10">
                                                <h6>Conference</h6>
                                                <p>It is a long established fact that a reader will be distracted</p>
                                                <address><i className="zmdi zmdi-pin" /> 123 6th St. Melbourne, FL 32904</address>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Activity</strong></h2>
                                        <ul className="header-dropdown">
                                            <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                                                <ul className="dropdown-menu dropdown-menu-right slideUp">
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
                                        <div className="event-name b-primary row">
                                            <div className="col-2 text-center">
                                                <h4>13<span>Dec</span><span>2017</span></h4>
                                            </div>
                                            <div className="col-10">
                                                <h6>Birthday</h6>
                                                <p>It is a long established fact that a reader will be distracted</p>
                                                <address><i className="zmdi zmdi-pin" /> 123 6th St. Melbourne, FL 32904</address>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-8 col-xl-8">
                            <div className="card">
                                <div className="body">
                                    <button className="btn btn-primary btn-sm btn-round waves-effect" id="change-view-today">today</button>
                                    <button className="btn btn-default btn-sm btn-simple btn-round waves-effect" id="change-view-day">Day</button>
                                    <button className="btn btn-default btn-sm btn-simple btn-round waves-effect" id="change-view-week">Week</button>
                                    <button className="btn btn-default btn-sm btn-simple btn-round waves-effect" id="change-view-month">Month</button>
                                </div>
                            </div>
                            <div className="card">
                                <div className="body">
                                    <div id="calendar" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Default Size */}
            <div className="modal fade" id="addevent" tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="title" id="defaultModalLabel">Add Event</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <div className="form-line">
                                    <input type="number" className="form-control" placeholder="Event Date" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-line">
                                    <input type="text" className="form-control" placeholder="Event Title" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-line">
                                    <textarea className="form-control no-resize" placeholder="Event Descriptionhospital management Admin." defaultValue={""} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary btn-round waves-effect">Add</button>
                            <button type="button" className="btn btn-simple btn-round waves-effect" data-dismiss="modal">CLOSE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event