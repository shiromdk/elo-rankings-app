import React , { Component} from 'react';
import axios from 'axios';
import AddMatchForm from './AddMatchForm';
import { connect } from 'react-redux';
import { fetchPlayers } from '../../actions/index';
import { SubmissionError } from 'redux-form'

class AddMatchContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      fireRedirect: false
    }
  }

  componentWillMount(){
    this.props.fetchPlayers();
  }

  submit = (values) => {
    console.log(values);
    if(values.playerone===values.playertwo){
      throw new SubmissionError({_error:'Choose two different players!'})
    }else{
      axios({
        method:'post',
        url:'/management/match',
        data:values
      }).then((res)=>{
        console.log(res);
        //this.setState({ fireRedirect: true });
      });
    }
  }

  render(){
    const { submit } = this.props;
    const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state;
    return(
      <div>
        <AddMatchForm onSubmit={this.submit.bind(this)} players={this.props.players} />
        {fireRedirect && (
          <Redirect to={from || '/'}/>
        )}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {players:state.players.players};
}

export default connect(mapStateToProps,{fetchPlayers})(AddMatchContainer);
