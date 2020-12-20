import React, { Component } from 'react';
import { IonApp, IonButton, IonContent, IonHeader, IonItem, IonLabel, IonText, IonTitle, IonToolbar } from '@ionic/react';
import Adminmenu  from '../Admin/adminmenu'
import Axios from 'axios';

class todaydr extends Component {

    constructor(props) {
        super(props)
        this.state = {
            drpro: [],
        }
    }

    componentDidMount() {
        const email = localStorage.getItem('email')
        const url = "http://localhost:80/doctor/drregistered.php";
        Axios.get(url, {
            params: {
                email: email
            }

        }).then(resp => {
            this.setState({ drpro: resp.data })
            console.log(resp.data)

            //console.log(resp.data.status)
        });
    }




    render() {
        const { drpro } = this.state;
        return (
            <IonApp>
                <IonHeader>
                    <Adminmenu  />
                    <IonToolbar>
                        <IonTitle>Today Registered doctor</IonTitle>

                    </IonToolbar>
                </IonHeader>
                <IonContent>

                    
                    <table class="table">
                        <thead>
                            <th>Name</th>
                            <th>PhoneNo</th>
                            <th>email</th>
                            <th>Address</th>
                            <th>State</th>

                        </thead>
                        <tbody>
                            {drpro.map(list => (

                                <tr>


                                    <td>{list.name}</td>
                                    <td>{list.phoneno}</td>
                                    <td>{list.email}</td>
                                    <td>{list.Address}</td>
                                    <td>{list.state}</td>
                                </tr>
                            ))}






                        </tbody>
                    </table>
                </IonContent>
            </IonApp>
        );
    }

} export default todaydr