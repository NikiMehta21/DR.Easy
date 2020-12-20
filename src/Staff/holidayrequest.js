import React ,{Component} from 'react';
import { IonApp, IonButton, IonContent, IonHeader, IonItem, IonLabel, IonText, IonToolbar,IonTitle, IonInput } from '@ionic/react';
import Staffmen from './staffmen'
import Axios from 'axios';
import { logoWindows } from 'ionicons/icons';
class holidayrequest extends Component {

    constructor(props)
    {
        super(props)
        this.state=
        {
            reason:'',
            fdate:'',
            ldate:'',
            approve:'False',
        }
    }

    
    handlereason = e => {
        this.setState({ reason: e.target.value });
    };

    handlefdate = e => {
        this.setState({fdate: e.target.value });
    };

    handleldate = e => {
        this.setState({ldate: e.target.value });
    };

   
    componentDidMount()
    {
        const user = localStorage.getItem('staffuser')
        const url = "http://localhost:80/doctor/approval.php";
        Axios.get(url, {
            params: {
                user: user
            }

        }).then(resp => {
            this.setState({ drpro: resp.data })
            console.log(resp.data)
            this.setState({
                approve:resp.data.approve,
                ldate:resp.data.ldate,
                fdate:resp.data.fdate,
                reason:resp.data.reason
            })

            //console.log(resp.data.status)
        });
    }
    

    

    submitbtn = e => {
        console.log(this.state)
        let formData = new FormData();
        formData.append("reason", this.state.reason);
        formData.append("fdate", this.state.fdate);
        formData.append("ldate", this.state.ldate);
        formData.append("approval", this.state.approve);
        formData.append("user", localStorage.getItem('staffuser'));

        
        

        const url = "http://localhost:80/doctor/holiday.php";
        Axios.post(url, formData)
            .then((res) => {
                const responseMsg = res.data;
                //this.state.id=responseMsg.id;
                if (responseMsg.success == '0') {


                    alert("Something goes wrong");

                }
                else {
                    // this.props.history.push('/login')
                    alert("Request Sent");
                }
            }).catch(res => console.log(Error))
            window.location.reload(true);

    }

    render() {

       

          return (
            <IonApp>
                <IonHeader>
                    <Staffmen/>
                    <IonToolbar><IonTitle>Leave Management</IonTitle></IonToolbar>
                </IonHeader>
                <IonContent>
                    <div class="card">
                        <IonItem>
                            <IonLabel position='floating'>Reason</IonLabel>
                            <IonInput value={this.state.reason} onIonChange={this.handlereason}></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position='fixed'>From Date</IonLabel>
                            <IonInput type='date' value={this.state.fdate} onIonChange={this.handlefdate}></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel position='fixed'>To Date</IonLabel>
                            <IonInput type='date' value={this.state.ldate} onIonChange={this.handleldate}></IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel position='floating'>Approval Status</IonLabel>
                            <IonInput value={this.state.approve} readonly='true'></IonInput>
                        </IonItem>


                       
                      

                        <IonButton onClick={this.submitbtn}>Submit </IonButton>

                    </div>
                </IonContent>
            </IonApp>

        );
    }

}
export default holidayrequest;