import React, { Component } from 'react';
import {checkmarkCircle,create,people,book,cash,reader} from 'ionicons/icons'
import { IonGrid, 
    IonRow, 
    IonCol, 
    IonInput, 
    IonContent,
    IonMenu, 
    IonApp, 
    IonHeader, 
    IonLabel, 
    IonItem,
     IonSelectOption,
     IonSelect,
    IonTextarea,IonMenuToggle,IonList,IonRouterOutlet, IonButton, IonIcon, IonToolbar, IonTitle, IonCard, IonRouterLink, IonButtons, IonToggle, IonSplitPane
    } from '@ionic/react'


class Menu extends Component{

  render(){
    return(

     <>
    <IonApp>
     <IonMenu menuId="mainmen" contentId="main">
        
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>

        
          
          <IonList>
          <IonMenuToggle autoHide="false">
              <IonItem>
                <IonLabel>Confirm</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Confirm</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Confirm</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Confirm</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>Confirm</IonLabel>
              </IonItem>

              </IonMenuToggle>
          </IonList>
      
      
          </IonMenu>
          <IonRouterOutlet id="main"></IonRouterOutlet>
      
    </IonApp>
    
        </>
      
    );

  }
}




    
    export default Menu;