import React, { Component } from 'react';
import { IonTitle, IonHeader, IonApp, IonToolbar,IonIcon, IonContent,IonSelect,IonSelectOption, IonSearchbar, IonButton, IonGrid, IonRow, IonCol, IonInput } from '@ionic/react';
import Axios from 'axios';
import {add, thumbsUp} from  'ionicons/icons';
import Medicine from './Medicine'

class prescribe extends Component {
    state = {
        medicine: [{ index: Math.random(), Name: "", nos: "", time: "", food: "" }],
        date: "",
        description: "",
    }


    addNewRow = (e) => {
        this.setState((prevState) => ({
            medicine: [...prevState.medicine, { index: Math.random(), Name: "", nos: "", time: "", food: "" }],
        }));
    }
    render() {
        let { medicine } = this.state
        return (
            

            <IonApp>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Prescription</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <div class="cen" style={{justifyContent:'normal'}}>
                        <table class="table">

                            <tbody>

                             <Medicine></Medicine>  
                                <td>
                                    <IonButton></IonButton>
                                </td>
                            </tbody>
                        </table>
                    </div>
                </IonContent>
            </IonApp>
        );
    }

} export default prescribe;