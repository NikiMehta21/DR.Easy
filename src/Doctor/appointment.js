import React, { Component } from "react";
import { IonApp, IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import Sidemen from '../Patient/Sidemen'
import Axios from "axios";
class Dappointment extends Component {
    constructor(props) {
        super(props);

        this.state = {

            patientlist: []

        };
    }

    componentDidMount() {
        const email = localStorage.getItem('email')
        const url = "http://localhost:80/doctor/capp.php";
        Axios.get(url, {
            params: {
                email: email
            }

        }).then(resp => {
            this.setState({ patientlist: resp.data })
            console.log(resp.data)

            //console.log(resp.data.status)




        });

    }

    render() {
        const { patientlist} = this.state;
        return (

            <IonApp>
                <IonHeader>
                    <Sidemen />
                    <IonToolbar>
                        <IonTitle>Confirm appointment</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <table class="table">
                        <thead>
                            <th>Name</th>
                            <th>Disease</th>
                            <th>Appointment Time</th>
                            <th>Age</th>
                            <th>Phone Number</th>
                            <th>Confirm appointment</th>
                        </thead>
                        <tbody>
                        {patientlist.map(list => (
                            <tr>
                                <td>{list.pname}</td>
                                <td>{list.symptoms}</td>
                                <td>{list.apptime}</td>
                                <td>{list.age}</td>
                                <td>{list.phoneno}</td>
                                <td><IonButton  onClick={event =>window.location.href='/confirm/'+list.pid}>Confirm  Appointment</IonButton></td>
                            </tr>
                        ))}
                            <tr>
                                <td>Jilu Somani</td>
                                <td>Headache and Cold </td>
                                <td>2:00pm</td>
                                <td>22</td>
                                <td>9089990811</td>
                                <td><IonButton onClick={event =>window.location.href='/confirm'}>Confirm appointment</IonButton></td>
                            </tr>
                            <tr>
                                <td>Hina Gandhi</td>
                                <td>Asthama </td>
                                <td>8:30pm</td>
                                <td>21</td>
                                <td>9089900011</td>
                                <td><IonButton onClick={event =>window.location.href='/confirm'}>Confirm appointment</IonButton></td>
                            </tr>

                            <tr>
                                <td>Isha Gandhi</td>
                                <td>Headache and Cold </td>
                                <td>6:00pm</td>
                                <td>16</td>
                                <td>9089990811</td>
                                <td><IonButton onClick={event =>window.location.href='/confirm'}>Confirm appointment</IonButton></td>
                            </tr>
                            




                        </tbody>
                    </table>
                </IonContent>

            </IonApp >
        );

    }
}


export default Dappointment;
