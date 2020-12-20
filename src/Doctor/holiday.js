import React, { Component } from 'react';
import { IonApp, IonButton, IonContent, IonHeader, IonItem, IonLabel, IonText, IonTitle, IonToolbar } from '@ionic/react';
import Axios from 'axios';
import Sidemen from '../Patient/Sidemen'
class holiday extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drpro: [],
        }
    }

    componentDidMount() {
        const email = localStorage.getItem('email')
        const url = "http://localhost:80/doctor/holidayreq.php";
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

    approve = e => {
        e.preventDefault();
        const url = "http://localhost:80/doctor/holidayapprove.php";
        const id = e.target.getAttribute("id")
        let formData = new FormData();
        formData.append("id", id);
       // console.log(e.target.getAttribute("id"))
       Axios.post(url, formData)
       .then((res) => {
           const responseMsg = res.data;
           //this.state.id=responseMsg.id;
           if (responseMsg.success == '0') {
    
    
               alert("Something goes wrong");
    
           }
           else {
               // this.props.history.push('/login')
               alert("Holiday Approved");
           }
       }).catch(res => console.log(Error))
    }

    render() {
        const { drpro } = this.state;
        return (
            <IonApp>
                <IonHeader>
                    <IonToolbar>
                    <Sidemen />
                        <IonTitle>Holiday Approval</IonTitle>

                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <table class="table">
                        <thead>
                            <th>Name</th>
                            <th>Reason</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Applied Date</th>
                            <th>Approval</th>

                        </thead>
                        <tbody>
                            {drpro.map(list => (

                                <tr>
                                    <td>{list.name}</td>
                                    <td>{list.reason}</td>
                                    <td>{list.fdate}</td>
                                    <td>{list.ldate}</td>
                                    <td>{list.cdate}</td>
                                    <td><IonButton onClick={this.approve} key={list.id} id={list.id}  >
                                        Approve
                                        </IonButton></td>
                                    
                                </tr>

                            ))}




                        </tbody>
                    </table>
                </IonContent>
            </IonApp>
        );
    }

} export default holiday