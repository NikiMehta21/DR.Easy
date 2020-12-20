import React from "react";
import { checkmarkCircle, create, people, book, cash, reader } from 'ionicons/icons'
import {
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonContent,
    IonApp,
    IonHeader,
    IonLabel,
    IonItem,
    IonSelectOption,
    IonSelect,
    IonTextarea, IonButton, IonIcon, IonToolbar, IonTitle, IonCard, IonRouterLink, IonButtons, IonToggle, IonSplitPane
} from '@ionic/react'
import { Link } from 'react-router-dom';
export default class Adminmenu extends React.Component {

    render() {
        return (
            <>

                <nav class="navBar">

                    <ul class="nav">
                        <li><a href="\todaydr">Today Registered  Dr</a></li>
                        <li><a href="\totaldr">Total Registered Drs</a></li>
                        <li><a href="\bestperform">Worst Performnce</a></li>
                        <li><a href="\canceldr">Most Cancelled Appointment</a></li>
                        <li><a href="\bestfeedback">Bestfeedback</a></li>
                        <li><a href="\logout">Logout</a></li>
                        

                       
                        


                    </ul>

                </nav>
            </>
        )
    }
}