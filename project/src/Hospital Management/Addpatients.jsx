import React, { useRef, useState, useEffect } from 'react'
import Home from './Home';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { message } from 'antd';


function Addpatients() {
  const [docterdata, setdocterdata] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();


  const txtname = useRef();
  const txtmobile = useRef();
  const txtdate = useRef();
  const txtgender = useRef(null);
  const txtdocter = useRef(null);
  const txtspecialist = useRef(null);

  useEffect(() => {
    axios.get("http://localhost/abhik/Docter/docterget.php").then((result) => {
      console.log(result);
      const Data = result.data;
      setdocterdata(Data);
    })
  }, []);

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
      if (result.status == 200) {
        messageApi.open({
          type: 'success',
          content: 'SuccessFully Add Patients!',
        });
      }
      else {
        messageApi.open({
          type: 'error',
          content: 'Faild Add Patients!',
        });
      }
    })
  }

  return (
    <div className='theme-cyan'>
      {contextHolder}
      <Home />
      <section className="content">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-7 col-md-5 col-sm-12">
              <h2>Add Patient
                <small className="text-muted">Welcome to Oreo</small>
              </h2>
            </div>
            <div className="col-lg-5 col-md-7 col-sm-12">
              <ul className="breadcrumb float-md-right">
                <li className="breadcrumb-item"><Link to="/dashboard"><i className="zmdi zmdi-home" /> Oreo</Link></li>
                <li className="breadcrumb-item"><a href="javascript:void(0);">Patient</a></li>
                <li className="breadcrumb-item active">Add Patient</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="card">
                <div className="header">
                  <h2><strong>Basic</strong> Information <small>Description text herehospital management Admin.</small> </h2>
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
                  <form action="" method='POST' onSubmit={AppoimentHandler}>
                    <div className="row clearfix">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input type="text" className="form-control" ref={txtname} placeholder="First Name" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input type="text" className="form-control" ref={txtmobile} placeholder="Mobile" />
                        </div>
                      </div>
                    </div>
                    <div className="row clearfix">
                      <div className="col-sm-6">
                        <div className="input-group">
                          <input type="date" className="form-control" ref={txtdate} placeholder="Enter date" />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <select className='form-control ' ref={txtdocter} name="docter">
                          <option selected disabled>Select Doctor</option>
                          {docterdata.map((item) => (
                            <option value={item.name}>{item.name}</option>
                          ))}
                        </select>
                      </div>
                      <div class="col-sm-6 ">
                        <select class="form-control" ref={txtspecialist} name="specialist">
                          <option selected disabled>Select Department</option>
                          {docterdata.map((item) => (
                            <option value={item.specialist} >{item.specialist}</option>
                          ))}
                        </select>
                      </div>
                      <div class="col-sm-6">
                        <select class="form-control" ref={txtgender} name="gender">
                          <option selected="selected" value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
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
          <div className="row clearfix">
            <div className="col-md-12">
              <div className="card">
                <div className="header">
                  <h2><strong>Registration</strong> Information <small>Description text herehospital management Admin.</small> </h2>
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
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Doctor Name" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Staff on Duty" />
                      </div>
                    </div>
                  </div>
                  <div className="row clearfix">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Ward No." />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="zmdi zmdi-calendar" />
                        </span>
                        <input type="text" className="datetimepicker form-control" placeholder="Please choose date & timehospital management Admin." />
                      </div>
                    </div>
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

export default Addpatients;