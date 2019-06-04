/*eslint-disable*/
import React,{Component} from 'react';
import { withRouter } from 'react-router';
import swal from 'sweetalert2';
import history from './history';
import {Button,Card,CardTitle,CardHeader,CardBody,Row,Col} from 'reactstrap';
import ReactDatatable from '@ashvin27/react-datatable';
class TableData extends Component{
    constructor(props){
        super(props);
        this.state={
          data:[]
        }
        this.columns = [
          {
              key: "id",
              text: "ID",
              align: "center",
              sortable: true,
          },
          {
              key: "name",
              text: "Name",
              align: "center",
              sortable: true
          },
          {
              key: "username",
              text: "UserName",
              align: "center",
              sortable: true
          },
          {
              key: "email",
              text: "Email",
              align: "center",
              sortable: true
          },
          {
              key: "street",
              text: "Street",
              sortable: true,
              align: "center"
          },
          {
              key: "suite",
              text: "Suite",
              sortable: true,
              align: "center"
          },
          {
              key: "city",
              text: "City",
              sortable: true,
              align: "center"
          },
          {
              key: "zipcode",
              text: "Zipcode",
              sortable: true,
              align: "center"
          },
          {
              key: "latitude",
              text: "Latitude",
              sortable: true,
              align: "center"
          },
          {
              key: "longitude",
              text: "Longitude",
              sortable: true,
              align: "center"
          },
          {
              key: "phone",
              text: "Phone",
              sortable: true,
              align: "center"
          },
          {
              key: "website",
              text: "Website",
              sortable: true,
              align: "center"
          },
          {
              key: "companyName",
              text: "Compnay Name",
              sortable: true,
              align: "center"
          },
          {
              key: "catchPhrase",
              text: "Compnay CatchPhrase",
              sortable: true,
              align: "center"
          },
          {
              key: "bs",
              text: "Compnay BS",
              sortable: true,
              align: "center"
          },
        ];
        this.config = {
          page_size: 5,
          length_menu: [5,10,20],
          button: {
              excel: false,
              print: false
          },
          language: {
                    length_menu: "_MENU_",
                    filter: "Filter in records...",
                    info: "Showing _START_ to _END_ of _TOTAL_ records",
                    pagination: {
                        first: "First",
                        previous: "Previous",
                        next: "Next",
                        last: "Last"
                    }
          },
          show_length_menu: true,
          show_filter: true,
          show_pagination: true,
          show_info: true,
        }
        this.onTable = this.onTable.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }
    componentDidMount(){
        this.onTable();
    }
    onTable(){
        if(sessionStorage.getItem("login")){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then(data =>{
                console.log(data);
                this.setState({data:data});
            })
        }
        else{
            this.props.history.push('/Login');
        }
    }
    onLogout(){
        sessionStorage.clear();
        this.props.history.push('/');
    }
    render(){
        var body = []
        this.state.data.map(json =>{
            body.push({"id":json.id, "name":json.name, "username":json.username, "email":json.email, "street":json.address.street,"suite":json.address.suite,"city":json.address.city,"zipcode":json.address.zipcode,"latitude":json.address.geo.lat,"longitude":json.address.geo.lng,"phone":json.phone,"website":json.website,"companyName":json.company.name,"catchPhrase":json.company.catchPhrase,"bs":json.company.bs})
        })
        return(
            <div className="content">
            <div align="right"><Button onClick={this.onLogout}>Logout</Button></div>
            <Row>
            <Col xs={12}>
            <Card style={{backgroundColor:'#222', borderColor:'#222'}}>
              <CardHeader>
                <CardTitle tag="h4" style={{color:"white"}}>All Details</CardTitle>
              </CardHeader>
              <CardBody style={{color:"white"}}className="responsive">
                <ReactDatatable 
                    config ={this.config}
                    columns={this.columns}
                    records={body}
                />
               </CardBody>
            </Card>
            </Col>
            </Row>
            <div align="center"><Button onClick={()=> this.props.history.push('/HomePage')}>Back</Button></div>
            </div>
        );
    }
}
export default withRouter(TableData);