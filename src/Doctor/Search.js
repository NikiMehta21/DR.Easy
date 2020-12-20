import React, { Component } from 'react';
import { IonTitle, IonHeader, IonApp, IonToolbar, IonContent, IonSearchbar, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import Axios from 'axios';
import Sidemen from '../Patient/Sidemen';
import { flashOffOutline } from 'ionicons/icons';
class search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            patient: "",
            patientlist: [],
            Spatientlist: [],
            showMe: false,
            showhere: false
        }

    }

    componentDidMount() {

        this.setState({
            showMe: false,

        })

        this.setState({
            showhere: true,

        })
        const urlid = "http://localhost:80/doctor/visitdr.php";
        Axios.get(urlid, {
            params: {
                email1: localStorage.getItem('email')
            }
        }).then(resp => {

            this.setState({ patientlist: resp.data })
            console.log(resp.data)
            console.log("helo")



        });
    }

    submitbtn = e => {

        e.preventDefault();
        this.setState({
            showMe: true,

        })

        this.setState({
            showhere: false,

        })
        const urlid = "http://localhost:80/doctor/drvisit.php";
        Axios.get(urlid, {
            params: {
                email1: localStorage.getItem('email'),
                pname: this.state.patient,
            }
        }).then(resp => {

            this.setState({ Spatientlist: resp.data })
            console.log(resp.data)
            console.log("helo")



        });

    };

    handlepatient = e => {
        this.setState({ patient: e.target.value });
    };

    render() {
        const { patientlist, Spatientlist } = this.state;
        return (
            <IonApp>
                <IonHeader>
                <Sidemen />
                    <IonToolbar>
                        <IonTitle>
                            Search Patient
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>

                    <div class="cen" style={{ justifyContent: 'normal' }}>



                        <div>
                            <IonSearchbar value={this.state.patient} onIonChange={this.handlepatient} placeholder='Search Patient' style={{ width: '80%' }}></IonSearchbar>
                            <IonButton onClick={this.submitbtn}>Search Patient</IonButton>
                            {
                                this.state.showMe ?
                                    <table class="table">

                                        <thead>
                                            <th>Name</th>
                                            <th>Disease</th>
                                            <th>Registration Time</th>
                                            <th>Appointment Time</th>
                                            <th>Phone Number</th>
                                            <th>Confirm appointment</th>
                                        </thead>
                                        <tbody>
                                            {Spatientlist.map(list => (
                                                <tr>
                                                    <td>{list.pname}</td>
                                                    <td>{list.symptoms}</td>
                                                    <td>{list.regtime}</td>
                                                    <td>{list.apptime}</td>

                                                    <td>{list.phoneno}</td>
                                                    <td><IonButton onClick={event => window.location.href = '/Form/' + list.id}>Prescribe</IonButton></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    : null
                            }
                        </div>
                        {
                            this.state.showhere ?
                                <table class="table">
                                    <thead>
                                        <th>Name</th>
                                        <th>Disease</th>
                                        <th>Registration Time</th>
                                        <th>Appointment Time</th>
                                        <th>Phone Number</th>
                                        <th>Confirm appointment</th>
                                    </thead>
                                    <tbody>
                                        {patientlist.map(list => (
                                            <tr>
                                                <td>{list.pname}</td>
                                                <td>{list.symptoms}</td>
                                                <td>{list.regtime}</td>
                                                <td>{list.apptime}</td>

                                                <td>{list.phoneno}</td>
                                                <td><IonButton onClick={event => window.location.href = '/Form/' + list.id}>Prescribe</IonButton></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                : null
                        }
                    </div>


                </IonContent>
            </IonApp>

        )
    }

} export default search