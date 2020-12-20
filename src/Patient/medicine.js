import React,{Component} from 'react';
import  { IonApp, IonContent, IonHeader,IonTitle } from    '@ionic/react';
import Patientmenu from './Patientmenu';
import Axios from 'axios';
class medicine extends Component
{

    constructor(props)
    {
        super(props)
        this.state={
            drlist:[],
        }

    }

    componentDidMount() {
        const url = "http://localhost:80/doctor/patientmedicine.php";
        Axios.get(url, {
            params: {
                email:localStorage.getItem('email')
            }

        }).then(resp => {

            this.setState({ drlist: resp.data })
            console.log(resp.data)
            console.log("hello")
           



            //console.log(resp.data.status)
        });
    }

    render(){
        const { drlist } = this.state;
        return(
            <IonApp>
                <IonHeader>
                        <Patientmenu/>
                        <IonTitle>Prescription </IonTitle>
                    </IonHeader>
                    <IonContent>
                    <table class="table">
                        <thead>
                            <th>Medicine</th>
                            <th>Nos</th>
                            <th>Time</th>
                            <th>Food Status</th>
                        </thead>
                        <tbody>
                        {drlist.map(list => (
                            <tr>
                                <td data-label="DrNmae">{list.name}</td>
                                    <td>{list.time}</td>
                                    <td>{list.no}</td>
                                    <td>{list.food}</td>
                                
                            </tr>
                        ))}
                            




                        </tbody>
                    </table>
                </IonContent>
            </IonApp>

        );
    }

}
export default medicine;