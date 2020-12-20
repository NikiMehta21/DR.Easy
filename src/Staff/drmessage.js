import React, { Component } from "react";
import { IonApp, IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import Staffmen from './staffmen'
import Axios from "axios";
class drmessage extends Component {
    constructor(props) {
        super(props);

        this.state = {

            drpro: []

        };
    }

    componentDidMount() {
        const user = localStorage.getItem('staffuser')
        const url = "http://localhost:80/doctor/getdrnotice.php";
        Axios.get(url, {
            params: {
                user: user
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
                <Staffmen />
                    <IonToolbar>
                        <IonTitle>Notice /Message From Dr</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <table class="table">
                        <thead>
                            <th>Date</th>
                            <th>Title</th>
                            <th>Message</th>

                        </thead>
                        <tbody>
                            {drpro.map(list => (
                                <tr>
                                    <td>{list.date}</td>
                                    <td>{list.title}</td>
                                    <td>{list.notice}</td>

                                </tr>
                            ))}





                        </tbody>
                    </table>
                </IonContent>

            </IonApp >
        );

    }
}


export default drmessage;
