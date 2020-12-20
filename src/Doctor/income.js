import React, { Component } from "react";
import { IonApp, IonButton, IonContent, IonHeader, IonTitle, IonToolbar,IonRow,IonCol,IonItem,IonInput } from "@ionic/react";
import Sidemen from '../Patient/Sidemen'

class income extends Component {
    render() {
        return (
            <IonApp>
                <IonHeader>
                    <Sidemen />
                    <IonToolbar>
                        <IonTitle>Income and Expense </IonTitle>
                    </IonToolbar>
                </IonHeader>


                <IonContent>
                <div class="card" >
                
                

                  <IonItem>
                    <IonInput value="Today Income: 12000" readonly="true" color="tertiary"></IonInput>
                  </IonItem>

                  <IonItem>
                    <IonInput value="Today Expense: 890" readonly="true" color="tertiary"></IonInput>
                  </IonItem>
               

             

                  <IonItem>
                    <IonInput value="This Month Income: 63,910" readonly="true" color="tertiary"></IonInput>
                  </IonItem>

                  <IonItem>
                    <IonInput value="This Month Expense: 15000" readonly="true" color="tertiary"></IonInput>
                  </IonItem>
             

             
                </div>

                   
                </IonContent>
            </IonApp>



        )
    }
}

export default income;