import React, { Component } from 'react';
import geo from './geo';

class homegeo extends Component
{

    render(){
        return(
            <div>
                <geo
                
                google={this.props.google}
     center={{lat: 18.5204, lng: 73.8567}}
     height='300px'
     zoom={15}
                
                
                />


                
            </div>
        );
    }
}