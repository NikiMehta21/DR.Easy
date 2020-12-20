import React from 'react';
import './App.css';
import drimg from './dr.png';
import {IonApp, IonButton, IonContent, IonIcon}  from  '@ionic/react';
import {star, thumbsUp} from  'ionicons/icons';
import { useHistory } from 'react-router-dom';
import {Link} from'react-router-dom';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function home() {
  return (
    <Router>
    <div className="home">
      <IonApp>
      <IonContent>
      <div class="menu" style={{
        display: 'flex',
        alignItems: 'center',
        padding: '0px',
        justifyContent: 'center'
      }}>
     
      <IonButton style={{width : '40%'}} onClick={event =>window.location.href='/Registration'}>Registration</IonButton>
      <IonButton style={{width : '40%'}} onClick={event =>window.location.href='/Login'}>Login</IonButton>
      </div>
    
        <div class="about" style={{display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', height: '700px'}}>
          <div class="Image" style={{height : 'auto'}}>
            <img src={drimg} height="auto" width="250px" alt="" />
          </div>
          <div class="inner-about">
            <h1>ITS DOCTOR EASY!</h1><br/>
            <p>
              <IonButton onClick={event =>window.location.href='/adminlogin'}>
                <IonIcon icon ={thumbsUp} slot="start"/>
              </IonButton>

              <IonButton onClick={event =>window.location.href='/stafflogin'}>
                <IonIcon icon ={star} slot="start"/>
              </IonButton>
            </p>
            <p>Hey ..! WE ARE SURE YOU GET THE BEST SERVICE.</p>
            <p>WE CARE FOR YOU.HAPPY TO SEE YOU HERE</p>
              
          </div>
        </div>
        </IonContent>
        </IonApp>
      </div>
    </Router>
  );
}

export default home;