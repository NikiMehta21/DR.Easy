import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Home from './home';
import adminlogin from './Admin/adminlogin';
import Registration from './Registration';

import Menu from './menu';
import geo from './geo';
import appointment from './Patient/appointment'
import Map from './Patient/map';
import HMap from './Patient/Hmap';
import Drdashboard from './Doctor/Drdashboard';
import dashboard from './Patient/dashboard';
import forget from './forget';
import UpdatePass from './UpdatePass'
import blogs from './Patient/blogs'
import insertblog from './Doctor/insertblog'
import profile from './Doctor/profile'
import holiday from './Doctor/holiday'
import helloD from './Doctor/helloD';
import Dappointment from './Doctor/appointment';
import confirmapp from "./Doctor/confirm";
import message from "./Doctor/message";
import income from "./Doctor/income";
import PatientDetails from "./Doctor/patientdetail";
import Dprofile from "./Doctor/profile";
import search from "./Doctor/Search";
import feedback from './Patient/feedback';
import camera from './Patient/cmera';
import medicine from './Patient/medicine';
import Patientmenu from './Patient/Patientmenu';
import LocationA from './Patient/locationA';
import PatientProfile from './Patient/PatientProfile';
import account from './Patient/account';
import prescribe from './Doctor/prescribe';
import Form from './Doctor/Meda';
import staffaccount from './Doctor/staffaccount';
import staffdetail from './Doctor/staffdetail';
import timeline from './components/timeline'
import ViewStaff from './Doctor/ViewStaff'
import Assign from './Doctor/Assign'
import notification from './Patient/notification'
import totaldr from './Admin/totaldr'
import Messagedr from './Admin/Messagedr'
//import stafflogin from './Staff/stafflogin'

import { IonButton, IonIcon, IonToolbar, IonMenuButton, IonButtons, IonApp, IonHeader, IonMenu, IonSplitPane, IonTitle } from '@ionic/react';
import { thumbsUp } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import Navbar1 from './components/navbar'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import stafflogin from './Staff/stafflogin';
import logout from './Staff/logout';
import attenfance from './Staff/attenfance';
import drmessage from './Staff/drmessage';
import holidayrequest from './Staff/holidayrequest';
import bestperform from './Admin/bestperform';
import todaydr from './Admin/todaydr';
import bestfeedback from './Admin/bestfeedback';
import worstfeedback from './Admin/worstfeedback';
import Adminmenu from './Admin/adminmenu';
import canceldr from './Admin/canceldr';
function App() {
  return (

    <Router>




      <div className="App ">

        


        <IonApp>
          <Switch>

            <Route exact path="/" component={Home} />

            <Route path="/login" component={Login} />
            <Route path="/account/:id" component={account} />
            <Route path="/camera" component={camera} />
            <Route path="/bestperform" component={bestperform} />
            <Route path="/bestfeedback" component={bestfeedback} />
            <Route path="/worstfeedback" component={worstfeedback} />
            <Route path="/Adminmenu" component={Adminmenu} />
            <Route path="/helloD" component={helloD} />
            <Route path="/Pdash" component={dashboard} />
            <Route path="/Drdash" component={Drdashboard} />
            <Route path="/map" component={Map} />
            <Route path="/blogs" component={blogs} />
            <Route path="/insertblog" component={insertblog} />
            <Route path="/HMap" component={HMap} />
            <Route path="/appointment" component={appointment} />
            <Route path="/forget" component={forget} />
            <Route path="/profile" component={profile} />
            <Route path="/Update" component={UpdatePass} />
            <Route path="/Patientmenu" component={Patientmenu} />
            <Route path="/registration" component={Registration} />
            <Route path="/timeline" component={timeline} />
            <Route path="/staffdetail" component={staffdetail} />
            <Route path="/confirm/:pid" component={confirmapp} />
            <Route path="/message" component={message} />
            <Route path="/income" component={income} />
            <Route path="/stafflogin" component={stafflogin} />
            <Route path="/Dprofile" component={Dprofile} />
            <Route path="/pdetails" component={PatientDetails} />
            <Route path="/Dappointment" component={Dappointment} />
            <Route path="/feedback" component={feedback} />
            <Route path="/search" component={search} />
            <Route path="/medicine" component={medicine} />
            <Route path="/Assign" component={Assign} />
            <Route path="/prescribe" component={prescribe} />
            <Route path="/attenfance" component={attenfance} />
            <Route path="/logout" component={logout} />
            <Route path="/drmessage" component={drmessage} />
            <Route path="/staffaccount" component={staffaccount} />
            <Route path="/notification" component={notification} />
            <Route path="/PatientProfile" component={PatientProfile} />
            <Route path="/holidayrequest" component={holidayrequest} />
            <Route path="/adminlogin" component={adminlogin} />
            <Route path="/location" component={LocationA} />
            <Route path="/holiday" component={holiday} />
            <Route path="/canceldr" component={canceldr} />
            <Route path="/totaldr" component={totaldr} />
            <Route path="/todaydr" component={todaydr} />
            <Route path="/Form/:id" component={Form} />
            <Route path="/ViewStaff/:staffid" component={ViewStaff} />
            <Route path="/Messagedr/:id" component={Messagedr} />
            
          </Switch>



        </IonApp>


      </div>

    </Router>
  );
}

export default App;
