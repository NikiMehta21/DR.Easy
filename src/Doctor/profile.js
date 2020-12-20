import { IonApp, IonButton, IonHeader, IonInput, IonItem, IonLabel, IonTextarea, IonTitle, IonToolbar, IonSelect, IonSelectOption, IonContent } from '@ionic/react';
import React, { Component } from 'react';
import Axios from 'axios';
import Sidemen from '../Patient/Sidemen';
export class Dprofile extends Component {
    state = {
        experience: "",
        name:"",
        category: "",
        fee: "",
        email: "",
        status: "",
        profileImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        local: "",
        data: [],
        localstore:''
    }


    componentDidMount() {


       const local=localStorage.getItem('email');
        // console.log(local)
        this.state = {
            local: local,
        };
        this.setState({
            localstore:local
        })
        console.log(this.state.local)
        
        const url = "http://localhost:80/doctor/drprofile.php";
        
        Axios.get(url,{
            params:{
                id:localStorage.getItem('email')
            }
        }).then(resp => {
            console.log(resp.data)
            this.setState({ 
                data: resp.data,
                experience:resp.data.experience,
                fee:resp.data.fees,
                profileImg:resp.data.img,
                category:resp.data.category,
                status:resp.data.status,
                name:resp.data.hospital
            
            })
            console.log(this.state)
            console.log(resp)
            console.log(resp.data.fees)
            console.log(resp.data.status)
        
           // this.setState({ persons: resp.data.img });
           // console.log(this.state.persons)
        
        
          });


    }

    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({ profileImg: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };


    handleexp = e => {
        this.setState({ experience: e.target.value });
    };
    handlename = e => {
        this.setState({ name: e.target.value });
    };

    handlecat = e => {
        this.setState({ category: e.target.value });
    };

    handlefee = e => {
        this.setState({ fee: e.target.value });
    };

    handlestatus = e => {

        this.setState({ status: e.target.value });
    };




    submitbtn = e => {
       //localStorage.setItem("email", this.state.email);
        console.log(localStorage.getItem('email'))
                    console.log(this.state)

        e.preventDefault();
        let formData = new FormData();
        formData.append("category", this.state.category);
        formData.append("experience", this.state.experience);
        formData.append("fee", this.state.fee);
        formData.append("status", this.state.status);
        formData.append("image", this.state.profileImg);
        formData.append("email", this.state.localstore);
        formData.append("hospital", this.state.name);
        const url = "http://localhost:80/doctor/drinsert.php";
        Axios.post(url, formData)
            .then((res) => {
                const responseMsg = res.data;
                //this.state.id=responseMsg.id;
                if (responseMsg.success == '0') {


                    alert("Something goes wrong");

                }
                else {
                    // this.props.history.push('/login')
                    alert("Something goes perfect");
                }
            }).catch(res => console.log(Error))


    }

    render() {
        const { profileImg } = this.state
        return (
            <IonApp>

                <IonHeader>
                    <Sidemen/>
                    <IonToolbar>
                        <IonTitle>Profile</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <form class="form" id="form1">





                        <div className="page">
                            <div className="container">
                                <h1 className="heading">Add your Image</h1>
                                <div className="img-holder">
                                    <img src={profileImg} alt="" id="img" className="img" />
                                </div>
                                <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
                                <div className="label">
                                    <label className="image-upload" htmlFor="input">

                                        Choose your Photo
					</label>
                                </div>
                            </div>
                        </div>

                        <IonItem>
                            <IonLabel position="floating">Doctor Category</IonLabel>
                            <IonSelect onIonChange={this.handlecat} value={this.state.category} name="category" interface="action-sheet">
                                <IonSelectOption value="Pediatricians">Pediatricians</IonSelectOption>
                                <IonSelectOption value="General Surgeon">General Surgeon</IonSelectOption>
                                <IonSelectOption value="Cardiologist">Cardiologist</IonSelectOption>
                                <IonSelectOption value="Dentist">Dentist</IonSelectOption>
                                <IonSelectOption value="Dermatologists">Dermatologists</IonSelectOption>
                                <IonSelectOption value="Gynecologist">Gynecologist</IonSelectOption>
                                <IonSelectOption value="ENT Specialist">ENT Specialist</IonSelectOption>
                                <IonSelectOption value="Physicians">Physicians</IonSelectOption>
                                <IonSelectOption value="Orthopaedic ">Orthopaedic</IonSelectOption>
                                <IonSelectOption value="ophthalmologist">ophthalmologist</IonSelectOption>
                                <IonSelectOption value="Vaid">Vaid</IonSelectOption>
                                <IonSelectOption value="Psychiatrists">Psychiatrists</IonSelectOption>
                                <IonSelectOption value="Radiologist">Radiologist</IonSelectOption>
                                <IonSelectOption value=" Endocrinologist"> Endocrinologist</IonSelectOption>
                                <IonSelectOption value="Homeopathic">Homeopathic</IonSelectOption>

                            </IonSelect>
                        </IonItem>

                        <IonItem>
                            <IonLabel position="floating">Hospital Name</IonLabel>
                            <IonInput type="text" value={this.state.name} onIonChange={this.handlename}></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel position="floating">Your Experience</IonLabel>
                            <IonInput type="number" value={this.state.experience} onIonChange={this.handleexp}></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel position="floating">Consultation Fee</IonLabel>
                            <IonInput type="number" value={this.state.fee} onIonChange={this.handlefee} pattern="[0-5]{1,3}"></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel position="floating">Your Status</IonLabel>
                            <IonInput type="text" value={this.state.status} onIonChange={this.handlestatus}></IonInput>
                        </IonItem>



                        <IonButton color="dark" onClick={this.submitbtn}>Submit</IonButton>

                    </form>

                </IonContent>
            </IonApp>
        );
    }
}

export default Dprofile;
