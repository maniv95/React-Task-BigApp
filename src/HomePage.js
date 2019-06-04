/*eslint-disable*/
import React ,{Component} from 'react';
import { withRouter } from 'react-router';
import history from './history';
import {Button,Card,CardBody,Row,Col} from 'reactstrap';
class HomePage extends Component{
  render() {
    return ( 
      <div align = "center">
      <Card>
      <CardBody>
      <Button onClick ={()=> this.props.history.push('/Table')}>View Table</Button> <Button onClick ={()=> this.props.history.push('/DnD')}>Drag N Drop</Button>  
      </CardBody>
      </Card>
      </div>
    )
  }
}

export default withRouter(HomePage);
