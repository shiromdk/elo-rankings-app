import React,{ Component } from 'react';

export default class TableHead extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <thead className="thead-default">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>ELO</th>
          <th>Wins</th>
          <th>Loesses</th>
          <th>Matches Played</th>
        </tr>
      </thead>
    );
  }

}
