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
export default class Sidemen extends React.Component {

    render() {
        return (
            <>

                <nav class="navBar">

                    <ul class="nav">
                        <li><a href="/Drdash">Dashboard</a></li>
                        <li><a href="/Dprofile">Insert profile</a></li>
                        <li><a href="/message">Admin Message</a></li>
                        <li><a href="/income">Income</a></li>
                        <li><a href="/Dappointment">Appointment</a></li>
                        <li><a href="/helloD">View profile</a></li>
                       
                        <li><a href="/timeline">Timeline</a></li>
                        <li><a href="/search">Patient Account</a></li>
                        <li><a href="/staffaccount">AddStaff</a></li>
                        <li><a href="/staffdetail">StaffDetail</a></li>
                        <li><a href="/holiday">StaffHoliday</a></li>
                        <li><a href="/insertblog">insertblog</a></li>
                        <li><a href="/assign">Msg Staff</a></li>
                        <li><a href="/logout">logout</a></li>

                       
                        


                    </ul>

                </nav>
            </>
        )
    }
}