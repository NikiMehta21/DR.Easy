import React, { Component } from 'react';
import { IonApp, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonCol, IonRow, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import Patientmenu from './Patientmenu';
import Axios from 'axios';
import { pencil, peopleCircleOutline } from 'ionicons/icons';

class notification extends Component {

    constructor(props) {
        super(props)
        this.state =
        {
            val: "0",
            drlist: [],
            phoneno: '',
            name: '',


        }

    }


    componentDidMount() {
        const url = "http://localhost:80/doctor/notificationapp.php";
        Axios.get(url, {
            params: {
                email: localStorage.getItem('email')
            }

        }).then(resp => {

            this.setState({

                name: resp.data.c_status,
                phoneno: resp.data.apptime

            })

            console.log(resp.data)
            console.log(this.state)
        });



    }



    render() {

        if (this.state.name === '1') {
            return (
                <IonApp>
                    <IonHeader>
                        <Patientmenu />
                        <IonToolbar><IonTitle> Notification </IonTitle></IonToolbar>
                    </IonHeader>

                    <IonContent>




                        <table class="table">
                            <thead>
                                <th>Your Appointment is Confirmed at {this.state.phoneno}</th>
                                


                            </thead>
                            <tbody>
                            </tbody>
                        </table>






                    </IonContent>
                </IonApp>

            );
        }


     else if (this.state.name === '2') {
            return (
                <IonApp>
                    <IonHeader>
                        <Patientmenu />
                        <IonToolbar><IonTitle> Notification </IonTitle></IonToolbar>
                    </IonHeader>

                    <IonContent>




                        <table class="table">
                            <thead>
                                <th>Sorry Your Appointment has by Doctor due to some reasonable Circumstances</th>
                                


                            </thead>
                            <tbody>
                            </tbody>
                        </table>






                    </IonContent>
                </IonApp>

            );
        }
        else {
            return (
                <IonApp>
                    <IonHeader>
                        <Patientmenu />
                        <IonToolbar><IonTitle> Notification </IonTitle></IonToolbar>
                    </IonHeader>

                    <IonContent>




                        <table class="table">
                            <thead>
                                <th>Wait For Confirmation..!</th>


                            </thead>
                            <tbody>
                            </tbody>
                        </table>






                    </IonContent>
                </IonApp>

            );
        }


    }

}
export default notification;