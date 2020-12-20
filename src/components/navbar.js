import React ,{Component}from 'react';
import { Link } from 'react-router-dom';

import { IonIcon } from '@ionic/react';
import { listOutline } from 'ionicons/icons';

const   Navbar1 =() =>{

    return(

        <>
        <div classname="navbar">
            <Link to="#" classname="menbar">
            <IonIcon icon={listOutline}/>
            </Link>
        </div>
        </>

    );
}
export default Navbar1;



