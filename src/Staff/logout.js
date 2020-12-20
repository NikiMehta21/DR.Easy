import React, { Component } from "react";
import { IonApp, IonButton, IonContent, IonHeader, IonTitle, IonToolbar,IonRow,IonCol,IonItem,IonInput } from "@ionic/react";
import { logoWindows } from "ionicons/icons";


class logout extends Component {
    componentDidMount(){
        localStorage.removeItem('email');
        localStorage.removeItem('staffuser');
        this.props.history.push('/')

    }

    render(){
        return(
            <p>log</p>
        )
    }

}export default logout