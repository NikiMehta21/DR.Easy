import React, { Component } from 'react';
import {IonApp, IonAvatar, IonButton, IonCard,IonCardSubtitle,IonCardTitle, IonCardContent, IonCardHeader, IonContent, IonHeader, IonItem, IonLabel, IonText, IonTitle, IonToolbar, IonGrid, IonImg, IonIcon, IonSplitPane} from '@ionic/react';
import drimg from '../dr.png';
import {thumbsUp} from  'ionicons/icons';
import {navbar1} from '../components/navbar';
import { Router } from 'react-router-dom';
import Patientmenu from './Patientmenu';

class blogs extends Component
{

    constructor(props)
    {
        super(props)
        
    }
    render(){
        return(
            <IonApp>
            <IonHeader>
                <Patientmenu/>
                <IonToolbar>
                    <IonTitle>Blogs From Doctor </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
            <IonGrid>
                <IonCard>
                    <div class="right" style={{width : '30%',float:'left'}} >
                    <img src={drimg} style={{width : '100px',height:'200px'}}/>
                    </div>
                    <div class="right" style={{width : '70%',float:'right'}}>
                    <IonCardHeader>
                       <IonTitle>Dr Niki Mehta</IonTitle>
                       <IonCardTitle>Patient SmileHospital</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                    Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
                    </IonCardContent>
                    <IonToolbar>
                        <IonButton><IonIcon icon={thumbsUp}></IonIcon></IonButton>
                    </IonToolbar>
                    </div>
                </IonCard>

                <IonCard>
                    <div class="right" style={{width : '30%',float:'left'}} >
                    <img src={drimg} style={{width : '100px',height:'200px'}}/>
                    </div>
                    <div class="right" style={{width : '70%',float:'right'}}>
                    <IonCardHeader>
                       <IonTitle>Dr Niki Mehta</IonTitle>
                       <IonCardTitle>Patient SmileHospital</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                    Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
                    </IonCardContent>
                    <IonToolbar>
                        <IonButton><IonIcon icon={thumbsUp}></IonIcon></IonButton>
                    </IonToolbar>
                    </div>
                </IonCard>

                <IonCard>
                    <div class="right" style={{width : '30%',float:'left'}} >
                    <img src={drimg} style={{width : '100px',height:'200px'}}/>
                    </div>
                    <div class="right" style={{width : '70%',float:'right'}}>
                    <IonCardHeader>
                       <IonTitle>Dr Niki Mehta</IonTitle>
                       <IonCardTitle>Patient SmileHospital</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                    Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
                    </IonCardContent>
                    <IonToolbar>
                        <IonButton><IonIcon icon={thumbsUp}></IonIcon></IonButton>
                    </IonToolbar>
                    </div>
                </IonCard>

                <IonCard>
                    <div class="right" style={{width : '30%',float:'left'}} >
                    <img src={drimg} style={{width : '100px',height:'200px'}}/>
                    </div>
                    <div class="right" style={{width : '70%',float:'right'}}>
                    <IonCardHeader>
                       <IonTitle>Dr Niki Mehta</IonTitle>
                       <IonCardTitle>Patient SmileHospital</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                    Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
                    </IonCardContent>
                    <IonToolbar>
                        <IonButton><IonIcon icon={thumbsUp}></IonIcon></IonButton>
                    </IonToolbar>
                    </div>
                </IonCard>

                <IonCard>
                    <div class="right" style={{width : '30%',float:'left'}} >
                    <img src={drimg} style={{width : '100px',height:'200px'}}/>
                    </div>
                    <div class="right" style={{width : '70%',float:'right'}}>
                    <IonCardHeader>
                       <IonTitle>Dr Niki Mehta</IonTitle>
                       <IonCardTitle>Patient SmileHospital</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                    Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.
                    </IonCardContent>
                    <IonToolbar>
                        <IonButton><IonIcon icon={thumbsUp}></IonIcon></IonButton>
                    </IonToolbar>
                    </div>
                </IonCard>
            </IonGrid>
            </IonContent>
            </IonApp>
        );

    }
}
export default blogs;