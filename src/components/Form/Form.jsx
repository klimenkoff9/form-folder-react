import React, { Component } from 'react';
import "./Form.css"

class Form extends Component{
    constructor(props){
        super(props)

        this.state ={
            firstname: 'Dennis',
            lastname: 'Klimenkov',
            firstnametemp: '',
            lastnametemp: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    edit(){
        this.toggleElements(true)
    }

    save(bool){
        if(bool){
            this.setState({
                firstname: this.state.firstnametemp,
                lastname: this.state.lastnametemp
            })
        }
        else{
            this.setState({
                firstnametemp: this.state.firstname,
                lastnametemp: this.state.lastname
            })
        }
        this.toggleElements(false)
    }

    toggleElements(bool){
        document.getElementById('editBtn').style.display = bool ? "none" : "block"
        document.getElementById('firstname').style.display = bool ? "none" : "block"
        document.getElementById('lastname').style.display = bool ? "none" : "block"

        document.getElementById('cancelBtn').style.display = bool ? "block" : "none"
        document.getElementById('saveBtn').style.display = bool ? "block" : "none"

        let inputs = document.getElementsByTagName('input')
        for(let i = 0; i < inputs.length; i++)
            if(inputs[i].name !== "checkbox")
                inputs[i].style.display = bool ? "block" : "none"
    }

    render() { 
        return (
            <div className="form"> 
                <span id="firstname"></span> {this.state.firstname}
                <span id="lastname"></span> {this.state.lastname} <br/>
                <input name="firstnametemp" type="text" onChange={this.handleChange} value={this.state.firstnametemp} placeholder="First Name"/>
                <input name="lastnametemp" type="text" onChange={this.handleChange} value={this.state.lastnametemp} placeholder="Last Name"/>
                <button id="saveBtn" onClick={() => this.save(true)}>Save</button>
                <button id="editBtn" onClick={this.edit}>Edit</button>
                <button id="cancelBtn" onClick={() => this.save(false)}>Cancel</button>
            </div>
        )
    }
}


export default Form;