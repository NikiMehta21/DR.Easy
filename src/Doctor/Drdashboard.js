import React from 'react';
import {checkmarkCircle,create,people,book,cash,reader} from 'ionicons/icons'
import { IonGrid, 
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
    IonTextarea, IonButton, IonIcon, IonToolbar, IonTitle, IonCard, IonRouterLink, IonButtons, IonToggle
    } from '@ionic/react'
    import Sidemen from '../Patient/Sidemen';
    function Drdashboard() {
        return (


    <IonApp>
        <IonHeader>
           <Sidemen/>
            <IonToolbar>
                <IonTitle>Dashboard</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol size="4">
                        <IonCard>
                            <IonTitle>Confirm Appointment</IonTitle>
                        <section>
                            <IonIcon icon={checkmarkCircle} class="person"></IonIcon>
                        </section>
                        <IonButton color="dark" expand="block">Confirm Appointment</IonButton>
                        </IonCard>
                    </IonCol>

                    <IonCol size="4">
                        <IonCard>
                            <IonTitle>Patient Account</IonTitle>
                        <section>
                            <IonIcon icon={people} class="person"></IonIcon>
                        </section>
                        <IonButton color="dark" expand="block">Patient Account</IonButton>
                        </IonCard>
                    </IonCol>
                </IonRow>


                <IonRow>
                    <IonCol size="4">
                        <IonCard>
                            <IonTitle>Todays Record</IonTitle>
                        <section>
                            <IonIcon icon={reader} class="person"></IonIcon>
                        </section>
                        <IonButton color="dark" expand="block">Todays Record</IonButton>
                        </IonCard>
                    </IonCol>

                    <IonCol size="4">
                        <IonCard>
                            <IonTitle>Day Book</IonTitle>
                        <section>
                            <IonIcon icon={book} class="person"></IonIcon>
                        </section>
                        <IonButton color="dark" expand="block">Day Book</IonButton>
                        </IonCard>
                    </IonCol>
                </IonRow>


                <IonRow>
                    <IonCol size="4">
                        <IonCard>
                            <IonTitle>Staff Payroll</IonTitle>
                        <section>
                            <IonIcon icon={cash} class="person"></IonIcon>
                        </section>
                        <IonButton color="dark" expand="block">Staff Payroll</IonButton>
                        </IonCard>
                    </IonCol>

                    <IonCol size="4">
                        <IonCard>
                            <IonTitle>Active Case</IonTitle>
                        <section>
                            <IonIcon icon={create} class="person"></IonIcon>
                        </section>
                        <IonButton color="dark" expand="block">Active Case</IonButton>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>

        </IonContent>
    </IonApp>

);}

export default Drdashboard;