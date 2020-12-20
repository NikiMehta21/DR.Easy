import React ,{Component} from 'react';
import { IonApp, IonButton, IonContent, IonHeader, IonItem, IonLabel, IonText, IonToolbar,IonTitle, IonInput } from '@ionic/react';
import Sidemen from '../Patient/Sidemen'
import Axios from 'axios';
class staffaccount extends Component {

    constructor(props)
    {
        super(props)
        this.state=
        {
            ename:'',
            age:'',
            profile:'',
            username:'',
            password:'',
            salary:'',
            date:'',
            phone:''

        }
    }

    
    handlephone = e => {
        this.setState({ phone: e.target.value });
    };

    handlename = e => {
        this.setState({ename: e.target.value });
    };

    handleage = e => {
        this.setState({age: e.target.value });
    };

    handlepassword = e => {
        this.setState({password: e.target.value });
    };

    handleuser = e => {
        this.setState({username: e.target.value });
    };

    handleprofile = e => {
        this.setState({profile: e.target.value });
    };

    handlesalary = e => {
        this.setState({salary: e.target.value });
    };

    handledate = e => {
        this.setState({date: e.target.value });
    };


    submitbtn = e => {
        console.log(this.state)
        let formData = new FormData();
        formData.append("name", this.state.ename);
        formData.append("age", this.state.age);
        formData.append("profile", this.state.profile);
        formData.append("username", this.state.username);
        formData.append("password", this.state.password);
        formData.append("salary", this.state.salary);
        formData.append("date", this.state.date);
        formData.append("phone", this.state.phone);
        formData.append("email", localStorage.getItem('email'));

        const url = "http://localhost:80/doctor/drstaff.php";
        Axios.post(url, formData)
            .then((res) => {
                const responseMsg = res.data;
                //this.state.id=responseMsg.id;
                if (responseMsg.success == '0') {


                    alert("Something goes wrong");

                }
                else {
                    // this.props.history.push('/login')
                    alert("Account Created");
                }
            }).catch(res => console.log(Error))

    }

    render() {

       

          return (
            <IonApp>
                <IonHeader>
                    <Sidemen/>
                    <IonToolbar><IonTitle>Create Your Staff Account</IonTitle></IonToolbar>
                </IonHeader>
                <IonContent>
                    <div class="card">
                        <IonItem>
                            <IonLabel position='floating'>Employee Name</IonLabel>
                            <IonInput value={this.state.ename} onIonChange={this.handlename}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position='floating'>Age</IonLabel>
                            <IonInput value={this.state.age} onIonChange={this.handleage}></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel position='floating'>Job Profile</IonLabel>
                            <IonInput value={this.state.profile} onIonChange={this.handleprofile}></IonInput>
                        </IonItem>


                        <IonItem>
                            <IonLabel position='floating'>Username</IonLabel>
                            <IonInput value={this.state.username} onIonChange={this.handleuser}></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel position='floating'>Password</IonLabel>
                            <IonInput value={this.state.password} onIonChange={this.handlepassword}></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel position='floating'>Salary</IonLabel>
                            <IonInput value={this.state.salary} onIonChange={this.handlesalary}></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel position='floating'>Phone</IonLabel>
                            <IonInput value={this.state.phone} onIonChange={this.handlephone} type='number'></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel position='floating' >Date of Joining</IonLabel><br/>
                            <IonInput value={this.state.date}  onIonChange={this.handledate} type='date'></IonInput>
                        </IonItem>

                        <IonButton onClick={this.submitbtn}>Submit </IonButton>

                    </div>
                </IonContent>
            </IonApp>

        );
    }

}
export default staffaccount;