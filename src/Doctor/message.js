import React, { Component } from "react";
import { IonApp, IonButton, IonContent, IonHeader, IonTitle, IonToolbar,IonRow,IonCol, IonGrid } from "@ionic/react";
import Sidemen from '../Patient/Sidemen';
import Axios from 'axios';

class message extends Component {

    constructor(props){
        super(props)
        {
            this.state={
                drpro:[],
            }
        }
    }

    componentDidMount()
    {

        const email = localStorage.getItem('email')
        const url = "http://localhost:80/doctor/adminmsg.php";
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
                    <Sidemen />
                    <IonToolbar>
                        <IonTitle>Admin Message </IonTitle>
                    </IonToolbar>
                </IonHeader>


                <IonContent>
                    <div class="card" >
                    {drpro.map(list => (
                                <div class="info-msg">
                                    <i class="fa fa-info-circle"></i>
                                   <p>{list.date}</p>
                                    {list.msg}
                                 </div>
                            
                            ))}
                               

                        

                            
                            


                    </div>


                </IonContent>
            </IonApp>



        )
    }
}

export default message;