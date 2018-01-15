import React, {Component} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col} from 'reactstrap';
import classnames from 'classnames';
import DonutChart from './DonutChart'
import Bar from './Bar'
import Calendar from '../Calendar'
import firebase from 'firebase'

class Charts extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  handleSignOut = () => {
    firebase.auth().signOut()
  };


  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({active: this.state.activeTab === '1'})}
              onClick={() => {
                this.toggle('1');
              }}
            >
              Budget : pie chart
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({active: this.state.activeTab === '2'})}
              onClick={() => {
                this.toggle('2');
              }}
            >
             bar graph
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({active: this.state.activeTab === '3'})}
              onClick={() => {
                this.toggle('3');
              }}
            >
             calendar
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="4">
                <DonutChart/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="4">
                <Bar/>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="4">
                <Calendar/>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        <button onClick={this.handleSignOut}>Wyloguj</button>
      </div>
    );
  }
}

export default Charts