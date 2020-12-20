import React, { Component } from 'react';
import { IonApp, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonCol, IonRow, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import Patientmenu from './Patientmenu';
import Modal from './Modal';
import Axios from 'axios';
import { pencil, peopleCircleOutline } from 'ionicons/icons';

class PatientProfile extends Component {

    constructor(props) {
        super(props)
        this.state =
        {
            val: "0",
            drlist: [],
            phoneno: '',
            name: '',
            amount: '',
            show: true,

        }

    }

    showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };

    hideModal = () => {
        this.setState({ show: false });
    };

    handlepname = e => {
        this.setState({ name: e.target.value });
    };
    handlecell = e => {
        this.setState({phoneno: e.target.value  });
    };

    componentDidMount() {
        const url = "http://localhost:80/doctor/appointmentacc.php";
        Axios.get(url, {
            params: {
                email: localStorage.getItem('email')
            }

        }).then(resp => {

            this.setState({

                drlist: resp.data

            })
            console.log(resp.data)
            console.log(this.state)




            //console.log(resp.data.status)
        });


        const url1 = "http://localhost:80/doctor/paprofile.php";
        Axios.get(url1, {
            params: {
                email: localStorage.getItem('email')
            }

        }).then(resp => {

            this.setState({

                amount: resp.data.amount,
                name: resp.data.name,
                phoneno: resp.data.rphone,

            })
            console.log(resp.data)
            console.log(this.state)




            //console.log(resp.data.status)
        });


        
    }



    submitbtn = e => {

        e.preventDefault();
        console.log(this.state)

        let formData = new FormData();
        formData.append("phoneno", this.state.phoneno);
        formData.append("name", this.state.name);
        formData.append("email", localStorage.getItem('email'));
        const url = "http://localhost:80/doctor/editpapro.php";
        Axios.post(url, formData)
      .then((res) => {
        console.log(res)
        }).catch(res => console.log(Error))
        alert('updated')

    };

    render() {
        const { drlist } = this.state;
        return (
            <IonApp>
                <IonHeader>
                    <Patientmenu/>
                    <IonToolbar><IonTitle> Your Account </IonTitle></IonToolbar>
                </IonHeader>

                <IonContent>



                    

                            <div class="details" style={{marginBottom:'2px'}}>
                            <IonItem>
                                <IonLabel position='floating'>Name</IonLabel>
                                <IonInput value={this.state.name} onIonChange={this.handlepname}></IonInput>
                            </IonItem>

                            <IonItem>
                                <IonLabel position='floating'>Phoneno</IonLabel>
                                <IonInput value={this.state.phoneno} onIonChange={this.handlecell}></IonInput>
                            </IonItem>

                                <IonButton onClick={this.submitbtn}>Update</IonButton>
                            </div>
                            
                       
                    <table class="table">
                        <thead>
                            <th>YourName</th>
                            <th>PhoneNo</th>
                            <th>Total Paid Fees</th>

                        </thead>
                        <tbody>

                            <tr>
                                <td data-label="DrNmae">{this.state.name}</td>
                                <td>{this.state.phoneno}</td>
                                <td>{this.state.amount}</td>


                            </tr>






                        </tbody>
                    </table>

                    <table class="table">
                        <thead>
                            <th>DrName</th>
                            <th>Date</th>
                            <th>Symptoms</th>
                            <th>AppTime</th>
                            <th>Fee</th>
                        </thead>
                        <tbody>
                            {drlist.map(list => (
                                <tr>
                                    <td data-label="DrNmae">{list.name}</td>
                                    <td>{list.date}</td>
                                    <td>{list.symptoms}</td>
                                    <td>{list.apptime}</td>
                                    <td>{list.fee}</td>

                                </tr>
                            ))}





                        </tbody>
                    </table>

                    
                    
                </IonContent>
            </IonApp>

        );
    }

}
export default PatientProfile;
