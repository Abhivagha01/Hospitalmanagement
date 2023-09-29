import React, { useState, useEffect } from 'react'
import Home from './Home';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, message } from 'antd';


function Patients() {
    const [messageApi, contextHolder] = message.useMessage();
    const [Data, setData] = useState([]);
    
    const navigate=useNavigate();

    useEffect(() => {
        viewall();
    }, []);

    const handleChange = (id, status) => {
        var params = new FormData();

        params.set('status', status);
        params.set('id', id);

        axios.post("http://localhost/abhik/Docter/Approveupdate.php", params).then(res => {
            console.log(res);
        })
            .catch(error => {
                console.log(error);
            })
    }

    const viewall = () => {
        axios.get("http://localhost/abhik/Docter/get_appoiment.php").then((res) => {
            console.log(res);
            var data = res.data;
            setData(data);
        })
    }

    const Handlerdelete = (e) => {
        const id = e.target.getAttribute("data-id");

        const params = new FormData();
        params.set('id', id);

        axios.post("http://localhost/abhik/Docter/addappoimentdelete.php", params).then((result) => {
            alert(id);
            if (result.status == 200) {
                messageApi.open({
                    type: 'success',
                    content: 'successFully Deleted',
                });
                viewall();
            }
            else {
                messageApi.open({
                    type: 'error',
                    content: 'Failed!',
                });
            }
        })
    }

    const Handleredit = (e) => {
        const id = e.target.getAttribute("data-id");
        navigate("/updatepatients/" + id);
    }

    return (
        <div className='theme-cyan'>
            <Home />
            <section className="content">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-5 col-sm-12">
                            <h2>All Patients
                                <small className="text-muted">Welcome to Oreo</small>
                            </h2>
                        </div>
                        <div className="col-lg-5 col-md-7 col-sm-12">
                            <button className="btn btn-primary btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                                <i className="zmdi zmdi-plus" />
                            </button>
                            <ul className="breadcrumb float-md-right">
                                <li className="breadcrumb-item"><Link to="/dashboard"><i className="zmdi zmdi-home" /> Oreo</Link></li>
                                <li className="breadcrumb-item"><a href="javascript:void(0);">Patients</a></li>
                                <li className="breadcrumb-item active">All Patients</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-md-12">
                            <div className="card patients-list">
                                <div className="header">
                                    <h2><strong>Patients</strong> List</h2>
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
                                    {/* Nav tabs */}
                                    <ul className="nav nav-tabs padding-0">
                                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#All">All</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#USA">USA</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#India">India</a></li>
                                    </ul>
                                    {/* Tab panes */}
                                    <div className="tab-content m-t-10">
                                        <div className="tab-pane table-responsive active" id="All">
                                            <table className="table m-b-0 table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Mobile</th>
                                                        <th>Date</th>
                                                        <th>Docter</th>
                                                        <th>Department</th>
                                                        <th>Gender</th>
                                                        <th>Status</th>
                                                    </tr>

                                                    {
                                                        Data.map((row) => {
                                                            return (
                                                                <>
                                                                    <tr>
                                                                        <td>{row.id}</td>
                                                                        <td>{row.name}</td>
                                                                        <td>{row.mobile}</td>
                                                                        <td>{row.date}</td>
                                                                        <td>{row.docter}</td>
                                                                        <td>{row.specialist}</td>
                                                                        <td>{row.gender}</td>
                                                                        <td>
                                                                            <label class="toggle">
                                                                                <input type="checkbox"
                                                                                    checked={row.status === 'Approve'}
                                                                                    onChange={checked => handleChange(row.id, checked ? 'Approve' : 'Pending')}
                                                                                />
                                                                                <span class="slider"></span>
                                                                                <span class="labels" data-on="Approve" data-off="Pending"></span>
                                                                            </label>
                                                                        </td>
                                                                        <td><button type='button' onClick={Handlerdelete} data-id={row.id}><i class="fas fa-trash-alt"></i></button></td>
                                                                        <td><button type='button' onClick={Handleredit} data-id={row.id}><i class="fas fa-pen-square"></i></button></td>
                                                                    </tr>
                                                                </>
                                                            )
                                                        })
                                                    }

                                                </thead>
                                            </table>
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
export default Patients;