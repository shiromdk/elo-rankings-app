import React , { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPlayers } from '../actions/index';

import TableHead from '../components/table/TableHeadComponent';
import TableRow from '../components/table/TableRowComponent';


class PlayersContainer extends Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchPlayers();
  }

  render(){
    let rows = this.props.players.map(players =>
       {
           return <TableRow key={players._id} data={players}/>
       });

    return(
      <div>
        <h2>Player List</h2>
        <div>
        <table className="table table-bordered">
            <TableHead/>
                <tbody>{rows}</tbody>
            </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {players:state.players.players};
}

export default connect(mapStateToProps,{fetchPlayers})(PlayersContainer);
