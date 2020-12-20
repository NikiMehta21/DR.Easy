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
export default class Staffmen extends React.Component {

    render() {
        return (
            <>

                <nav class="navBar">

                    <ul class="nav">
                        <li><a href="attenfance">Attendance</a></li>
                        <li><a href="drmessage">Dr Notification</a></li>
                        <li><a href="holidayrequest">Leave Management</a></li>
                        <li><a href="logout">Logout</a></li>
                        

                      
                        


                    </ul>

                </nav>
            </>
        )
    }
}