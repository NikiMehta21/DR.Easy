import React, { Component } from 'react';
import { IonApp, IonButton, IonContent, IonHeader, IonItem, IonLabel, IonText, IonToolbar, IonTitle, IonInput } from '@ionic/react';
import Staffmen from './staffmen'
import Axios from 'axios';

class attenfance extends Component {

    constructor(props) {
        super(props)
        this.state = {
            checkin: '',
            checkout: '',
            date: '',
            time: '',
            checkind: '1',
            checkoutd: '1',
            temp: '',
            drpro:[],
        }


    }



    componentDidMount() {
        var today = new Date(),

            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.setState({ date: date })

      
        const url = "http://localhost:80/doctor/getattendance.php";
        Axios.get(url, {
            params: {
                user: localStorage.getItem('staffuser')
            }

        }).then(resp => {
            this.setState({ drpro: resp.data })
            this.setState({

                checkin:resp.data.checkin,
                checkout:resp.data.checkout,
            })
            console.log(resp.data)
            
            //console.log(resp.data.status)
        });


        
    }

    handlein = e => {
        this.setState({ checkin: e.target.value });
    };

    handleout = e => {
        this.setState({ checkout: e.target.value });
    };

    in = e => {
        var time1 = new Date(),
            time = time1.getHours() + ':' + time1.getMinutes() + ':' + time1.getSeconds();
        this.setState({ checkin: time })
        this.setState({ checkout: '0' })

    }


    out = e => {
        var time1 = new Date(),
            time = time1.getHours() + ':' + time1.getMinutes() + ':' + time1.getSeconds();
        this.setState({ checkout: time })

    }

    submitin = e => {

        let formData = new FormData();


        this.setState({ temp: '1' })
        console.log(this.state)


      //  this.setState({ checkind: '0' })
        formData.append("user", localStorage.getItem('staffuser'));
        formData.append("checkin", this.state.checkin);
        formData.append("checkout", this.state.checkout);

        console.log(this.state)
        const url = "http://localhost:80/doctor/checkin.php";
        Axios.post(url, formData)
            .then((res) => {
                const responseMsg = res.data;
                //this.state.id=responseMsg.id;
                if (responseMsg.success == '1') {


                    alert("Something goes wrong");

                }
                else {
                    // this.props.history.push('/login')
                    alert("Attendance Performed");
                }
            }).catch(res => console.log(Error))


    }

    




    render() {
        return (
            <IonApp>
                <IonHeader>
                    <Staffmen />
                    <IonToolbar><IonTitle>Daily Attendance</IonTitle></IonToolbar>
                </IonHeader>
                <IonContent>
                    <div class="card">
                        <IonItem>
                            <IonLabel position='floating'>CurrentDate</IonLabel>
                            <IonInput value={this.state.date} ></IonInput>

                        </IonItem>
                        <IonItem>
                            <IonLabel position='floating'>Checkin Time</IonLabel>
                            <IonInput value={this.state.checkin} onIonChange={this.handlein} readonly='true'></IonInput>
                            <IonButton onClick={this.in} disabled={this.state.checkind === '0' ? true : false}>In</IonButton>
                        </IonItem>

                        <IonItem>
                            <IonLabel position='floating' readonly='true'>checkout Time</IonLabel>
                            <IonInput value={this.state.checkout} onIonChange={this.handleout}></IonInput>
                            <IonButton onClick={this.out} disabled={this.state.checkoutd === '0' ? true : false}>out</IonButton>
                        </IonItem>




                        <IonButton onClick={this.submitin} >Checkin </IonButton>


                    </div>
                </IonContent>
            </IonApp>
        );
    }


} export default attenfance
