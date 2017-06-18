import React,{ Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styles from '../table/table-style.css';

const Td = ({children,to}) => {
  const content = to ? (
    <LinkContainer to={to}>
      <NavItem eventKey={1} href={to}>{children}</NavItem>
    </LinkContainer>
  ):(
    <div className={styles.content}>{children}</div>
  );

  return (
    <td>
      {content}
    </td>
  );
}


export default class TableRow extends Component{
  constructor(){super();}



  render()
  {
    return (<tr>
                
                    <Td to={`/users/${this.props.data._id}`}>{this.props.data.firstname}</Td>
                    <Td to={`/users/${this.props.data._id}`}>{this.props.data.lastname}</Td>
                    <Td to={`/users/${this.props.data._id}`}>{this.props.data.elo}</Td>
                    <Td to={`/users/${this.props.data._id}`}>{this.props.data.wins}</Td>
                    <Td to={`/users/${this.props.data._id}`}>{this.props.data.losses}</Td>
                    <Td to={`/users/${this.props.data._id}`}>{this.props.data.matchesplayed}</Td>
                </tr>
            );
  }

}
