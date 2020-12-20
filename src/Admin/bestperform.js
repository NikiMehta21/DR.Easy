import React, { Component } from 'react';
import { IonApp, IonButton, IonContent, IonHeader, IonItem, IonLabel, IonText, IonTitle, IonToolbar } from '@ionic/react';
import Adminmenu  from '../Admin/adminmenu'
import Axios from 'axios';
import { list } from 'ionicons/icons';

class bestperform extends Component {

    constructor(props) {
        super(props)
        this.state = {
            drpro: [],
            drlist: [],
        }
    }

    componentDidMount() {
        const email = localStorage.getItem('email')
        const url = "http://localhost:80/doctor/worst1.php";
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
    const url = "http://localhost:80/doctor/temp1.php";
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
           alert("Account Locked");
       }
   }).catch(res => console.log(Error))
}
    


    render() {
        const { drpro} = this.state;
        return (
            <IonApp>
                <IonHeader>
                    <Adminmenu />
                    <IonToolbar>
                        <IonTitle> Worst Performance Report</IonTitle>

                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <table class="table">
                        <thead>
                            <th>Name</th>
                            <th>PhoneNo</th>
                            <th>email</th>
                            <th>Low Rattings</th>
                            <th>Cancelation Appointments No</th>
                            <th>Actions</th>

                        </thead>
                        <tbody>

                            {drpro.map(list => (


                                <tr>


                                    <td>Dr.{list.name}</td>
                                    <td>{list.phoneno}</td>
                                    <td>{list.hospital}</td>
                                    <td>{list.ratting}</td>
                                    <td>{list.cancel}</td>

                                    <td><IonButton onClick={this.delete} key={list.id} id={list.id}  >
                                        Restrict
                                        </IonButton></td>

                                </tr>
                            ))}

                           






                        </tbody>
                    </table>
                </IonContent>
            </IonApp>
        );
    }

} export default bestperform