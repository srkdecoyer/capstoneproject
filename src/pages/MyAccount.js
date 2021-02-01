
import React, { Component } from 'react';
import { Grid, Header, Form, Button, Message, Input, Segment, Select } from 'semantic-ui-react';
import { Auth } from 'aws-amplify'; 
import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';
Amplify.configure(aws_exports);

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const services = [
  { key: 'b', text: 'Books', value: 'book' },
  { key: 't', text: 'Therapy', value: 'therapy' },
  { key: 'c', text: 'Classes', value: 'classes' },
]

const diagnosis = [
  { key: 'd', text: 'Dyslexia', value: 'dyslexia' },
  { key: 'a', text: 'Autism', value: 'autism' },
  { key: 's', text: 'Asperger Syndrome', value: 'asperger syndrome' },
]
  
class MyAccount extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            authState: this.props.authState,
            nickname:'',
            email:'',
            given_name:'',
            middle_name:'',
            service:'',
            birthdate:'',
            gender:'',
			measure:'',
            phone_number:'',
            address:'',
			pincode:'',
			country:'',
            website:'',
			
        }
    }
    
    componentDidMount() {
      this.findUser();
    }

    findUser(){
      Auth.currentAuthenticatedUser({bypassCache: true})
      .then(user => {
        this.setState({
            authData: user,
            authState: 'signedIn',
            
            nickname: user.attributes.nickname ? user.attributes.nickname : '',
            email:user.attributes.email ? user.attributes.email : '',
            given_name: user.attributes.given_name ? user.attributes.given_name : '',
            middle_name: user.attributes.middle_name ? user.attributes.middle_name : '',
            service: user.attributes.service ? user.attributes.service : '',
            birthdate: user.attributes.birthdate ? user.attributes.birthdate : '',
            gender: user.attributes.gender ? user.attributes.gender : '',
			measure: user.attributes.measure ? user.attributes.measure : '',
            phone_number: user.attributes.phone_number ? user.attributes.phone_number : '',
            address: user.attributes.address ? user.attributes.address : '',
			pincode: user.attributes.pincode ? user.attributes.pincode : '',
			country: user.attributes.country ? user.attributes.country : '',
            website: user.attributes.website ? user.attributes.website : '',
            
            stateFromStorage: true
        });

          console.log(this.state.authData.nickname);
      }).catch(e => {
        this.setState({authState: 'signIn'});
      });
    }    
    
    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value });
    }
    
    handleSubmit = () => {
        Auth.updateUserAttributes(this.state.authData,{
            'nickname': this.state.nickname,
            'email':this.state.email,
            'given_name':this.state.given_name,
            'middle_name':this.state.middle_name,
            'service':this.state.service,
            'birthdate':this.state.birthdate,
            'gender':this.state.gender,
			'measure':this.state.measure,
            'phone_number':this.state.phone_number,
            'address':this.state.address,
			'pincode':this.state.pincode,
			'country':this.state.country,
            'website':this.state.website,
        }).catch(e => { 
            console.log('Error updating user: '); 
            console.log(e); 
        });
    }

    render(){
        
        let loading = true;
        if(this.state.authData) { loading = false; } 
        
        const {nickname,email,given_name,middle_name,service,birthdate,gender,measure,phone_number,address,pincode,country,website} = this.state;
        
        return(
            <Segment color="blue">
            <Grid padded> 
                <Grid.Column>
                <Header as="h1" >Your Personal Profile</Header>
                

              <Form onSubmit={this.handleSubmit} loading={loading} >
              
                <Form.Group>
                  <Form.Input name='nickname' value={nickname} label='Parent Name' placeholder='Enter your name' width={6} onChange={this.handleChange} error={false} />
                  <Form.Input label='Username' value={email} width={10}  />
                </Form.Group>

                <Form.Group>
                  <Form.Input name='given_name' value={given_name} label='Child name' placeholder='Enter your child name' width={5} onChange={this.handleChange} error={false} />
                  <Form.Select name='middle_name' value={middle_name} label='Diagnosis Name' placeholder='Select diagnosis name' options={diagnosis} width={5} onChange={this.handleChange} error={false} />
                  <Form.Input name='measure' value={measure} label='Rate Severity of diagnosis' placeholder='1-10' width={6} onChange={this.handleChange} error={false} />
				</Form.Group>
                
                <Form.Group>
                  <Form.Input name='birthdate' value={birthdate} label='Child Birthday' placeholder='02/02/2002' width={5} onChange={this.handleChange} error={false} />
                  <Form.Select name='gender' value={gender} label='Child Gender' placeholder='Gender' options={options} width={5} onChange={this.handleChange} error={false} />
				  <Form.Select name='service' value={service} label='Services Interested in' placeholder='Select services' options={services} width={6} onChange={this.handleChange} error={false} />
                </Form.Group>

                <Form.Group>
                  <Form.Input name='phone_number' value={phone_number} label='Mobile number' placeholder='+61 0400 000 000' width={6} onChange={this.handleChange} error={false} />
                  <Form.Input name='website' value={website} label='Additonal Information' placeholder='My kid needs extra care' width={10} onChange={this.handleChange} error={false} />
                </Form.Group>
                
                <Form.Group>
                  <Form.Input name='address' value={address} label='Address' placeholder='2/77 New Street, Newport 3015 Melbourne, Victoria' width={8} onChange={this.handleChange} error={false} />
				  <Form.Input name='pincode' value={pincode} label='Pincode' placeholder='110000' width={4} onChange={this.handleChange} error={false} />
				  <Form.Input name='country' value={country} label='Country' placeholder='Australia' width={4} onChange={this.handleChange} error={false} />
                </Form.Group>

                <Message
                  success
                  header='Account Details Updated'
                  content="Your details have been updated."
                />
                
                <Message
                  error
                  header='Something Went Wrong'
                  content='One of the fields has error. Please look over the forms to see where the error is. '
                />
                
                <Button type='submit'>Submit</Button>
              </Form>
                
                </Grid.Column>
            </Grid>
            </Segment>
        );
    }
    
}

export default MyAccount;
