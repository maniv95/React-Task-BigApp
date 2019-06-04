/*eslint-disable*/
import React , {Component} from 'react';
import { withRouter } from 'react-router';
import swal from 'sweetalert2';
import history from './history';
import {Button} from 'reactstrap';

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            password:''
        }
        this.onName = this.onName.bind(this);
        this.onPassword = this.onPassword.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }
    onName(a){
        this.setState({name: a.target.value})
    }
    onPassword(b){
        this.setState({password: b.target.value})
    }
    onLogin(){
        if (this.state.name && this.state.password !=''){
            if(this.state.name == sessionStorage.getItem("user") && this.state.password == sessionStorage.getItem("password")){
               swal.fire("Login Success","","success");
               this.props.history.push('/HomePage')
            }
            else{
                swal.fire("Login Error","","error")
                this.props.history.push('/Register')
            }
        }
    }
    render(){
        return(
            <div className="App">
            <label>Name or UserName </label><br/>
            <input type="text" value={this.state.name} onChange={this.onName}/>
            <br/>
            <label>Password</label>
            <br/>
            <input type="password" value={this.state.password} onChange={this.onPassword}/>
            <br/>
            <Button onClick={this.onLogin}>Login</Button>
            </div>
        );
    }
}
export default withRouter(Login);