import React, { Component } from 'react';

export default class companyProfile extends Component {
	state= {
        fields:[
		{companyName: ""},
		{cityAddress: ""},
		{phoneNumber: ""},
        {establishedSince: ""}
        ]
	}
	 change=(e) => {
	 	this.setState({
	 		[e.target.name]: e.target.value
	 	})
	 }
	//  onClick=(e) => {
	//  	e.preventDefault()
	//  	console.log(this.state)
    // }	

    onSubmit=() => {
        const newState = this.state.fields.map(clear => {
            // const clearAll = clear;
            clear: ""
            return clear;
        })
    }

    render(){
        return(
        <div>
            <form onClick={this.onSubmit}>
				<label>Company Name:</label> &nbsp;
				<input  
					name='companyName' type="text"
					placeholder="e.g. Pak Fans"
					value={this.state.companyName}
					onChange={this.change}/>
                   <br/> 
				   <br/>               
          
				<label>City Address:</label> &nbsp;
				<input 
					name='cityAddress' type="text" 
					placeholder="e.g. Sialkot"
					value={this.state.cityAddress}
					onChange= {this.change}/>
                                   
                        <br/>  
						<br/>                                             
				<label>Phone Number:</label> &nbsp;
				<input  
					name='phoneNumber' type="number"
					placeholder="e.g. 03331234567"
					value={this.state.phoneNumber}
					onChange={this.change}/>
                        <br/>
						<br/>
				<label>Established Since:</label> &nbsp;
				<input  
					name='establishedSince' type="date" 
					placeholder="e.g. 2nd Dec 2012"
					value={this.state.establishedSince}
					onChange={this.change} />
                    	 <br/>
						 <br/>
				<button>Submi</button>
			</form>                        
        </div>

        )
    }

}

					