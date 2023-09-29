import React, { useEffect, useRef, useState } from 'react'
import Home from './Home'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { message } from 'antd';

function Adddoctor() {
    const [messageApi, contextHolder] = message.useMessage();


    //ADD DOCTER
    const txtname = useRef();
    const txtpassword = useRef();
    const txtspecialist = useRef();
    const txtphone = useRef();
    const txtemail = useRef();
    const txtimage = useRef();
    const txtoldimage = useRef();
    const [gender, setgender] = useState();
    const handleclick = (event) => {
        setgender(event.target.value);
    }

    const [image, setimage] = useState('');
    function handleImage(e) {
        setimage(e.target.files[0])
    }

    const docterHandler = (e) => {
        e.preventDefault();
        var name = txtname.current.value;
        var password = txtpassword.current.value;
        var specialist = txtspecialist.current.value;
        var phone = txtphone.current.value;
        var email = txtemail.current.value;


        const params = new FormData();

        params.set('name', name);
        params.set('password', password);
        params.set('specialist', specialist);
        params.set('phone', phone);
        params.set('email', email);
        params.set('gender', gender);
        params.append('image', image);
        axios.post("http://localhost/abhik/Docter/adddocter.php", params).then((result) => {
            if (result.status == 200) {
                messageApi.open({
                    type: 'success',
                    content: 'SuccessFully Add Docter!',
                });
            }
            else {
                messageApi.open({
                    type: 'error',
                    content: 'Faild Add Docter!',
                });
            }
        })
        txtname.current.value = "";
        txtphone.current.value = "";
        txtspecialist.current.value = "";
        txtpassword.current.value = "";
        txtemail.current.value = "";
    }



    // DOCTER ACCOUNT 

    const txtaccname = useRef();
    const txtaccountnum = useRef();
    const txtifsc = useRef();
    const txtbankname = useRef();

    const accountdataSubmiter = (e) => {
        e.preventDefault();

        const accountname = txtaccname.current.value;
        const accountnumber = txtaccountnum.current.value;
        const accountifsc = txtifsc.current.value;
        const bankname = txtbankname.current.value;

        const params = new FormData();

        params.set('name', accountname);
        params.set('accountnumber', accountnumber);
        params.set('ifsc', accountifsc);
        params.set('bankname', bankname);

        axios.post("http://localhost/abhik/Docter/docteraccount.php", params).then((result) => {
            if (result.status == 200) {
                messageApi.open({
                    type: 'success',
                    content: 'Successfully Bank Detail Add!',
                });
            }
            else {
                messageApi.open({
                    type: 'error',
                    content: 'Failed',
                });
            }
        })
        txtaccname.current.value = "";
        txtaccountnum.current.value = "";
        txtifsc.current.value = "";
        txtbankname.current.value = "";
    }


    //DOCTER SOCIAL 

    const txtdoctername = useRef();
    const txtfacebook = useRef();
    const txttwitter = useRef();
    const txtgoogle = useRef();
    const txtlinkedin = useRef();
    const txtbehance = useRef();
    const txtdribble = useRef();

    const doctersocial = (e) => {
        e.preventDefault();
        const doctername = txtdoctername.current.value;
        const docterfacebook = txtfacebook.current.value;
        const doctertwitter = txttwitter.current.value;
        const doctergoogle = txtgoogle.current.value;
        const docterlinkedin = txtlinkedin.current.value;
        const docterbehance = txtbehance.current.value;
        const docterdribble = txtdribble.current.value;

        const params = new FormData();


        params.set('doctername', doctername);
        params.set('facebook', docterfacebook);
        params.set('twitter', doctertwitter);
        params.set('google', doctergoogle);
        params.set('linkedin', docterlinkedin);
        params.set('behance', docterbehance);
        params.set('dribble', docterdribble);

        axios.post("http://localhost/abhik/Docter/doctersocial.php", params).then((result) => {
            if (result.status == 200) {
                messageApi.open({
                    type: 'success',
                    content: 'Successfully Social Detail Add!',
                });
            }
            else {
                messageApi.open({
                    type: 'error',
                    content: 'Failed',
                });
            }
        })
        txtdoctername.current.value="";
        txtfacebook.current.value="";
        txttwitter.current.value="";
        txtgoogle.current.value="";
        txtlinkedin.current.value="";
        txtbehance.current.value="";
        txtdribble.current.value="";
    }



    return (


        <div div className='theme-cyan' >
            {contextHolder}
            <Home />
            <section className="content">
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-5 col-sm-12">
                            <h2>Add Doctors
                                <small className="text-muted">Welcome to Oreo</small>
                            </h2>
                        </div>
                        <div className="col-lg-5 col-md-7 col-sm-12">
                            <button className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                                <i className="zmdi zmdi-plus" />
                            </button>
                            <ul className="breadcrumb float-md-right">
                                <li className="breadcrumb-item"><Link to="/dashboard"><i className="zmdi zmdi-home" /> Oreo</Link></li>
                                <li className="breadcrumb-item"><a href="javascript:void(0);">Doctors</a></li>
                                <li className="breadcrumb-item active">Add Doctors</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row clearfix">
                        <form action="" method="POST" onSubmit={docterHandler} >
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Basic</strong> Information <small>Description text here...</small> </h2>
                                        <ul className="header-dropdown">
                                            <li className="remove">
                                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div className="row clearfix">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="name" ref={txtname} placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="password" className="form-control" ref={txtpassword} name="password" placeholder="Password" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row clearfix">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="radio" className="form-control" name="gender" checked={gender === 'male'} onChange={handleclick} value="male" />Male
                                                    <input type="radio" className="form-control" name="gender" checked={gender === 'female'} onChange={handleclick} value="female" />FeMale
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="specialist" ref={txtspecialist} placeholder="Speciality" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="phone" ref={txtphone} placeholder="Phone" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="email" ref={txtemail} placeholder="Enter Your Email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <input type="hidden" name="oldimage" value={image} ref={txtoldimage} />
                                                <input name="image" type="file" onChange={handleImage} multiple ref={txtimage} />
                                                <img src={`http://localhost/abhik/assets/image/${image}`} alt={image} />
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <textarea rows={4} className="form-control no-resize" placeholder="Please type what you want..." defaultValue={""} />
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
                        </form>
                    </div>
                    <div className="row clearfix">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="header">
                                    <h2><strong>Doctor's</strong> Account Information <small>Description text here...</small> </h2>
                                    <ul className="header-dropdown">
                                        <li className="remove">
                                            <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <form action="" method='POST' onSubmit={accountdataSubmiter}>
                                        <div className="row clearfix">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Name" ref={txtaccname} required />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Account number" ref={txtaccountnum} required />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="IFSC code" ref={txtifsc} required />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Bank Name" ref={txtbankname} required />
                                                </div>
                                            </div>
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
                                    <h2><strong>Doctor</strong> Social Media Info <small>Description text here...</small> </h2>
                                    <ul className="header-dropdown">
                                        <li className="remove">
                                            <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                    <form action="" method='POST' onSubmit={doctersocial}>
                                        <div className="row clearfix">
                                            <div className="col-sm-12">
                                                <div className="input-group">
                                                    <input type="text" className="form-control" placeholder="Name" ref={txtdoctername} required />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-facebook" /></span>
                                                    <input type="text" className="form-control" placeholder="Facebook" ref={txtfacebook} required />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-twitter" /></span>
                                                    <input type="text" className="form-control" placeholder="Twitter" ref={txttwitter} required />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-google-plus" /></span>
                                                    <input type="text" className="form-control" placeholder="Google Plus" ref={txtgoogle} required />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-linkedin" /></span>
                                                    <input type="text" className="form-control" placeholder="LinkedIN" ref={txtlinkedin} required />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-behance" /></span>
                                                    <input type="text" className="form-control" placeholder="Behance" ref={txtbehance} required />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-dribbble" /></span>
                                                    <input type="text" className="form-control" placeholder="dribbble" ref={txtdribble} required />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                {/* <p> <b>With Search Bar</b> </p>
                                                <select className="form-control z-index show-tick" data-live-search="true">
                                                    <option>Hot Dog, Fries and a Soda</option>
                                                    <option>Burger, Shake and a Smile</option>
                                                    <option>Sugar, Spice and all things nice</option>
                                                </select> */}
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

export default Adddoctor