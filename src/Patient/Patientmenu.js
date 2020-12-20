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
export default class Patientmenu extends React.Component {

    render() {
        return (
            <>
                <nav class="navBar">
                    <ul class="nav">
                        <li><a href="/PatientProfile">Your Account</a></li>
                        <li><a href="/Pdash">Dashboard</a></li>
                        <li><a href="/appointment">Make Appointment</a></li>
                        <li><a href="/medicine">Prescribtion</a></li>
                        <li><a href="/feedback">feedback</a></li>
                        <li><a href="/timeline">Timeline</a></li>
                        <li><a href="/notification">notification</a></li>
                        <li><a href="/logout">LogOut</a></li>
                    </ul>
                </nav>
            </>
        )
    }
}