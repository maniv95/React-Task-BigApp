/*eslint-disable*/
import React ,{Component} from 'react';
import { withRouter } from 'react-router';
import history from './history';
import {Button,Card,CardBody,Row,Col} from 'reactstrap';
class LandingPage extends Component{
  render() {
    return ( 
      <div align = "center">
      <Card>
      <CardBody>
      <Button onClick ={()=> this.props.history.push('/Login')}>Login</Button> <Button onClick ={()=> this.props.history.push('/Register')}>Register</Button>  
      </CardBody>
      </Card>
      </div>
    )
  }
}

export default withRouter(LandingPage);
