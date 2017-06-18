import React , { Component } from 'react';
import AddPlayerForm from './AddPlayerForm';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

class AddPlayer extends Component{
  constructor(props){
    super(props)
    this.state = {
      fireRedirect: false
    }
  }

submit = (values) =>{
  axios({
    method:'post',
    url:'/management/player',
    data:values
  }).then((res)=>{
    console.log(res);
    this.setState({ fireRedirect: true });
  });
}


  render(){
    const { submit } = this.props;
    const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state;
    return(
      <div>
        <AddPlayerForm onSubmit={this.submit.bind(this)} />
        {fireRedirect && (
          <Redirect to={from || '/'}/>
        )}
      </div>
    )
  }
}

export default AddPlayer;
