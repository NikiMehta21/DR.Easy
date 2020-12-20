import React, { Component } from 'react';
import { IonApp, IonButton, IonContent, IonHeader, IonItem, IonLabel, IonText, IonTitle, IonToolbar } from '@ionic/react';
import Adminmenu  from '../Admin/adminmenu'
import Axios from 'axios';

class worstfeedback extends Component {

    constructor(props) {
        super(props)
        this.state = {
            drpro: [],
        }
    }

    componentDidMount() {
        const email = localStorage.getItem('email')
        const url = "http://localhost:80/doctor/worstfeedback.php";
        Axios.get(url, {
            params: {
                email: email
            }

        }).then(resp => {
            this.setState({ drpro: resp.data })
            console.log(resp.data)

            console.log(this.state.drpro)
        });
    }


    


    render() {
        const { drpro } = this.state;
        return (
            <IonApp>
                <IonHeader>
                    <Adminmenu />
                    <IonToolbar>
                        <IonTitle> Low Feedbacks of Dr</IonTitle>

                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <table class="table">
                        <thead>
                            <th>Name</th>
                            <th>PhoneNo</th>
                            <th>email</th>
                            <th>Cancelation No</th>
                            <th>Message</th>

                        </thead>
                        <tbody>
                            {drpro.map(list => (

                                <tr>


                                    <td>{list.name}</td>
                                    <td>{list.phoneno}</td>
                                    <td>{list.email}</td>
                                    <td>{list.total}</td>
                                    <td><IonButton onClick={event =>window.location.href='/Messagedr/'+list.id}>Message</IonButton></td>
                                    
                                </tr>
                            ))}






                        </tbody>
                    </table>
                </IonContent>
            </IonApp>
        );
    }

} export default worstfeedback