import React, { useRef, useState, useEffect } from 'react'
import Home from './Home'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Appoiment() {

    const [Data, setdata] = useState([]);

    useEffect(() => {
        axios.get("http://localhost/abhik/Docter/docterget.php").then((res) => {
            console.log(res);
            var data = res.data;
            setdata(data);
        })
    }, []);

    const txtname = useRef();
    const txtmobile = useRef();
    const txtdate = useRef();
    const txtgender = useRef(null);
    const txtdocter = useRef(null);
    const txtspecialist = useRef(null);

    const AppoimentHandler = (e) => {
        e.preventDefault();


        const name = txtname.current.value;
        const mobile = txtmobile.current.value;
        const date = txtdate.current.value;
        const gender = txtgender.current.value;
        const docter = txtdocter.current.value;
        const specialist = txtspecialist.current.value;

        const params = new FormData();

        params.set('name', name);
        params.set('mobile', mobile);
        params.set('date', date);
        params.set('docter', docter);
        params.set('specialist', specialist);
        params.set('gender', gender);


        axios.post("http://localhost/abhik/Docter/addappoiment.php", params).then((result) => {
            console.log(result.data);
        })
    }

    return (
        <div className='theme-cyan'>
            <Home />
            <section className="content">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-5 col-sm-12">
                            <h2>Book Appointment
                                <small>Welcome to Oreo</small>
                            </h2>
                        </div>
                        <div className="col-lg-5 col-md-7 col-sm-12">
                            <ul className="breadcrumb float-md-right">
                                <li className="breadcrumb-item"><Link to="/dashboard"><i className="zmdi zmdi-home" /> Oreo</Link></li>
                                <li className="breadcrumb-item"><a href="javascript:void(0);">Appointment</a></li>
                                <li className="breadcrumb-item active">Book Appointment</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="header">
                                    <h2><strong>Book</strong> Appointment<small>Description text herehospital management Admin.</small> </h2>
                                    <ul className="header-dropdown">
                                        <li className="remove">
                                            <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <form action="" method="POST" onSubmit={AppoimentHandler}>
                                        <div className="row clearfix">
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <input type="text" name="name" placeholder="Enter Name" ref={txtname} class="form-control m-b-15" />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group">
                                                    <input type="text" name="mobile" placeholder="Enter Mobile" ref={txtmobile} class="form-control m-b-15" />
                                                </div>
                                            </div>
                                            <div class="col-sm-4 ">
                                                <div class="form-group">
                                                    <input type="date" name="date" placeholder="Enter Date" ref={txtdate} class="form-control m-b-15" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-sm-4">
                                                <select class="form-control" ref={txtgender} name="gender">
                                                    <option selected="selected" value="">Select Gender</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-4">
                                                <select className='form-control ' ref={txtdocter} name="docter">
                                                    <option selected disabled>Select Doctor</option>
                                                    {Data.map((item) => (
                                                        <option value={item.name}>{item.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="col-sm-4    ">
                                                <select class="form-control" ref={txtspecialist} name="specialist">
                                                    <option selected disabled>Select Department</option>
                                                    {Data.map((item) => (
                                                        <option value={item.specialist} >{item.specialist}</option>
                                                    ))}

                                                </select>
                                            </div>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-sm-12">
                                                <button type="submit" className="btn btn-primary btn-round">Submit</button>
                                                <button type="submit" className="btn btn-default btn-round btn-simple">Cancel</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Appoiment