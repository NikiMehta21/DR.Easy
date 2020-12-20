import React, { Component } from 'react';
import { IonTitle, IonHeader, IonApp, IonToolbar,IonIcon, IonContent,IonSelect,IonSelectOption, IonSearchbar, IonButton, IonGrid, IonRow, IonCol, IonInput } from '@ionic/react';
import Axios from 'axios';
import {add, thumbsUp} from  'ionicons/icons';

class Medicine extends Component{

    render(){
        return(

            <tr>
            <td><IonInput placeholder="Medicine" style={{width:'100px'}}></IonInput></td>
            <td><IonInput type="number" placeholder="Nos/D" style={{width:'70px'}}></IonInput></td>
            <td> <IonSelect  name="Time" placeholder="Time">
                <IonSelectOption value="1">Morning</IonSelectOption>
                <IonSelectOption value="2">Afternoon</IonSelectOption>
                <IonSelectOption value="3">Night</IonSelectOption>
                <IonSelectOption value="4">Afternoon/Morning</IonSelectOption>
                <IonSelectOption value="5">Night/Mor/Noon</IonSelectOption>
                <IonSelectOption value="6">Mor/Night</IonSelectOption>

            </IonSelect></td>
            <td><IonSelect  name="food" placeholder="Food">
                <IonSelectOption value="1">Before Food</IonSelectOption>
                <IonSelectOption value="2">After Food</IonSelectOption>
                

            </IonSelect></td>

            <td><IonButton class="btn" onClick={this.addNewRow}> <IonIcon icon ={add}slot="start"/></IonButton>  </td>
        </tr>
        )
    }

}export default Medicine