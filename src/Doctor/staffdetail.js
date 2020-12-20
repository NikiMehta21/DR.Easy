import React, { Component } from 'react';
import { IonApp, IonButton, IonContent, IonHeader, IonItem, IonLabel, IonText, IonTitle, IonToolbar } from '@ionic/react';
import Sidemen from '../Patient/Sidemen'
import Axios from 'axios';

class staffdetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            drpro:[],
        }
    }

    componentDidMount() {
        const email = localStorage.getItem('email')
        const url = "http://localhost:80/doctor/staffdetail.php";
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

    delete = e => {
        e.preventDefault();
        const url = "http://localhost:80/doctor/staffdelete.php";
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
               alert("Deleted");
           }
       }).catch(res => console.log(Error))

    }


    render() {
        const { drpro} = this.state;
        return (
            <IonApp>
                <IonHeader>
                    <Sidemen />
                    <IonToolbar>
                        <IonTitle>Staff Details</IonTitle>

                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <table class="table">
                        <thead>
                            <th>Name</th>
                            <th>PhoneNo</th>
                            <th>Profile</th>
                            
                            <th>Edit/View</th>
                            <th>Delete</th>
                        </thead>
                        <tbody>
                        {drpro.map(list => (
                          
                            <tr>
                                
                               
                                <td>{list.name}</td>
                                <td>{list.phone}</td>
                                <td>{list.profile}</td>
                                <td><IonButton onClick={event =>window.location.href='/ViewStaff/'+list.staffid}>Edit</IonButton></td>
                                <td><IonButton onClick={this.delete} key={list.staffid} id={list.staffid}  >Delete</IonButton></td>
                            </tr>
                              ))}






                        </tbody>
                    </table>
                </IonContent>
            </IonApp>
        );
    }

} export default staffdetail