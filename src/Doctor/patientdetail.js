import React, { Component } from 'react';
import { component } from 'react';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonRow, IonTitle, IonToolbar, IonApp } from '@ionic/react';
import Axios from 'axios'
class PatientDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {

            patientlist: []

        };
    }

    componentDidMount() {
        const email = localStorage.getItem('email')
        const url = "http://localhost:80/doctor/capp.php";
        Axios.get(url, {
            params: {
                email: email
            }

        }).then(resp => {
            this.setState({ patientlist: resp.data })
            console.log(resp.data)

            //console.log(resp.data.status)




        });

    }






    render() {
        return (

            <IonApp>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>

                            Patient Detais
                </IonTitle>
                    </IonToolbar>
                </IonHeader>


                <IonContent>
                    <IonGrid>
                        <IonRow>
                            <IonCol size="1">
                                <IonLabel>Id</IonLabel>
                            </IonCol>
                            <IonCol size="4">
                                <IonLabel>Name</IonLabel>
                            </IonCol>
                            <IonCol size="2">
                                <IonLabel>CaseStatus</IonLabel>
                            </IonCol>
                            <IonCol size="4"><IonLabel>Diseases</IonLabel></IonCol>
                            <IonCol size="3">
                                <IonButton color="dark">
                                    Edit
                            </IonButton>

                            </IonCol>

                        </IonRow>
                    </IonGrid>

                </IonContent>
            </IonApp>

        );
    }

}

export default PatientDetails
