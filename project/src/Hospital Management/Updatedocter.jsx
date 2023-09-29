
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';


const Updatedocter = () => {
    var { id } = useParams();

    const txtname = useRef();
    const txtpassword = useRef();
    const txtspecialist = useRef();
    const txtphone = useRef();
    const txtemail = useRef();
    const txtoldimage = useRef();
    const txtimage=useRef();
    
    const [gender, setgender] = useState();
    const handleclick = (event) => {
        setgender(event.target.value);
    }

    
    const [image, setimage] = useState('');
    function handleImage(e) {
        setimage(e.target.files[0])
    }

    useEffect(() => {
        var params = new FormData();
        params.set('id', id);

        axios.post("http://localhost/abhik/Docter/docteredit.php", params).then((result) => {
            if (result.status == 200) {
                alert(id);
                txtname.current.value = result.data.name;
                txtpassword.current.value = result.data.password;
                txtspecialist.current.value = result.data.specialist;
                txtphone.current.value = result.data.phone;
                txtemail.current.value = result.data.email;
                setgender(result.data.gender);
                setimage(result.data.image);
            }
        })
    }, [])

    const navigate = useNavigate();
    const docterHandler = (e) => {
        e.preventDefault();
        var name = txtname.current.value;
        var password = txtpassword.current.value;
        var specialist = txtspecialist.current.value;
        var phone = txtphone.current.value;
        var email = txtemail.current.value;
        var image=txtimage.current.files[0];
        var oldimage=txtoldimage.current.value;
        

        const params = new FormData();

        params.set('id', id);
        params.set('name', name);
        params.set('password', password);
        params.set('specialist', specialist);
        params.set('phone', phone);
        params.set('email', email);
        params.set('gender', gender);
        params.set('image',image);
        params.set('oldimage',oldimage);

        axios.post("http://localhost/abhik/Docter/adddocterupdate.php", params).then((result) => {
            console.log(result);
            navigate('/admindoctors');  
        })
    }


    return (
        <>
            <div div className='theme-cyan' >
                <Home/>
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
                                                    <img src={`http://localhost/abhik/Docter/assets/image/${image}`} alt={image}/>
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
                    </div>
                </section>
            </div>
        </>
    )
}
export default Updatedocter;