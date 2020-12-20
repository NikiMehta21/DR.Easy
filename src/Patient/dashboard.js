import React, { Component } from 'react';
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
    IonTextarea, IonButton, IonIcon, IonToolbar, IonTitle, IonCard, IonRouterLink, IonButtons, IonToggle, IonSplitPane
    } from '@ionic/react'
     import menu from '../menu';
import Sidemen from '../Patient/Sidemen'
import Patientmenu from './Patientmenu';

class PatientDash extends Component
{
    render()
    {
        return(
            
            <IonApp>
               

           
               
            
                
            <IonHeader>
            <Patientmenu/>
                <IonToolbar>
                    <IonTitle>Dashboard</IonTitle>
                </IonToolbar>
            </IonHeader>
            
            <IonContent>

          
                <IonGrid>
                    <IonRow>
                        <IonCol size="4">
                            <IonCard>
                                <IonTitle>Make Appointment</IonTitle>
                            <section>
                                <IonIcon icon={checkmarkCircle} class="person"></IonIcon>
                            </section>
                            <IonButton color="dark" expand="block">Make Appointment</IonButton>
                            </IonCard>
                        </IonCol>
    
                        <IonCol size="4">
                            <IonCard>
                                <IonTitle>Search Dr</IonTitle>
                            <section>
                                <IonIcon icon={people} class="person"></IonIcon>
                            </section>
                            <IonButton color="dark" expand="block">Search Dr</IonButton>
                            </IonCard>
                        </IonCol>
                    </IonRow>
    
    
                    <IonRow>
                        <IonCol size="4">
                            <IonCard>
                                <IonTitle>Medicine</IonTitle>
                            <section>
                                <IonIcon icon={reader} class="person"></IonIcon>
                            </section>
                            <IonButton color="dark" expand="block">Medicine</IonButton>
                            </IonCard>
                        </IonCol>
    
                        <IonCol size="4">
                            <IonCard>
                                <IonTitle>Total Report</IonTitle>
                            <section>
                                <IonIcon icon={book} class="person"></IonIcon>
                            </section>
                            <IonButton color="dark" expand="block">Total Report</IonButton>
                            </IonCard>
                        </IonCol>
                    </IonRow>
    
    
                    
                </IonGrid>
                
            </IonContent>
           

           
           
        </IonApp>
        
            
        );

    }
}

export default PatientDash;