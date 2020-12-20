import { IonContent, IonRow } from "@ionic/react";
import Axios from "axios";
import React from "react";
import Sidemen from '../Patient/Sidemen';

import { IonApp, IonButton, IonCol, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonRouterOutlet, IonTitle, IonToolbar } from "@ionic/react";
export default class helloD extends React.Component {
  state = {
    loading: false,
    data: [],
    persons: ''
  }


  componentDidMount() {
    const url = "http://localhost:80/doctor/drview.php";
    Axios.get(url,{
      params:{
          id:localStorage.getItem('email')
      }
  }).then(resp => {
      this.setState({ data: resp.data })
      console.log(resp.data.fees)
      console.log(resp.data.status)

      this.setState({ persons: resp.data.img });
      console.log(this.state.persons)


    });
  }

  render() {
    return (
      <IonApp>

        <IonHeader>
          <Sidemen />
          <IonToolbar>
            <IonTitle>Patient View For You</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>


          <div class="card">

            <IonGrid>

              <IonRow>
                <IonCol size="6">
                  <div class="cover-photo"></div>
                  <div class="photo">
                    <h3> <IonInput value="Dr Niki Mehta" readonly="true" color="tertiary"></IonInput></h3>
                    <img src={this.state.persons} alt="" />

                  </div>


                </IonCol>

              </IonRow>



              <IonRow>
                <IonCol size="6">

                  <IonItem>
                    <IonInput value="Patient Smile Hospital" readonly="true" color="tertiary"></IonInput>
                  </IonItem>

                  <IonItem>
                    <IonInput value="Physiologist" readonly="true" color="tertiary"></IonInput>
                  </IonItem>
                </IonCol>


              </IonRow>

              <IonRow>
                <IonCol size="6">

                  <IonItem>
                    <IonInput value="Consultation Fee: 250" readonly="true" color="tertiary"></IonInput>
                  </IonItem>

                  <IonItem>
                    <IonInput value="Experience: 4 years" readonly="true" color="tertiary"></IonInput>
                  </IonItem>
                </IonCol>

              </IonRow>


              <IonRow>
                <IonCol size="6">

                  <IonItem>
                    <IonInput value="Status: Happylife@PatientCare" readonly="true" color="tertiary"></IonInput>
                  </IonItem>


                </IonCol>

              </IonRow>

            </IonGrid>

          </div>

        </IonContent></IonApp>
    )
  }
}
