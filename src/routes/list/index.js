import React, { Component } from 'react';
import CONST from '../../constants';

const Profile = (props) => {
  return <div>{props.profile.acf.name}</div>
}
class List extends Component {
  state = {
    profiles: []
  }
  componentDidMount(){
    fetch(CONST.API+'/profile').then(r => {
      r.json().then(profiles => {
        this.setState({profiles});
      })
    });
  }
  render(){
    return <div className="container">
      {this.state.profiles ? this.state.profiles.map(profile => <Profile profile={profile} />) : null}
    </div>
  }
}

export default List