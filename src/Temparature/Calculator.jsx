import React, { Component } from 'react';


import { FormControl } from '@mui/material';
import Boiling from './Boiling';

class Calculator extends Component {

    constructor() {
        super()


        this.state = {
            temparture:'',
        };
        this.onTemparatureChange = this.onTemparatureChange.bind(this);
    }


onTemparatureChange =(e)=> {
    
    this.setState = ({
        temparture : e.target.value,
    });
}

    render() {
        const {temparture}= this.state;
        
        return (
            <div>
                <fieldset>
                    <legend>Input Temparature in celcious : </legend>
                    <input style={{
                        backgroundColor: 'white',
                       color: 'black',
                    }} type="text" value={temparture}   onChange={this.onTemparatureChange} />
                </fieldset>

<p>{temparture}</p>
<Boiling celcious={parseFloat(temparture)}/>

            </div>
        );
    }
}

export default Calculator;