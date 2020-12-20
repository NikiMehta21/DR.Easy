import { IonApp, IonButton, IonContent, IonGrid, IonSelectOption, IonHeader, IonCardTitle, IonCard, IonCardContent, IonCardHeader, IonInput, IonItem, IonLabel, IonSelect, IonTitle, IonTextarea, IonCardSubtitle } from '@ionic/react';
import React, { Component, useState } from 'react';
import Axios from 'axios';
import PatientDetails from '../Doctor/patientdetail';
import Patientmenu from './Patientmenu';


class account extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            id1: "",
            drpro: [],
            time: [],
            hospital: "",
            fee: "",
            drname: "",
            drphone: "",
            address: "",
            pname: "",
            symptom: "",
            paphone: "",
            apptime: "",
            email: "",
            data: [],
            status:"",
            cstatus:"",
            info:"",
            showMe: false,
        }

    }

    componentDidMount() {

        this.setState({
            email: localStorage.getItem('email')
        })
        this.setState({
            id1: this.props.match.params.id
        })

        const url = "http://localhost:80/doctor/drapp.php";
        Axios.get(url, {
            params: {
                id: this.state.id
            }

        }).then(resp => {

            this.setState({ drpro: resp.data })
            console.log(resp.data)
            this.setState({

                drname: resp.data.name,
                fee: resp.data.fees,
                address: resp.data.Address,
                drphone: resp.data.phoneno,
                status: resp.data.status,
                hospital: resp.data.hospital

            })




            //console.log(resp.data.status)
        });


        const urltime = "http://localhost:80/doctor/drtime.php";
        Axios.get(urltime).then(res => {

            this.setState({ time: res.data })
            console.log(res.data)
            console.log(this.state.time)


        });
        this.setState({ email: localStorage.getItem('email') })
        const urlid = "http://localhost:80/doctor/patid.php";
        const emailid = localStorage.getItem('email')
        Axios.get(urlid, {
            params: {
                email1: emailid
            }
        }).then(response => {

            this.setState({ pid: response.data })
            console.log(response.data.id)
            localStorage.setItem('pid', response.data.id)
            console.log(this.state.pid)



        });


        console.log(this.state)

        const urldata = "http://localhost:80/doctor/appdata.php";

        Axios.get(urldata, {
            params: {
                pid: localStorage.getItem('pid')
            }
        }).then(datares => {
            console.log(datares.data)
            this.setState({

                data: datares.data,
                pname: datares.data.pname,
                paphone: datares.data.phoneno,
                apptime: datares.data.apptime,
                symptom: datares.data.symptoms,
                cstatus:datares.data.status

            })

            if(this.state.cstatus==='1')
            {
                this.setState({info:"Your Appointment is Confirmed at "+this.state.apptime})
                this.setState({
            showMe: true,
            
        })
            }
            


        });



    }


    handlepname = e => {
        this.setState({ pname: e.target.value });
    };

    handlesymptom = e => {
        this.setState({ symptom: e.target.value });
    };

    handlepaphone = e => {
        this.setState({ paphone: e.target.value });
    };

    handletime = e => {
        this.setState({ apptime: e.target.value });
    };

    submitbtn = e => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("pname", this.state.pname);
        formData.append("paphone", this.state.paphone);
        formData.append("symptom", this.state.symptom);
        formData.append("apptime", this.state.apptime);
        formData.append("drid", this.state.id);
        formData.append("paid", localStorage.getItem('pid'));
        formData.append("email", this.state.email);
        formData.append("fee", this.state.fee);
        const url = "http://localhost:80/doctor/appointment.php";
        Axios.post(url, formData)
            .then((res) => {
                const responseMsg = res.data;
                //this.state.id=responseMsg.id;
                if (responseMsg.success == '0') {


                    alert("Something goes wrong");

                }
                else {
                    // this.props.history.push('/login')
                    alert("Wait for Dr.Confirmation");
                }
            }).catch(res => console.log(Error))


    }


    render() {
        const { time } = this.state;
        return (

            <div>
                <IonApp>
                    <IonHeader>
                        <Patientmenu/>
                        <IonTitle>Make Appointment</IonTitle>
                    </IonHeader>

                    <IonContent>





                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>{this.state.hospital}</IonCardTitle>
                                <IonCardSubtitle>{this.state.drname}</IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <p> Dr.Contact: {this.state.drphone} </p>
                                <p> Consultation fees: {this.state.fee} </p>
                                <p> Hospital Address: {this.state.address} </p>
                            </IonCardContent>
                        </IonCard>


                        <IonGrid>



                            <IonItem>
                                <IonLabel position="floating">Your Name</IonLabel>
                                <IonInput onIonChange={this.handlepname} value={this.state.pname}></IonInput>
                            </IonItem>

                            <IonItem>
                                <IonLabel position="floating">Symptoms(lakshan) </IonLabel>
                                <IonInput onIonChange={this.handlesymptom} value={this.state.symptom}></IonInput>
                            </IonItem>

                            <IonItem>
                                <IonLabel position="floating">PhoneNo </IonLabel>
                                <IonInput onIonChange={this.handlepaphone} value={this.state.paphone}></IonInput>
                            </IonItem>

                            <IonItem>
                                <IonLabel>Appointment Time </IonLabel>
                                <IonLabel>{this.state.apptime} </IonLabel>

                                <IonSelect onIonChange={this.handletime} value={this.state.apptime} interface="action-sheet">
                                    {time.map(list => (
                                        <IonSelectOption value={list.atime}>{list.atime}</IonSelectOption>
                                    ))}
                                </IonSelect>


                            </IonItem>
                            <div style={{ paddingTop: '10px' }}>
                                <IonButton onClick={() => window.print()}>Print</IonButton>
                                <IonButton onClick={this.submitbtn}>Appointment</IonButton>
                                <IonButton>Cancel Appointment</IonButton>

                            </div>
                            
                             {
                        this.state.showMe ?
                            <div class="info-msg ">
                            
                            <b class="bol">
                                    <i class="fa fa-info-circle"> </i>
                                   {this.state.info}</b>
                            </div>
                             : null
                    }
                        </IonGrid>


                    </IonContent>

                </IonApp>


            </div>




        );
    }

} export default account;