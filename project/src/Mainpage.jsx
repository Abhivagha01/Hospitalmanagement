// import { Routes, Route, Navigate } from 'react-router-dom';
// import Service from './Component/Service';
// import Department from './Component/Department';
// import Docter from './Component/Docter';
// import Blog from './Component/Blog';
// import Blogdetail from './Component/Blogdetail';
// import Faq from './Component/Faq';
// import Galary from './Component/Galary';
// import Pricelist from './Component/Pricelist';
// import Contact from './Component/Contact';
// import About from './Component/About';
// import Adddepartments from './Hospital Management/Adddepartments';
// import Adddoctor from './Hospital Management/Adddoctor';
// import Appoiment from './Hospital Management/Appoiment';
// import Dashboard from './Hospital Management/Dashboard.jsx';
// import Profile from './Hospital Management/Profile';
// import Event from './Hospital Management/Event';
// import React from 'react'
// import Mailinbox from './Hospital Management/Mailinbox';
// import Admincontact from './Hospital Management/Admincontact';
// import Admindocters from './Hospital Management/Admindocters';
// import Patients from './Hospital Management/Patients';
// import Addpatients from './Hospital Management/Addpatients';
// import Patientsprofile from './Hospital Management/Patientsprofile';
// import Patientinvoice from './Hospital Management/Patientinvoice';
// import Payments from './Hospital Management/Payments';
// import Addpayments from './Hospital Management/Addpayments';
// import Alldepartments from './Hospital Management/Alldepartments ';
// import Moredepartment from './Hospital Management/Moredepartment';
// import Forgotpassword from './Hospital Management/Forgotpassword';
// import Page404 from './Hospital Management/Page404';
// import Page500 from './Hospital Management/Page500';
// import Pageoffline from './Hospital Management/Pageoffline';
// import Loked from './Hospital Management/Loked';
// import Blogdashboard from './Hospital Management/Blogdashboard';
// import Blogpost from './Hospital Management/Blogpost';
// import Bloglist from './Hospital Management/Bloglist';
// import Bloggrid from './Hospital Management/Bloggrid';
// import Blogdetails from './Hospital Management/Blogdetails';
// import Filedashboard from './Hospital Management/Filedashboard';
// import Filedocuments from './Hospital Management/Filedocuments';
// import Practice from './Component/Practice';
// import Index from './Component/Index';


// const Mainpage = () => {

//     const islogin = localStorage.getItem('islogin') === 'true';
//     const userrole = localStorage.getItem('login');

//     if (islogin && userrole == 'user') {
//             <Routes>
//                 <Route index element={<Index />} />
//                 <Route path='/index' element={< Index />} />
//                 <Route path='/service' element={< Service />} />
//                 <Route path='/department' element={< Department />} />
//                 <Route path='/doctor' element={< Docter />} />
//                 <Route path='/blog' element={< Blog />} />
//                 <Route path='/blog-detail' element={< Blogdetail />} />
//                 <Route path='/about' element={< About />} />
//                 <Route path='/faq' element={< Faq />} />
//                 <Route path='/galary' element={< Galary />} />
//                 <Route path='/price-list' element={< Pricelist />} />
//                 <Route path='/contact' element={< Contact />} />
//                 <Route path='/practice' element={< Practice />} />
//             </Routes>
        
//     }
//     else if (islogin && userrole == 'admin') {
//             <Routes>
//                 <Route index element={< Dashboard />} />
//                 <Route path='/index' element={< Index />} />
//                 <Route path='/service' element={< Service />} />
//                 <Route path='/department' element={< Department />} />
//                 <Route path='/doctor' element={< Docter />} />
//                 <Route path='/blog' element={< Blog />} />
//                 <Route path='/blog-detail' element={< Blogdetail />} />
//                 <Route path='/about' element={< About />} />
//                 <Route path='/faq' element={< Faq />} />
//                 <Route path='/galary' element={< Galary />} />
//                 <Route path='/price-list' element={< Pricelist />} />
//                 <Route path='/contact' element={< Contact />} />
//                 <Route path='/practice' element={< Practice />} />


//                 <Route index path="/dashboard" element={< Dashboard />} />
//                 <Route path="/dashboard/:id" element={< Dashboard />} />
//                 <Route path="/index" element={<Index />} />
//                 <Route path='/adddepartments' element={< Adddepartments />} />
//                 <Route path='/alldepartments' element={<Alldepartments />} />
//                 <Route path='/admindoctors' element={< Admindocters />} />
//                 <Route path='/adddoctor' element={< Adddoctor />} />
//                 <Route path='/bookappointment' element={< Appoiment />} />
//                 <Route path='/profile' element={< Profile />} />
//                 <Route path='/event' element={< Event />} />
//                 <Route path='/mailinbox' element={< Mailinbox />} />
//                 <Route path='/admincontact' element={< Admincontact />} />
//                 <Route path='/allpatients' element={< Patients />} />
//                 <Route path='/addpatient' element={< Addpatients />} />
//                 <Route path='/patientprofile' element={< Patientsprofile />} />
//                 <Route path='/patientinvoice' element={< Patientinvoice />} />
//                 <Route path='/payments' element={< Payments />} />
//                 <Route path='/addpayments' element={< Addpayments />} />
//                 <Route path='/moreDepartments' element={< Moredepartment />} />
//                 <Route path='/moreDepartments' element={< Moredepartment />} />
//                 <Route path='/forgotpassword' element={< Forgotpassword />} />
//                 <Route path='/page404' element={<Page404 />} />
//                 <Route path='/page500' element={<Page500 />} />
//                 <Route path='/pageoffline' element={<Pageoffline />} />
//                 <Route path='/locked' element={<Loked />} />
//                 <Route path='/blogdashboard' element={<Blogdashboard />} />
//                 <Route path='/blogpost' element={<Blogpost />} />
//                 <Route path='/bloglist' element={<Bloglist />} />
//                 <Route path='/bloggrid' element={<Bloggrid />} />
//                 <Route path='/blogdetails' element={<Blogdetails />} />
//                 <Route path='/filedashboard' element={<Filedashboard />} />
//                 <Route path='/filedocuments' element={<Filedocuments />} />
//             </Routes>
//     }
// }

// export default Mainpage;