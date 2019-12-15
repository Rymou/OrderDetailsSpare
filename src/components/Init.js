import React, {Component} from 'react';
import { FormGroup, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';
import axios from 'axios';
import Popup from "reactjs-popup";



class Init extends Component {
    state = {
        customers : [],
        newCustomerData: {
          name: '',
          email: '',
          address: ''
        }
    }

    updateCustomer(){
        let { name, email, address } = this.state.editCustomerData;
        axios.put('http://localhost:8888/CustomerManagerRest/api/edit'+this.state.editCustomerData.id,{
          name, email, address
        }).then((response)=>{
          console.log(response.data);
          this.componentWillMount();
        });
      }
    
    componentWillMount(){
        axios.get('http://localhost:8888/CustomerManagerRest/api/customer/').then((response) => {
          this.setState({
            customers: response.data
          });
            
        });
      }

    render(){
        let customers = this.state.customers.map((customer) =>{
            return (
                
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.address}</td>
                <td>
                <Popup modal trigger={<Button color="success" size="sm" >Détail</Button>}>
                    Modal Content
                    mlkfmglkxmflkgmclfgkmlkg
                    mlkdflkjsoiduqsd
                    lqels;fnxdflijg
                    mdlkfgmdgdm
                </Popup>
                  
                </td>
              </tr>
            )
    });
    
    return(
        <div className="App container">
            
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {customers}
          </tbody>
        </Table>
      </div>
    )
}
}

export default Init;