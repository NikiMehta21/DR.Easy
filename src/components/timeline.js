import React, { Component } from "react"
import drimg from '../dr.png';
import drimg1 from '../drimg1.jpg';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from "draftjs-to-html";
import { EditorState, convertToRaw, convertFromHTML } from "draft-js";
import Axios from 'axios';
import { IonButton, IonContent, IonHeader, IonTitle, IonCardHeader, IonCardTitle, IonIcon, IonToolbar, IonApp, IonCard, IonCardContent, IonInput, IonTextarea } from "@ionic/react";
import { thumbsUp } from 'ionicons/icons';


class timeline extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editorState: EditorState.createEmpty(),
            niki: "",
            drpro: [],
            drlist: [],
            variable: '',
        }
    }

    componentDidMount() {

        const email = localStorage.getItem('email')
        const url = "http://localhost:80/doctor/timelined.php";
        Axios.get(url, {
            params: {
                email: email
            }

        }).then(resp => {
            this.setState({ drlist: resp.data })
            console.log('helo')
            console.log(resp.data)
            this.setState({ variable: resp.data.post })
            //console.log(resp.data.status)
        });




        const url1 = "http://localhost:80/doctor/timeblog.php";
        Axios.get(url1, {
            params: {
                email: email
            }

        }).then(resp => {
            this.setState({ drpro: resp.data })
            console.log(resp.data)
            
            //console.log(resp.data.status)
        });





    }
    handleniki = e => {
        //  this.setState({ niki: e.target.value });

    };

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,

        });
    };

    submitbtn = e => {

        const var1 = localStorage.getItem('data');
        this.setState({ niki: localStorage.getItem('data') });
        console.log(var1);
        // alert('Successfully Posted')
        let formData = new FormData();
        formData.append("name", var1);
        const url = "http://localhost:80/doctor/timeline.php";
        Axios.post(url, formData)
            .then((res) => {
                const responseMsg = res.data;
                //this.state.id=responseMsg.id;
                if (responseMsg.success == '0') {


                    alert("Something goes wrong");

                }
                else {
                    // this.props.history.push('/login')
                    alert("Successfully Post");
                }
            }).catch(res => console.log(Error))
    }
    render() {
        const { drpro,drlist } = this.state;

        const { editorState } = this.state;
        console.log(editorState.getCurrentContent)
        console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
        const data = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        localStorage.setItem("data", data)


        const varia = '';

        return (


            <IonApp>

                <IonHeader >
                    <IonToolbar class="new-background-color">
                        <IonTitle><h3>Dr-Easy Connect</h3></IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>

                    <IonCard class="dot">



                        <IonCardContent>
                            <IonHeader>
                                <IonToolbar><IonTitle>About Us</IonTitle></IonToolbar>
                            </IonHeader>

                        </IonCardContent>


                    </IonCard>

                    <div class="inputstyle">




                        <Editor
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={this.onEditorStateChange}
                            placeholder="Post Something"

                        />



                        <IonButton onClick={this.submitbtn}>Post</IonButton>


                    </div>


                    <div class="thead">
                        Recent Post
                    </div>


                    <IonCard class="blog-timeline">
                        <div style={{ width: '20%', float: 'left' }}>
                            <img class="circular--square" src={drimg1} />

                        </div>
                        <div style={{ width: '50%', float: 'left' }}>
                            <h3>Dr.Anjali Melana</h3>
                            <h4><b>Juno Hospital</b></h4>
                            <h4>9999000045</h4>
                            <p><h4>Blog Title: Corona</h4></p>
                            <p style={{ align: 'justify', color: 'black',fontSize:'20px' }}>
                                Do stay home and take Tylenol, cough syrup and plenty of rest if you think you may have COVID-19. You should also isolate yourself from your other family members, and use a designated bathroom in the house that no one else is using. If your symptoms are mild and can be managed at home
                           </p>
                        </div>
                    </IonCard>


                    

                    {drlist.map(list1 => (

                        <IonCard class="blog-ptimeline">
                            
                            
                                <h3 style={{fontSize:'34px',color:'red'}}><b>Help Post</b></h3>
                                
                                
                                <p style={{ align: 'justify', color: 'black' ,fontSize:'30px' }}>
                                <div dangerouslySetInnerHTML={{ __html: list1.postcol }} >
                                    
                                </div>
                                </p>
                            
                        </IonCard>
                    ))}

                    {drpro.map(list => (

                        <IonCard class="blog-timeline">
                            <div style={{ width: '20%', float: 'left' }}>
                                <img class="circular--square" src={list.img} />

                            </div>
                            <div style={{ width: '50%', float: 'left' }}>
                                <h3>Dr.{list.name}</h3>
                                <h4><b>{list.hospital}</b></h4>
                                <h4>{list.phoneno}</h4>
                                <p><h4>Blog Title:{list.title}</h4></p>
                                <p style={{ align: 'justify', color: 'black',fontSize:'20px' }}>
                                    {list.blogs}
                                </p>
                            </div>
                        </IonCard>
                    ))}




                </IonContent>
            </IonApp>
        )
    }

} export default timeline