import React, { Component } from 'react';
import {
    IonApp,
    IonContent,
    IonGrid,
    IonHeader,
    IonRow,
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonToolbar, IonCol, IonButton, IonItem, IonLabel
} from '@ionic/react';
import Axios from "axios";
import Patientmenu from './Patientmenu';

class appointment extends Component {
    constructor(props) {
        super(props)
        this.state =
        {
            drpro: [],
            category: "",
            city: "",
            drlist: []

        }
    };

    componentDidMount() {
        console.log("hello");
        const url = "http://localhost:80/doctor/getappointment.php";
        Axios.get(url).then(resp => {
            this.setState({ drpro: resp.data })
            console.log(resp.data)

            //console.log(resp.data.status)




        });
    }


    handlecat = e => {
        this.setState({ category: e.target.value });
    };

    handlecity = e => {
        this.setState({ city: e.target.value });
    };


    submitbtn = e => {
        e.preventDefault();
        console.log(this.state);
        const url = "http://localhost:80/doctor/drdata.php";
        Axios.get(url,{
            params:{
                category:this.state.category,
                city:this.state.city
            }
        }).then(resp => {
            console.log(resp.data)
            this.setState({ 
               
                 drlist: resp.data
                
            })
            console.log(this.state)
            console.log(resp)
            
        
           
        
        
          });

    }


    render() {
        const { drpro,drlist } = this.state;
        return (

            <IonApp>
                <IonHeader>
                    <Patientmenu/>
                    <IonToolbar>
                        <IonTitle>
                            Doctor Diary
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonGrid>
                        <IonRow>


                            <IonCol size="3">
                                <IonItem>
                                    <IonLabel>City</IonLabel>



                                    <IonSelect name="city" onIonChange={this.handlecity} value={this.state.city}>
                                        {drpro.map(list => (
                                            <IonSelectOption value={list.city}>{list.city}</IonSelectOption>
                                        ))}
                                    </IonSelect>

                                </IonItem>
                            </IonCol>

                            <IonCol size="3">
                                <IonItem>
                                    <IonLabel position="floating">Doctor Category</IonLabel>
                                    <IonSelect onIonChange={this.handlecat} value={this.state.category} name="category" interface="action-sheet">
                                        <IonSelectOption value="Pediatricians">Pediatricians</IonSelectOption>
                                        <IonSelectOption value="General Surgeon">General Surgeon</IonSelectOption>
                                        <IonSelectOption value="Cardiologist">Cardiologist</IonSelectOption>
                                        <IonSelectOption value="Dentist">Dentist</IonSelectOption>
                                        <IonSelectOption value="Dermatologists">Dermatologists</IonSelectOption>
                                        <IonSelectOption value="Gynecologist">Gynecologist</IonSelectOption>
                                        <IonSelectOption value="ENT Specialist">ENT Specialist</IonSelectOption>
                                        <IonSelectOption value="Physicians">Physicians</IonSelectOption>
                                        <IonSelectOption value="Orthopaedic ">Orthopaedic</IonSelectOption>
                                        <IonSelectOption value="ophthalmologist">ophthalmologist</IonSelectOption>
                                        <IonSelectOption value="Vaid">Vaid</IonSelectOption>
                                        <IonSelectOption value="Psychiatrists">Psychiatrists</IonSelectOption>
                                        <IonSelectOption value="Radiologist">Radiologist</IonSelectOption>
                                        <IonSelectOption value=" Endocrinologist"> Endocrinologist</IonSelectOption>
                                        <IonSelectOption value="Homeopathic">Homeopathic</IonSelectOption>

                                    </IonSelect>
                                </IonItem>

                            </IonCol>

                            <IonButton onClick={this.submitbtn}>Search Doctors</IonButton>

                        </IonRow>
                    </IonGrid>





                    <table class="table">
                        <thead>
                            <th>DrName</th>
                            <th>Address</th>
                            <th>Experience</th>
                            <th>Activity</th>
                        </thead>
                        <tbody>
                        {drlist.map(list => (
                            <tr>
                                <td data-label="DrNmae">{list.name}</td>
                                    <td>{list.address}</td>
                                    <td>{list.exp}</td>
                                <td><IonButton onClick={event =>window.location.href='/account/'+list.id}>Make appointment</IonButton></td>
                            </tr>
                        ))}
                            




                        </tbody>
                    </table>
                </IonContent>
            </IonApp>
        );

    }

}
export default appointment;