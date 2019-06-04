/*eslint-disable*/
import React , {Component} from 'react';
import { withRouter } from 'react-router';
import swal from 'sweetalert2';
import history from './history';
import {Button} from 'reactstrap';
class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            password:''
        }
        this.onName = this.onName.bind(this);
        this.onPassword = this.onPassword.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }
    onName(a){
        this.setState({name: a.target.value})
    }
    onPassword(b){
        this.setState({password: b.target.value})
    }
    onRegister(){
        if (this.state.name && this.state.password !=''){
            sessionStorage.setItem("user",this.state.name);
            sessionStorage.setItem("password",this.state.password);
            sessionStorage.setItem("login",true);
            swal.fire("Register Success","","success");
            this.props.history.push('/login')
        }
        else{
            swal.fire("Register Error","","error")
            window.location.reload();
        }
    }
    render(){
        return(
            <div className="App">
            <label>Name or UserName </label><br/>
            <input type="text" value={this.state.name} onChange={this.onName}/>
            <br/>
            <label>Password</label><br/>
            <input type="password" value={this.state.password} onChange={this.onPassword}/>
            <br/>
            <Button onClick={this.onRegister}>Register</Button>
            </div>
        );
    }
}
export default withRouter(Register);